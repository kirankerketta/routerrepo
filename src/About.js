import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function About(){
    const navigate=useNavigate()
    function goToHome(){
      navigate('/')
    }
    function goToContact(){
        navigate('/contact')
    }
    return(
        <>
        <div> i am About page</div>
        {/* <Link to="/">Home back</Link><br/><br/>
        <Link to="/contact">contact back</Link> */}
        <button onClick={goToHome}> Back to Home</button><br/><br/>
        <button onClick={goToContact}>Back to contact</button>
        </>
    )
}
export default About;