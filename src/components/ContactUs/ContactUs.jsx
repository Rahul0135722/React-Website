import React from 'react'
import css from './ContactUs.module.scss';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../Utility/motion';
import Logo from '../../assets/Images/selfdrivelogo.png'

const ContactUs = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={staggerContainer}
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="contactus"></a>
            <motion.div
                className={`flexCenter innerWidth ${css.container}`}>
                <motion.div className={css.footer}>
                    <motion.div
                        variants={fadeIn("down", "tween", 0.2, 1)}
                        className={`${css.logoSection}`}>
                        <img src={Logo} alt="NovaLogo" />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("down", "tween", 0.2, 1)}
                        className={`${css.contactSection}`}>
                        <h1>Contact Us On</h1>
                        <span className='secondaryText'> Kerala Self Drive</span>
                        <p>
                            7716V, Saibaba colony, Mettupalayam road, Coimbatore 641043, Tamilnadu
                        </p>
                        <p>Phone Number : +91 977 8109 990 </p>
                    </motion.div>
                    <motion.div className={`${css.socialMedia}`}>
                        <motion.span
                            variants={fadeIn("down", "tween", 0.2, 1)}
                            className={`secondaryText ${css.socialText}`}>
                            Social Media Accounts
                        </motion.span>
                        <motion.div
                            variants={fadeIn("up", "tween", 0.2, 1)}
                            className={css.mediaIcons}>
                            <a target='_blank' href="https://www.facebook.com/novaselfdrive?mibextid=ZbWKwL">
                                <BsFacebook size={30} className={css.mediaICon} />
                            </a>
                            <a target='_blank' href="https://instagram.com/novaselfdrivecochin?igshid=ZDdkNTZiNTM=">
                                <BsInstagram size={25} className={css.mediaICon} />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/nova-self-drive-car-86b62b149">
                                <BsLinkedin size={25} className={css.mediaICon} />
                            </a>
                            <a target='_blank' href="https://twitter.com/nova_selfdrive?t=dvQtEgPSYR8oMPNk1lTWWg&s=09">
                                <BsTwitter size={25} className={css.mediaICon} />
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className={`flexCenter ${css.footerEnd}`}>
                    <span className='footerEndText'>Copyright 2023 © Website Reserved All Rights | Designed by Rahul AM Freelancer</span>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default ContactUs