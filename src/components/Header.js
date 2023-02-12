import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <header>
    <div className='container'>
      <div className="header-container">
      <div className="logo">
        <a href="Header.js"><img src="./images/logo.png" alt="logo" /></a>
      </div>

      <div className="navbar">
        <a href="!#">Home</a>
        <a href="!#">About</a>
        <a href="!#">Menu</a>
        <a href="!#">Products</a>
        <a href="!#">Review</a>
        <a href="!#">Contact</a>
        <a href="!#">Blogs</a>
      </div>

      <div className="icons__nav">
        <SearchIcon />
        <ShoppingCartIcon />
      </div>

      </div>
    </div>
    </header>
  )
}

export default Header