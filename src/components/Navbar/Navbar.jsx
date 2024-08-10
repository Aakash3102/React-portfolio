import React, { useRef, useState } from 'react'
import "./Navbar.css"
import theme_pattern from "../../assets/download.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu  =() =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div id='navbar' className='navbar'>

      <div className='logo'>Aakash</div>

      <RiMenu3Line onClick={openMenu} className='nav-mob-open '/>

      <ul ref={menuRef} className='nav-menu'>
        <RiCloseLargeFill onClick={closeMenu} className='nav-mob-close'/>
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#navbar'>
            <p onClick={(() => setMenu("home"))}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={theme_pattern} alt='' /> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={(() => setMenu("about"))}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={theme_pattern} alt='' /> : <></>}</li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#mywork'>
            <p onClick={(() => setMenu("portfolio"))}>Portfolio</p></AnchorLink>
          {menu === "portfolio" ? <img src={theme_pattern} alt='' /> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={(() => setMenu("contact"))}>Contact</p></AnchorLink>
          {menu === "contact" ? <img src={theme_pattern} alt='' /> : <></>}</li>
      </ul>

      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
        Connect with Me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar