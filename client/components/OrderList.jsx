import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrders } from '../slices/orders'

import Order from './Order'

function OrderList({ children }) {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.orders)
  useEffect(() => {
    dispatch(fetchOrders())
  }, [])
  return (
    <div className="orderlist">
      <p className="thanksMessage">
        Thank you for supporting our not for profit organisation. <br />" I
        choose to be kind to myself. "
      </p>
      {children} {/* Holds the WaitIndicator */}
      {orders?.map((order) => {
        return <Order key={order.id} order={order} />
      })}
    </div>
  )
}

export default OrderList
