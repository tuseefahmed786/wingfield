import React from 'react'
import logo from '../../static/assests/navbar/Layer_1.png'
import naviconfav from '../../static/assests/navbar/thumb_up_alt_24px.png'
import '../../styles/navbar.css'
function Navbar() {
  return (
    <>
        <header>
        <div className="logo">
            <img src={logo} alt="" srcset="" />
        </div>
        <nav className="top-navbar">
            <ul className='d-flex'>
                <li><a href='/'>Buy a car</a></li>
                <li><a href="/">Sell your car</a></li>
                <li><button className='finance-btn'>finance</button></li>
                <li><a href="/">contact</a></li>
                <li><a href="/" className='fav-icon'><img src={naviconfav} alt="" srcset=""/>My My favourites</a></li>
            </ul>
        </nav>
        </header>
    </>
  )
}

export default Navbar