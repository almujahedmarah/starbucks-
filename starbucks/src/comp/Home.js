import React from 'react'
import Nav from './Nav'
import Menu from './Menu'
import More from './More'
import Menu2 from './Menu2'
import Footer from './Footer'
export default function Home() {
  return (
    <div className='Home'>
     
         <Nav/>
        <div className='homeflxe' data-aos="fade-right">
          <div className='hometxt'>
          <h3 className='h11'>Grap your</h3>
          <h1 className='h11'>Frappuccion</h1>
          <p className='ph'>To say Starbucks® purchases and roasts high-quality whole bean coffees is very true. That’s the essence of what we do – but it hardly tells the whole story.</p>
          </div>
          <div data-aos="fade-left">
          <img className='imghome' src="https://github.com/Ghadah-Ahmed/Project/blob/main/images/222.png?raw=true" width="300px"/>
          </div>
        </div>
        <div className='babysStarbucks' data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1500" >
        <img   className='flavourimg' width="100" data-aos="fade-up" data-aos-duration="1300"  data-aos-delay="2000" src="https://github.com/Ghadah-Ahmed/Project/blob/main/images/4.png?raw=true" />
          <img className='flavourimg' width="100" data-aos="fade-up" data-aos-duration="1300"  data-aos-delay="2500"  src="https://github.com/Ghadah-Ahmed/Project/blob/main/images/3.png?raw=true" />
          <img className='flavourimg' width="100"  data-aos="fade-up" data-aos-duration="1300"  data-aos-delay="3000" src="https://github.com/Ghadah-Ahmed/Project/blob/main/images/5.png?raw=true"/>
        </div>
        <Menu />
        <More/>
        <Menu2/>
        <Footer/>
        </div>
  )
}
