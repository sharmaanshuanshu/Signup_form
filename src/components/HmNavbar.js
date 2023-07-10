import React from 'react'
import './HmNavbar.css';
import { Link } from 'react-router-dom';
export default function HmNavbar() {
    return (
        <>
            <nav className="flex space-between navbar ">
                <div className="left flex  items-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQKVbEzjdkU-X5t1ZS3CP4r-s-k_twfNwtGbj2u7iwEXDjnTuDlRPOoo0wNt5qj_dLac&usqp=CAU" />
                    <ul className="flex items-center justify-center upperCase semiBold">
                        <li><Link to={"/men"}>Men</Link></li>
                        <li><Link to={"/women"}>Women</Link></li>
                        <li><Link to={"/kids"}>Kids</Link></li>
                        {/* <li>Home and Living</li>
                        <li>Beuty</li>
                        <li>Studio</li> */}
                    </ul>
                </div>
                <div className="right flex items-center">
                    <input className='search' placeholder="Search for product, brands and more" />
                    <div className="clearfix">
                        <Link to={'/signin'}> <button className="signinbtn">Sign In</button></Link>
                        <Link to={'/signup'}> <button type="submit" className="signupbtn">Sign Up</button></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
