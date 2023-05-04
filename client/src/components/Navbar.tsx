import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

export default function Navbar({}: Props) {
  return (<> 
   {/* // <!-- HEADER SECTION WITH LOGO AND NAV --> */}
    <div className="header">
       <div className="logoPosition ">
         <Link id="logoName" to={"/"}>LOGO</Link>
       </div>
        
        <nav>
            <Link className="a-tag" to={"search"}>Søg opskrifter</Link>
            <Link className="a-tag" to={"search"}>Example</Link>
            <Link className="a-tag" to={"search"}>Example</Link>
        </nav>
      </div>
    </>
  )
}

   


// <div className="logo" />
//     {/* <h1><a href=#aboutMe></a>About Me</h1> */}
//     <Link to={"/"}></Link>Logo</Link>
// <div />