import React from 'react'
import css from './MapLocation.module.scss';

const MapLocation = () => {
    return (
        <div className={`${css.wrapper}`}>
            <a className="anchor" id="location"></a>
            <div className={css.container}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501972.42372040194!2d75.88314119521043!3d10.60576785535446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0806416ffffff5%3A0x8681c4853886491f!2snova%20self%20drive%20cars!5e0!3m2!1sen!2sin!4v1682317033562!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default MapLocation