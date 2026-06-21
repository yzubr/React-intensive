import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from '../redux/features/productSlice'

export default function Product() {

  const { productId } = useParams()

  const dispatch = useDispatch()
  const product = useSelector((state) => state.product.item)
  const status = useSelector((state) => state.product.status)
  const error = useSelector((state) => state.product.error)

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [productId, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <>
      {product ? (
        <div>
          <img src={product.image} alt={product.title} />
          <article>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>price: {product.price}$</p>
          </article>
        </div>
      ) : (
        <p>Product not found</p>
      )
      }
    </>
  )
}