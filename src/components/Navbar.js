import React from "react"
import PropType from 'prop-types'
import { Link } from "react-router-dom"
export default function Navbar(props){


    return(
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
         <Link className="navbar-brand px-1" to="/">{props.brand}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
      
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
               <Link className="nav-link" to="/">Home</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/About">About</Link>
             </li>
           </ul>
            
        </div>
        <div className={`form-check form-switch position-absolute end-0 text-${props.mode==='light'?'dark':'light'}`}>
             <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked/>
             <label className="form-check-label px-1" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Light':'Dark'} Mode</label>
           </div>
     </nav>

     
    
    )
}

Navbar.PropType = {brand : PropType.string.isRequired}

Navbar.defaultProps = {brand : "Set Title"}
