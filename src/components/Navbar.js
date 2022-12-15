import React from "react"
import PropType from 'prop-types'
export default function Navbar(props){


    return(
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
         <a className="navbar-brand px-1" href="/">{props.brand}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
      
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
               <a className="nav-link" href="/">Home</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="/">About</a>
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
