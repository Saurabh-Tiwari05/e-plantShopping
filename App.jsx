import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ProductList from './components/ProductList'
import CartPage from './pages/CartPage'

function LandingPage() {
  const [showProducts, setShowProducts] = useState(false)
  const navigate = useNavigate()

  const handleGetStarted = () => {
    setShowProducts(true)
    navigate('/products')
  }

  return (
    <div className="background-image">
      {!showProducts ? (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>

          <p>
            Discover beautiful indoor and outdoor plants for your
            home and office.
          </p>

          <button onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
