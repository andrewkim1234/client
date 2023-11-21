import React from 'react'

const Login = () => {
  return (
    <div className='authentication'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username...' />
        <input type="text" placeholder='password...' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login                                    