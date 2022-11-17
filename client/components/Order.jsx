import React from 'react'
import { useDispatch } from 'react-redux'
import { updateOrderStatus } from '../slices/orders'

import OrderItem from './OrderItem'

function Order(props) {
  const { id, products, createdAt, status } = props.order
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
      <p className="order-details">Offering confirmed: {createdAt}</p>
      <p className="order-details">
        <span className={`fa fa-circle ${status}`} aria-hidden="true"></span>
        Status: {status}
      </p>
      <table>
        <thead>
          <tr>
            <td role="columnheader">Class</td>
            <td role="columnheader">Quantity</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return <OrderItem key={item.id} product={item} />
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
