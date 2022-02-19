import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className='nav' data-aos="fade-down">
    <ul>
      <img width="50px" src="https://github.com/Ghadah-Ahmed/Project/blob/main/images/pngegg.png?raw=true"/>
      {/* <li><>ABOUT</></li> */}
       <li><a className='link' href='#x'>MENU</a></li>
       
       <li>
         <Link className='link' to="/Cart">
         Cart
         </Link>
         
         </li>
    </ul>
    </div>
  )
}
