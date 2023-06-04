import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navigation } from './components/Navigation/Navigation'
import { Home } from 'containers/Home/Home'
import { Footer } from 'shared/Footer/Footer'
import { CategoryPage } from 'containers/Category/CategoryPage'
import { ProductCard } from 'containers/Product/ProductCard'
import { PaymentFinalization } from 'containers/PaymentFinalization/PaymentFinalization'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryid" element={<CategoryPage />} />
        <Route path="/:categoryid/:id" element={<ProductCard />} />
        <Route path="/payment" element={<PaymentFinalization />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
