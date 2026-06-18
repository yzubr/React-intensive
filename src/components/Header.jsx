import { NavLink } from "react-router-dom"
import styles from './Header.module.css'

export default function Layout() {
  return (
    <header className={styles.header}>
      <nav >
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/categories" >Categories</NavLink></li>
          <li><NavLink to="/about">About us</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
