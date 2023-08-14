import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navigation } from 'components/Navigation/Navigation'
import { CategoryPage } from 'containers/Category/CategoryPage'
import { Home } from 'containers/Home/Home'
import { PaymentFinalization } from 'containers/PaymentFinalization/PaymentFinalization'
import { ProductCard } from 'containers/Product/ProductCard'
import { Footer } from 'shared/Footer/Footer'
// import { Home } from 'components/Home/Home'
// import { Footer } from 'components/Footer/Footer'
// import { CategoryPage } from 'components/Category/CategoryPage'
// import { ProductCard } from 'components/Product/ProductCard'
// import { PaymentFinalization } from 'components/PaymentFinalization/PaymentFinalization'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryName" element={<CategoryPage />} />
        <Route path="/:categoryName/:productName" element={<ProductCard />} />
        <Route path="/payment" element={<PaymentFinalization />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
