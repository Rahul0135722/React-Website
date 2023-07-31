import React from 'react'
import css from './WhatsApp.module.scss'
import WhatsappImg from '../../assets/Images/whatsappcircle.png';
import MobileCallingImg from '../../assets/Images/mobilecalling.png'

const WhatsApp = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <div className={css.mobile}>

                    <a href="tel:+919778109990">
                        <img src={MobileCallingImg} alt="phone" />
                        <span>Mobile</span>
                    </a>

                </div>
                <div className={css.whatsapp}>
                    <a
                        href="https://wa.me/+919778109990"
                        class="whatsapp_float"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={WhatsappImg} alt="Kochi Selfdrive whatsapp number" />
                    </a>

                    {/* <a target='_blank' href="https://api.whatsapp.com/send?phone=+918289888435&amp;text=I want to find out about your services">
                        <img src={WhatsappImg} alt="Kochi Selfdrive whatsapp number" />
                    </a> */}

                </div>
            </div>
        </div>
    )
}

export default WhatsApp