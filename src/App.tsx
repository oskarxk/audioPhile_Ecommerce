import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import {
  Home,
  CategoryPage,
  ProductCard,
  PaymentFinalization,
  AdminLogin,
  OrderSuccess,
  OrderCancel,
  Orders,
  OnlineChats,
  ResolvedChats,
  NotFoundPage,
  AdminPrivateRoutes,
} from './components/index'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentFinalization />} />
        <Route element={<AdminPrivateRoutes />}>
          <Route element={<OnlineChats />} path="/onlineChats" />
          <Route element={<ResolvedChats />} path="/resolvedChats" />
          <Route element={<Orders />} path="/orders" />
        </Route>
        <Route element={<AdminLogin />} path="/adminLogin" />
        <Route path="/:categoryName/:productName" element={<ProductCard />} />
        <Route path="/:categoryName" element={<CategoryPage />} />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/canceled" element={<OrderCancel />} />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </div>
  )
}

export default App
