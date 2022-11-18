import React from 'react'
import { useDispatch } from 'react-redux'
import { updateOrderStatus } from '../slices/orders'

import OrderItem from './OrderItem'

function Order(props) {
  const { id, products } = props.order
  const dispatch = useDispatch()

  function cancelOrder() {
    dispatch(updateOrderStatus({ id, status: 'cancelled' }))
  }

  function completeOrder() {
    dispatch(updateOrderStatus({ id, status: 'completed' }))
  }

  return (
    <div className="order">
      <p className="offering">Offering #{id}</p>
      <p className="order-details">Offering confirmed</p>
      <p className="order-details"></p>
      <table>
        <thead>
          <tr>
            <td role="columnheader">Class</td>
            <td role="columnheader">Donation Amount</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            console.log('here', product)
            return <OrderItem key={product.id} product={product} />
          })}
        </tbody>
      </table>
      <div>
        {status === 'pending' && (
          <>
            <button onClick={cancelOrder} className="order-button">
              Cancel class
            </button>
            <button
              onClick={completeOrder}
              className="order-button button-primary"
            >
              Offering request recieved
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Order
