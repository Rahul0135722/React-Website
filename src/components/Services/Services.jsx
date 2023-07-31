import React, { useEffect, useRef, useState } from 'react';
import css from './Services.module.scss';
import { services } from '../../Utility/Services'
import { motion } from 'framer-motion';
import { BsStarFill } from 'react-icons/bs'
import { fadeIn, staggerContainer } from '../../Utility/motion';

const Services = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            variants={staggerContainer}
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="services"></a>
            <motion.div
                className={`innerWidth ${css.container}`}>
                <motion.h1
                    variants={fadeIn("down", "tween", 0.2, 1)}
                    className={`primaryText flexCenter ${css.headText}`}>
                    Our Services
                </motion.h1>
                <motion.div
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    ref={carousel}
                    whileTap={{ cursor: "grabbing" }}
                    className={`yPaddings ${css.carsCarousels}`}>

                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className={css.innerCarousel}>

                        {
                            services.map(service => {
                                return (
                                    <motion.div className={css.servicesDetails} key={service.id}>
                                        <motion.div className={css.items}>
                                            <img src={service.image} alt="" />
                                        </motion.div>
                                        <motion.div className={css.ourServices}>
                                            <BsStarFill className={css.startIcon} />
                                            <span className={css.servicesText}>{service.service}</span>
                                        </motion.div>
                                    </motion.div>
                                )
                            })
                        }

                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Services