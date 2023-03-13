import React from 'react'
import './Signin.css';
import { useState } from 'react';
function Signin() {
  const [email,setEmail]=useState();
	const [pass,setPassword]= useState();
	// const navigate = useNavigate();
  return (
    <>
    <div className='text'>
      <p className='p'>Private Security and Firearms<br></br>
Management Information System</p>
    </div>

    <div className='card'>
      <p className='S'>
        Sign in
      </p>
    <div className='form'>
    <input id="user" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} class="input"  placeholder=" Email Address "/>
    </div>
    <div class="groupp">
					{/* <label for="pass" class="label">Password</label> */}
					<input id="pass" type="password" value={pass} onChange={(e)=>setPassword(e.target.value)} class="input" data-type="password" placeholder=" password"/>
				</div>
        <div class="group">
					<input  type="submit" class="button" value="Sign in" placeholder='Sign in'/>
				</div>
        <div className='user'>
          <p>I am a new user<span className='c'> Sign up</span></p>
        </div>
        </div>
    </>

  )
}

export default Signin
