import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Product() {

  const { productId } = useParams()
  const [product, setProduct] = useState([]);

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [productId]);


  return (
    <>
      <img src={product.image} alt={product.title} />
      <article>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>price: {product.price}$</p>
      </article>
    </>
  )
}