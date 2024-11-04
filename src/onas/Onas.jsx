import React from 'react'
import './onas.css'
import Navbar from '../Nav/Navbar'
import Mentors from '../Mentors/Mentors'
function Onas() {
  return (
    <div className='home-p1'>
        <Navbar/>
      <div className="home-text">
        <h1>Наша главная цель — дать молодежи глубокие знания в области <br /> IT и тем самым внести свой вклад в развитие Узбекистана.</h1> 
        <p>Каждый студент, пришедший в Академию Vercel IT, получит технологический кампус работающий 24/7, инновационную систему обучения и удобства. А те, кто успешно <br /> закончили курс, получают сертификат QWASAR, который позволяет им работать в Силиконовой долине Америки.</p>
      </div>
    </div>
  )
}

export default Onas
