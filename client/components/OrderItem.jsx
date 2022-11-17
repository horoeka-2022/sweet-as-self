import React from 'react'

function OrderItem(props) {
  const { offering, quantity } = props.product
  return (
    <tr>
      <td>{offering}</td>
      <td>{quantity}</td>
    </tr>
  )
}

export default OrderItem
