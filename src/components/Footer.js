import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer__icons">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />
                <YouTubeIcon />
            </div>
                <div className="footer__nav">
                    <a href="!#">Home</a>
                    <a href="!#">About</a>
                    <a href="!#">Menu</a>
                    <a href="!#">Products</a>
                    <a href="!#">Review</a>
                    <a href="!#">Contact</a>
                    <a href="!#">Blogs</a>
                </div>
                <p>Created By <a href="Header.js">KAUSHIK V</a> </p>
        </div>
    </div>
  )
}

export default Footer