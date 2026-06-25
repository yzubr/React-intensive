import LogInForm from "../components/LogInForm"
import { Link } from "react-router-dom"
import styles from './LoginSignup.module.css'

export default function Login() {
  return (
    <article className={styles.authform}>
      <h2>Log in</h2>
      <LogInForm />
      <p>
        Don't have an account yet? <Link to="/signup">Register</Link>
      </p>
    </article>
  )
}