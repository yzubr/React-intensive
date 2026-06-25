import SignUpForm from "../components/SignUpForm"
import { Link } from "react-router-dom"
import styles from './LoginSignup.module.css'

export default function Signup() {
  return (
    <article className={styles.authform}>
      <h2>Register</h2>
      <SignUpForm />
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </article>
  )
}