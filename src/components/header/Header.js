import React from 'react'
import "./Header.css"

const Header = () => {
  const resetFunc = () => {
    localStorage.setItem('searchInput', '')
    localStorage.removeItem('type')
    localStorage.removeItem('page')
    window.location.reload()
  }
    return (
        <header className="header">
            <nav className="#0a6ab6 blue header__nav">
              <div className="nav-wrapper container">
                <a href="#" className="brand-logo">MovieSAR</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href='#' onClick={resetFunc}>Movies</a></li>
                </ul>
              </div>
            </nav>
        </header>
    )
}

export default Header
