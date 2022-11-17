import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// import { addToCart } from '../slices/cart'
// import { fetchProducts } from '../slices/products'

// import classListItem from './classListItem'

// function ClassList({ children }) {
// const products = useSelector((state) => state.products)
// const navigate = useNavigate()
// const dispatch = useDispatch()
// useEffect(() => {
//   dispatch(fetchProducts())
// }, [])

// function addProductToCart(product) {
//   const { id, name } = product
//   const newCartItem = { id, name }
//   dispatch(addToCart(newCartItem))
//   navigate('/cart')
// }
function ClassList() {
  return (
    <div className="classList">
      <div className="class">
        <img src="/imgs/Images/cooking.png" alt="cooking class img" />
        <div>
          <p className="class-name">Cooking class!</p>
          <p className="class-description">It's good</p>
          
        </div>
      </div>
      <p>this is class list</p>
      {/* {children} This holds the WaitIndicator (from App) */}
      {/* {products.map((product) => {
        return (
          <classListItem
            key={product.id}
            product={product}
            addToCart={addProductToCart}
          />
        )
      })} */}
    </div>
  )
}

export default ClassList
