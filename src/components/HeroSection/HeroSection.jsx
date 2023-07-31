import React, { useRef, useState } from 'react';
import css from "./HeroSection.module.scss";
import { carDetails } from '../../Utility/CarDetails';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../Utility/motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HeroSection = () => {

    const form = useRef();

    const [rent, setRent] = useState('');
    const [carName, setCarName] = useState('')

    const handleRent = (e) => {
        const getCarId = e.target.value;
        const getCarRent = carDetails.find(rent => rent.id == getCarId);
        const getCarName = carDetails.find(rent => rent.id == getCarId);
        setRent(getCarRent.rentperday)
        setCarName(getCarName.name)
    }

    const notifyOk = () => toast("Mail Send Successfully", {type: "success"}); 
    const notifyError = () => toast("Some thing went wrong ! Contact on whatsapp", {type:"error"}); 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rxpy9fw', 'template_2siqksm', form.current, 'IiWTFlF2PMP10XSt4')
            .then((result) => {
                notifyOk() 
                //console.log(result.text);
            }, (error) => {
                notifyError()
                //console.log(error.text);
            });
        e.target.reset();
        setRent('')
    };



    return (
        <section className={`paddings ${css.wrapper}`}>
            <ToastContainer 
             style={{width : "250px", font: "14px", marginTop: "30px"}}
             position="top-center"  
             />
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={staggerContainer}
                viewport={{ once: false, amount: 0.25 }}
                className={`flexCenter innerWidth yPaddings ${css.container}`}>
                <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className={css.heroSection}>
                    <h1 className={`primaryText ${css.headText}`}>Welcome To Kerala Self Drive !</h1>
                    <p className={css.secondText}>
                        Kerala Self Drive is one of the most trusted car rental service in Cochin Airport.
            
                        The rent-a-car service provider offers an latest model of car options 
                        at the most competitive tariffs.
                        we allow you to enjoy flexibility with respect to start and endpoints.
                        You can book cars on an daily, weekly, monthly basis. 
                        Moreover, we provide airport pickup and drop facility available for 365 Days.
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className={`flexCenter yPaddings ${css.rentForm}`}>
                    <form ref={form} onSubmit={sendEmail} className={css.sendmailform}>
                        <span className={`secondaryText ${css.bookingHead}`}>Book Your Car !</span>
                        <input type="text" name='username' placeholder='Full Name' required />
                        <input type="text" placeholder='Phone Number' name='phone' maxLength={10} required />
                        <select onChange={(e) => handleRent(e)} className="form-select" required>
                            <option defaultValue>
                                Select Your Car
                            </option>
                            {
                                carDetails.map(cars => {
                                    return (
                                        <option value={cars.id} key={cars.id}>{cars.name}</option>
                                    )
                                })
                            }
                        </select>
                        <input type="text" name='carname' value={carName} hidden />
                        <div className={css.formInputs}>
                            <label htmlFor="rent">Rent Per Day</label>
                            <input type="text" value={rent ? rent : ""}  placeholder='Car Rent' name='rent' readOnly/>
                        </div>
                        <div className={css.formInputs}>
                            <label htmlFor="fromDate">Rent From Date</label>
                            <input type="date" placeholder='Select Date' name='fromDate' required/>
                        </div>
                        <div className={css.formInputs}>
                            <label htmlFor="toDate">Rent To Date</label>
                            <input type="date" placeholder='Select Date' name='toDate' required/>
                        </div>
                        <button className={css.bookNowBtn}>Book Now !</button>
                    </form>
                </motion.div>
            </motion.div>

        </section>
    )
}

export default HeroSection