import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function Home(){
    const navigate=useNavigate()
    function goToAbout(){
    navigate('/about')
    }
    function goToContact(){
      navigate('/contact')  
    }

    return(
        <>
        <div> i am Home page</div>
        {/* <Link to="/contact"> Contact here</Link><br/><br/>
        <Link to="/about"> about  here</Link><br/><br/> */}
        <button onClick={goToContact}>contact </button><br/><br/>
        <button onClick={goToAbout}> about </button>
        </>
    )
}
export default Home;