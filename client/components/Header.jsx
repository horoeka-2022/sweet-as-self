import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">My Orders</Link>
      </nav>
      <img
        className="logo"
        src="/imgs/Images/logo2.png"
        alt="Sweet as self logo"
      />
    </>
  )
}

export default Header
