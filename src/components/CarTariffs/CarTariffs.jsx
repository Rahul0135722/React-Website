import React, { useEffect, useRef, useState } from 'react'
import css from "./CarTariffs.module.scss";
import { motion } from 'framer-motion';
import { carDetails } from '../../Utility/CarDetails'
import { fadeIn, staggerContainer } from '../../Utility/motion';


const CarTariffs = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <section className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="tariffs"></a>
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={staggerContainer}
                viewport={{ once: false, amount: 0.25 }}
                className={`innerWidth ${css.container}`}>
                <motion.h1
                    variants={fadeIn("down", "tween", 0.2, 1)}
                    className={`primaryText flexCenter ${css.headText}`}>
                    Cars Tariffs
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
                            carDetails.map(car => {
                                return (
                                    <motion.div className={css.carTariffs} key={car.id}>
                                        <motion.div className={css.item}>
                                            <img src={car.image} alt="" />
                                        </motion.div>
                                        <motion.div className={css.cardetails}>
                                            <span className={`secondaryText`}>{car.name}</span>
                                            <span className={`thiredText`}>{car.type}</span>
                                            <span className={`thiredText`}>Rent Per Day : Rs {car.rentperday}/-</span>
                                            <span className={`thiredText`}>{car.type1} {car.autogeard}</span>
                                            <span className={`thiredText`}>Rent Per Month : Rs {car.rentpermonth}/-</span>
                                            <span className={`thiredText`}>{car.type2} {car.autogearm}</span>
                                        </motion.div>
                                    </motion.div>
                                )
                            })
                        }

                    </motion.div>

                </motion.div>
            </motion.div>
        </section>
    )
}

export default CarTariffs