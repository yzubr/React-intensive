import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../redux/features/categoriesSlice'
import { Link } from 'react-router-dom'

const Categories = () => {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list)
  const status = useSelector((state) => state.categories.status)
  const error = useSelector((state) => state.categories.error)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;


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