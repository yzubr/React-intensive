import { useState } from "react"

export default function Form({ buttonTitle, handleSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(email, password)
    }}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">
        {buttonTitle}
      </button>
    </form>
  )
}