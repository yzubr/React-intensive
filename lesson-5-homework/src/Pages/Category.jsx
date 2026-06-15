import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "./Category.module.css"

export default function Category() {

  const [productsByCategory, setproductsByCategory] = useState([]);

  const { categoryName } = useParams()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => {
        setproductsByCategory(data.filter(item => item.category ===  categoryName ));
      })
  }, []);


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