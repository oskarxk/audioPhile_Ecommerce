import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from 'components/Home/Home'
import { CategoryPage } from 'components/Category/CategoryPage'
import { ProductCard } from 'components/Product/ProductCard'
import { PaymentFinalization } from 'components/PaymentFinalization/PaymentFinalization'
import { AdminLogin } from 'components/AdminPanel/AdminLogin'
import { OrderSuccess } from 'components/PaymentFinalization/OrderSuccess'
import { OrderCancel } from 'components/PaymentFinalization/OrderCancel'

import { Orders } from 'components/AdminPanel/Orders'
import { OnlineChats } from 'components/AdminPanel/OnlineChats'
import { ResolvedChats } from 'components/AdminPanel/ResolvedChats'
import { NotFoundPage } from 'components/NotFoundPage/NotFoundPage'
import AdminPrivateRoutes from 'components/AdminPanel/AdminPrivateRoutes'
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<PaymentFinalization />} />
            <Route element={<AdminPrivateRoutes />}>
              <Route element={<OnlineChats />} path="/onlineChats" />
              <Route element={<ResolvedChats />} path="/resolvedChats" />
              <Route element={<Orders />} path="/orders" />
            </Route>
            <Route element={<AdminLogin />} path="/adminLogin" />
            <Route
              path="/:categoryName/:productName"
              element={<ProductCard />}
            />
            <Route path="/:categoryName" element={<CategoryPage />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/canceled" element={<OrderCancel />} />
            <Route element={<NotFoundPage />} path="*" />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
