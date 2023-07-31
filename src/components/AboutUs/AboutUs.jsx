import React from 'react'
import css from './AboutUs.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../Utility/motion';

const AboutUs = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={staggerContainer}
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="aboutus"></a>
            <motion.div className={`flexCenter innerWidth ${css.container}`}>
                <motion.h1
                    variants={fadeIn("down", "tween", 0.2, 1)}
                    className='primaryText'>
                    About Us
                </motion.h1>
                <motion.p
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className={`yPaddings ${css.aboutContent}`}>
                    Kerala self drive cars operated from  cochin international airport since 2007. Along with latest cars 
                    With competitive tariffs in car rental service industry in Kerala. We are focusing particularly airport passengers
                    to find out easily hire the self drive cars in Cochin Airport.

                </motion.p>
            </motion.div>
        </motion.div>
    )
}

export default AboutUs