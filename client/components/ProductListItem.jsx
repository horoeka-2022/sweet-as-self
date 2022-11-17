import React from 'react'

function ProductListItem(props) {
  const product = props.product

  function addToCart() {
    props.addToCart(product)
  }

  return (
    <>
      <div className="product">
        <p className="name">{product.offering}</p>
        <p className="description">{product.description}</p>

        <p>
          <span className="country">Location: {product.location}</span>
          <button className="cart-link" onClick={addToCart}>
            BOOK
          </button>
        </p>
      </div>

      {/* <div className="class">
        <img src="/imgs/Images/cooking.png" alt="Cooking class" />
        <p>hello</p>
      </div> */}
    </>
  )
}

export default ProductListItem
