import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../slices/orders'

import { Link, useNavigate } from 'react-router-dom'

import CartItem from './CartItem'

function Cart(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { children } = props
  const cart = useSelector((state) => state.cart)

  function submitCart() {
    alert('Thanks for your donation!')
    dispatch(placeOrder(cart))
    navigate('/')

    console.log('coming soon!')
  }

  return cart.length ? (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <td role="columnheader">Class</td>
            <td role="columnheader">Donation $</td>
            <td role="columnheader">Remove</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, id) => {
            return <CartItem key={id} item={item} />
          })}
        </tbody>
      </table>
      <p className="actions">
        <Link to="/">Look for more classes</Link>
        <span>
          {children} {/* Holds the WaitIndicator */}
          <button className="button-primary" onClick={submitCart}>
            Make Donation
          </button>
        </span>
      </p>
    </div>
  ) : (
    <p className="thanksMessage">
      Support your community and yourself <br />
      <Link to="/">here</Link>
    </p>
  )
}

export default Cart
