import React from 'react'

function Signup() {
  return (
    <>
    <div className='container '>
    <h1>----Sign Up----</h1>
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
    <button>Singup</button>
    <br/>
    </div>
    </>
  )
}

export default Signup