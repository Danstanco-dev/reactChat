import React, { useRef, useState } from 'react'
import "../assets/sass/register.scss"
import { Link } from 'react-router-dom'
/* import { registerAsync } from '../services/AuthSevices';
 */
const Register = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const userRef = useRef()

    const [error, seterror] = useState("");
    const [loading, setloading] = useState(false);

    const clearInputs = () => {
      if(emailRef?.current) {
        emailRef.current.value = "";
      }
      if(passwordRef?.current) {
        passwordRef.current.value = "";
      }
      if(userRef?.current) {
        userRef.current.value = ""
      }
    }

  const handleSubmit = async(e) => {

    e.preventDefault()
    
    setloading(true)
     
    const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      username: userRef.current.value
     }
     
     console.log("Register", creds)
try {

  /* await registerAsync(creds); */
  
  clearInputs()
  setloading(false)
} catch (error) {
const message = error.code
seterror(message);
setloading(false);
}
  }


  return (
    <div className='register'>
    <div className="wrapper">
      <h1>Danstanco WebChat</h1>
      <h2 className='heading'>Register</h2>
      <form onSubmit={handleSubmit} className='form'>
        { error && <span className='error-msg'>{error}</span>}
        <input required ref={userRef} type="text" placeholder='Username'/>
        <input required ref={emailRef} type="email" placeholder='Email'/>
        <input required ref={passwordRef} type="password" placeholder='Password'/>
        <button disabled={loading} type='submit'>{loading ? "Loading..." : "Login"}</button>
        <span className='link'><Link to="/login">Alright have an Account? Login here!</Link></span>
      </form>
    </div>
  </div>
  )
}

export default Register