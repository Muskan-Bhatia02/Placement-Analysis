import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand navbar-new" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 space" >
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">{props.para1}</a>
          </li>
  
          <li className="nav-item">
            <a className="nav-link" href="/">{props.para2}</a>
          </li>
  
          <li className="nav-item">
            <a className="nav-link" href="/">{props.para3}</a>
          </li>
  
          <li className="nav-item">
            <a className="nav-link" href="/">{props.para4}</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  )
}


Navbar.propTypes= {title: PropTypes.string.isRequired,
                   para1 : PropTypes.string,
                   para2 : PropTypes.string,
                   para3 : PropTypes.string,
                   para4 : PropTypes.string}


Navbar.defaultProps = {
    title: "Placement Analysis"
}