import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'

const Login = ({ handleInput, handleSubmit }) => {
    return (
        <div>
            <>
                <input type='text' name='email' placeholder='Enter Email' onChange={handleInput} />
                <br />
                <input type='password' name='password' placeholder='Enter Password' onChange={handleInput} />
                <br />
                <button onClick={handleSubmit}>Login</button>
            </>
         
            <br />
      <Link to="/contact">
        <button type="button" className="btn btn-outline-primary">
          Contact Page
        </button>
      </Link>
        </div>
    )
}

export default Login
