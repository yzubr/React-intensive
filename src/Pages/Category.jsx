import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { fetchAllProducts } from '../redux/features/productsSlice'
import styles from "./Category.module.css"

export default function Category() {

  const dispatch = useDispatch()
  const { categoryName } = useParams()


  const productsAll = useSelector((state) => state.products.list)
  const status = useSelector((state) => state.products.status)
  const error = useSelector((state) => state.products.error)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllProducts())
    }
  }, [status, dispatch])

  const productsByCategory = (productsAll.filter(item => item.category === categoryName))

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;


  return (
    <>
      <h2 className={styles.title}>{categoryName}</h2>
      <ul className={styles['products-container']}>
        {productsByCategory.map((product) => (
          <li key={product.id}>
            <Link to={`/categories/${categoryName}/${product.id}`}>
              <article>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>price: {product.price}$</p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}