import React, { useState } from 'react'
import './SignupForm.css'
export default function SignupForm() {
    const [fName, setfName] = useState('');
    const [user, setUser] = useState('');
    const [userError, setUserError] = useState(false);
    const [formData, setFormData] = useState({});

    function loginHandle(e) {
        e.preventDefault();
        console.log(formData);
    }

    function handleInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    /*   function userHandler(e) {
          let item = e.target.value;
          if (item.length < 3) {
              setUserError(true);
          } else {
              setUserError(false);
  
          }
      } */

    return (
        <div className='signupdiv'>
            <form className='formRef' onSubmit={loginHandle}>
                <h1 className='hdsignup'>SIGN UP</h1>
                <label ><b>FirstName:</b></label>
                <input type='text' placeholder='firstName' name='firstName' onChange={handleInputChange}></input><br></br><br></br>
                <label ><b>LastName:</b></label>
                <input type='text' placeholder='lastName' name='lastName' onChange={handleInputChange}></input><br></br><br></br>
                <label className='email' ><b>Email:</b></label>
                <input className='inEmail' type='text' placeholder='email' name='email' onChange={handleInputChange}/*  onChange={userHandler} */></input> {/* {userError ? <span className='sp'>User Not Valid</span> : ''} */}<br></br><br></br>
                <label ><b>Password:</b></label>
                <input className='password' type='text' placeholder='password' name='password' onChange={handleInputChange}></input><br></br><br></br>
                <label className='gender' ><b>Gender:</b></label>
                <input className='maleBtn' type="radio" name="Male" onChange={handleInputChange} />
                <label >Male</label>
                <input className='femaleBtn' type="radio" name="Female" onChange={handleInputChange} />
                <label className='female' >Female</label><br></br><br></br>
                <label ><b>Phone No:</b></label>
                <input className='phone' type='text' placeholder='phoneNo' onChange={handleInputChange} name="phoneNo"></input><br></br><br></br>
                <label ><b>Country:</b></label>
                <input className='country' type='text' placeholder='country' onChange={handleInputChange} name="country"></input><br></br><br></br>
                <label ><b>Designation :</b></label>
                <input className='designation ' type='text' placeholder='designation ' onChange={handleInputChange} name="designation"></input><br></br><br></br>
                <label ><b>City :</b></label>
                <input className='city ' type='text' placeholder='city ' onChange={handleInputChange} name="city"></input><br></br><br></br>
                <button type='submit' className='sbmBtn' /* onClick={handleSignupForm} */ >Submit</button>
            </form>

        </div>
    )
}
