import React, { useRef, useState } from 'react'
import "../assets/sass/login.scss"
import { Link } from 'react-router-dom'

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

    const [error, seterror] = useState("");
    const [loading, setloading] = useState(false);

    const clearInputs = () => {
      if(emailRef?.current) {
        emailRef.current.value = "";
      }
      if(passwordRef?.current) {
        passwordRef.current.value = "";
      }
    }

  const handleSubmit = (e) => {

    e.preventDefault()
    
    setloading(true)
     
     const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value
     }
    
     try {
  
     } catch (error) {
       seterror(" We got some: ",error)
     }

     console.log("login", creds)
    clearInputs()
    setloading(false)
  }
  return (
    <div className='login'>    
      <div className="wrapper">
        <h1>Danstanco WebChat</h1>
        <h2 className='heading'>Login</h2>
        <form onSubmit={handleSubmit} className='form'>
          { error && <span className='error-msg'>{error}</span>}
          <input required type="email" placeholder='Email' ref={emailRef}/>
          <input required type="password" placeholder='Password' ref={passwordRef}/>
          <button disabled={loading}  type='submit'>{loading ? "Loading..." : "Loading"}</button>
          <span className='link'><Link to="/register" >No Account? Register here!</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login