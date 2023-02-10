import React from 'react'

function Login() {
  return (
    <>
    <div className='container '>
    <h1>----Login----</h1>
    <input type={'text'} placeholder="Name" />
    <br/>
    <input type={'text'} placeholder="Father Name" />
    <br/>
    <br/>
    <input type={'password'} maxLength='11' placeholder="Password" />
    <br/>
    <br/>
    <input type={'password'} maxLength='11' placeholder="Conform Password" />
   <br/>
   <br/>
    <button>Login</button>
    <br/>
    </div>
    </>
  )
}

export default Login