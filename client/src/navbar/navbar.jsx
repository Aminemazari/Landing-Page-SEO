import React from 'react'
import "./navbarStyle.css"
import "../component/ComponentStyle.css"
const navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo'><p className='logotitle'>LOGO</p></div>
      <section className='NavBarSectionOne'>
        <button className='SecondaryButton'>Home</button>¨
        <button className='SecondaryButton'>Service</button>
        <button className='SecondaryButton'>Offers</button>
        <button className='SecondaryButton'>Contacts</button>
      </section>   
        <button className='CTA-button'>Log In</button>
    </div>
  )
}

export default navbar
