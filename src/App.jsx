

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Products from './components/products/product'
import CategoryProducts from './components/category-products/category-product'
import Cart from './components/cart-items/cart'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header className="header">
          <div className='h'>
                <Link to="/"><h1 className="logo">🛍️ My E-Commerce</h1></Link>

          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search products..." />
            <button>🔍</button>
          </div>

          <div className="cart">
            <Link to="/cart">🛒 <span>Cart (0)</span></Link>
          </div>
        </header>

        <div className="layout">
          <aside className="sidebar">
            <h2>Categories</h2>
            <ul>
              <li><Link to="/">All</Link></li>
              <li><Link to="/category/electronics">Electronics</Link></li>
              <li><Link to="/category/jewelery">Jewelery</Link></li>
              <li><Link to="/category/men's clothing">Men's Clothing</Link></li>
              <li><Link to="/category/women's clothing">Women's Clothing</Link></li>
            </ul>
          </aside>

          <main className="content">
            <Routes>
              <Route path='/' element={<Products />} />
              <Route path="/category/:name" element={<CategoryProducts />} />
              <Route path="/cart" element={<Cart/>} />



            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

