import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Nav() {
  return (
    <div className='nav' data-aos="fade-down">
    <ul>
      <img width="50px" src="https://github.com/Ghadah-Ahmed/Project/blob/main/images/pngegg.png?raw=true"/>
      <li>ABOUT</li>
       <li>MENU</li>
       <li>GIFT CARDS</li>
    </ul>
    </div>
  )
}
