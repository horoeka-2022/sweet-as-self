import React from 'react'

function ProductListItem(props) {
  const product = props.product

  function addToCart() {
    props.addToCart(product)
  }

  return (
    <>
      <div className="product">
        <div
          className="class-img-container"
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
        {/* <img className="class-img" src={product.image} alt="class icon" /> */}
        <p className="name">{product.offering}</p>
        <p className="description">{product.description}</p>

        <div>
          <p className="country">Teacher: {product.teacher}</p>
          <p className="country">Location: {product.location}</p>
          <p className="country">Date: {product.date}</p>
          <p className="country">Time: {product.time}</p>
          <button className="cart-link" onClick={addToCart}>
            BOOK
          </button>
        </div>
      </div>

      {/* <div className="class">
        <img src="/imgs/Images/cooking.png" alt="Cooking class" />
        <p>hello</p>
      </div> */}
    </>
  )
}

export default ProductListItem
