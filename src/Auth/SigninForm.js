import React from 'react'
import './SigninForm.css'
export default function SigninForm() {
    return (
        <div className='signindiv'>
            <form>
                <h1 className='hdsignin'>LOGIN IN</h1>
                <label className='email' ><b>Email:</b></label>
                <input className='inEmail' type='text' placeholder='email'></input><br></br><br></br>
                <label ><b>Password:</b></label>
                <input className='password' type='text' placeholder='password'></input><br></br><br></br>
            </form>
        </div>
    )
}
