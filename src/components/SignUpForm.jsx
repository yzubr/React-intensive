import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Form from './AuthForm';
import { setUser } from '../redux/features/userSlice';
import { useId, useRef } from 'react';
import { nanoid } from 'nanoid';

export default function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const dialogRef = useRef(null)

  const handleRegister = (email, password) => {
    console.log(email)
    const users = JSON.parse(localStorage.getItem('users')) || []
    console.log(users)
    const userExist = users.some(user => user.email === email)

    if (userExist) {
      dialogRef.current?.showModal()
    }

    const newUser = {
      email,
      password,
      id: nanoid(8)
    }
    users.push(newUser)
    console.log(users)
    localStorage.setItem('users', JSON.stringify(users))
    dispatch(setUser({
      email: newUser.email,
      id: newUser.id,
    }))

    navigate('/')
  }

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  }

  return (
    <>
      <Form
        buttonTitle="create accaunt"
        handleSubmit={handleRegister}
      />

      <dialog ref={dialogRef} onClick={handleBackdropClick}>
        <h3>Accaunt is exist!</h3>
        <p>
          <Link to="/login">Log in</Link> or <button onClick={() => dialogRef.current?.close()}>create a new accaunt!</button>
        </p>
      </dialog>
    </>

  )
}
