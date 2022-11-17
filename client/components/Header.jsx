import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Treat yourself!</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">My Classes</Link>
      </nav>
      <h1>
        <span className="fa fa-leaf" aria-hidden="true" /> Sweet As Self{' '}
        <span className="fa fa-leaf" aria-hidden="true" />
      </h1>
    </>
  )
}

export default Header
