import React from 'react'
import css from './TermsAndConditions.module.scss'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../Utility/motion';

const TermsAndConditions = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={staggerContainer}
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="terms&conditions"></a>
            <motion.h1
                variants={fadeIn("down", "tween", 0.2, 1)}
                className='flexCenter primaryText'>
                Terms & Conditions
            </motion.h1>
            <div className={`flexCenter innerWidth yPaddings ${css.container}`}>
                <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className={css.terms}>
                    <div className={css.conditions}>
                        <h1 className='primaryText'>Conditions</h1>
                        <ul className={css.termsList}>
                            <li>Age Should be above 23</li>
                            <li>Minimum 3 days*  for Unlimited* km</li>
                            <li>Cochin airport Transfers Rs.500</li>
                            <li>Security deposit Rs.5000 (Refund after 3 working days)</li>
                            <li>No refunds for any cancellations</li>
                            <li>Payment terms are 100% digital transactions</li>
                            <li>All Cars are with fully Insured,Maximum Liability is Rs.10000.</li>
                            <li>Credit card* taxes will be extra</li>
                            <li>All original Documents should keep at the time of hiring.</li>
                            <li>12am to 12am rental tariffs.</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className={css.terms}>
                    <div className={css.booking}>
                        <h1 className='primaryText'>Booking Process</h1>
                        <div className={css.bookingList}>
                            <span className='secondaryText'>For Indians</span>
                            <p className={css.termsText}>
                                Driving license, Adaar card and Business card or Employee Identity and Two way Flight tickets
                                ( All orginal should be keep at the time of hiring the car )
                            </p>
                            <span className='secondaryText'>For NRI or foreigners</span>
                            <p className={css.termsText}>
                                Original Passport, International Driving permit, Valid visa, Hotel booking details and two way tickets
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default TermsAndConditions