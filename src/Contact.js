import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function Contact(){
    const navigate=useNavigate()
    function goToAbout(){
     navigate('/about')
    }
    return(
        <>
        <div>i am contact page</div>
        {/* <Link to="/about">about here</Link> */}
        <button onClick={goToAbout}>about</button>
        </>
    )
}
export default Contact;