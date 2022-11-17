import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addToCart } from '../slices/cart'
import { fetchProducts } from '../slices/products'

import ProductListItem from './ProductListItem'

function ProductList({ children }) {
  const products = useSelector((state) => state.products)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  function addProductToCart(product) {
    const { id, name } = product
    const newCartItem = { id, name }
    dispatch(addToCart(newCartItem))
    navigate('/cart')
  }

  return (
    <div className="productlist">
      <div className="welcome">
        <p>
Founded in 2022
Sweet as Self is a pay what you can model
Is a not for profit organisation providing “world class” wonderful self care workshops 
Our eco system is a giving one, of skill sharing and donation. 
Got a class you would like to share with the community, get in touch about gifting your time today info@sweetasself.co.nz
Have a nominal amount of money you would like to donate, book into one of our gratitude based classes today
</p>
      </div>
      {children} {/* This holds the WaitIndicator (from App) */}
      {products.map((product) => {
        return (
          <ProductListItem
            key={product.id}
            product={product}
            addToCart={addProductToCart}
          />
        )
      })}
    </div>
  )
}

export default ProductList
