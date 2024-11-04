import React from 'react'
import telegram from '../img/telegram-brands-solid.svg'
import './tg.css'
import { Link } from 'react-router-dom'
function Telegram() {
    return (
        <div className='tg'>
        <div className="contaiiner">
            <div className="tg-ikon">
                <Link target='_blank' to='https://t.me/premium_isbot0'><img src={telegram} alt="" /></Link>
            </div>

        </div>
        </div>
    )
}

export default Telegram
