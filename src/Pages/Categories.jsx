import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <h3>Choose a category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/categories/${category}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;