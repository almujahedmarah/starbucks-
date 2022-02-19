import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
  return (
    <div className="footer">
       <img width="200px" src="https://github.com/Ghadah-Ahmed/Project/blob/main/images/pngaaa.com-2563067.png?raw=true"/>
      <div className='fotter111'>
       <h2>SIGN UP FOR OUR NEWSLETTER</h2>
        <p>We'd love to stay in touch. <br /> Be the first to hear news of all things
            Starbucks by leaving your email below</p>
       

        <ul className='youlicon'>
            <li class="fa"><InstagramIcon/></li>
            <li class="fa"><FacebookIcon/></li>
            <li class="fa"> <WhatsAppIcon/></li>
        </ul>
        <ul className='youli'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>MENU</li>
            <li>GIFTS</li>
        </ul>
        </div>
    </div>
  )
}
