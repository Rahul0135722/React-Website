import React, { useRef, useState } from 'react';
import css from './Header.module.scss';
import { motion } from 'framer-motion';
import { headerVariants, getMenuStyles } from '../../Utility/motion';
import { BiMenuAltRight } from 'react-icons/bi'
import useOutsideAlerter from '../../Hooks/useOutsideAlerter';
import Logo from '../../assets/Images/selfdrivelogo.png';

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const menuRef = useRef()

    useOutsideAlerter(
        {
            menuRef,
            setMenuOpened
        }
    )

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={headerVariants}
            viewport={{ once: false, amount: 0.15 }}
            className={`bg-primary paddings ${css.wrapper}`}>
            <div className={`flexCenter innerWidth ${css.container}`}>

                <div className={css.name}>
                    <img src={Logo} alt="" />
                </div>

                <ul ref={menuRef}
                    style={getMenuStyles(menuOpened)}
                    className={`flexCenter ${css.menu}`}>
                    <li><a href="#aboutus">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#terms&conditions">Terms & Conditions</a></li>
                    <li><a href="#tariffs">Tariffs</a></li>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#contactus">Contact Us</a></li>
                </ul>
                {/* Only for medium and small screen size devices */}
                <div className={css.menuIcon}
                    onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </motion.div>
    )
}

export default Header