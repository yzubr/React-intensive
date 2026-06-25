import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Form from './AuthForm';
import { setUser } from '../redux/features/userSlice';
import { useRef } from 'react';

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const dialogRef = useRef(null)

  const handleLogin = (email, password) => {

    const users = JSON.parse(localStorage.getItem('users')) || []
    const currentUser = users.find((user) => (user.email === email && user.password === password))

    if (currentUser !=undefined) {
      dispatch(setUser({
        email: currentUser.email,
        id: currentUser.id,
      }));
      navigate('/')
    } else {
      dialogRef.current?.showModal()
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  }

  return (

    <>
      <Form
        buttonTitle="Log in"
        handleSubmit={handleLogin}
      />
      <dialog ref={dialogRef} onClick={handleBackdropClick}>
        <h3>Accaunt don't exist!</h3>
        <p>
          <Link to="/signup">Create a new accaunt</Link> or <button onClick={() => dialogRef.current?.close()}>log in</button>
        </p>
      </dialog>

    </>

  )
}