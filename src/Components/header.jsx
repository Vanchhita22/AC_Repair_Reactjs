import React from 'react';
import '../Asserts/styles/header.css';
function header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand">AC service</a>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
    
    </div>
  )
}

export default header;