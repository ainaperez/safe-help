import React from 'react'; 
import classes from './Footer.module.scss';

import logo from '../../../assets/images/Logo-gray.png';

const footer = () => (
    <div className={classes.footer}>
        <img src={logo} className={classes.logo} alt='SafeHelp logo'></img>
        <div>
            <a href='#' target='_blank'>About &amp; contact</a>
            <a href='#' target='_blank'>FAQs</a>
        </div>

        <div>
            <a href='#' target='_blank'>Terms &amp; Conditions</a>
            <a href='#' target='_blank'>Privacy Policy</a>
            <a href='#' target='_blank'>&copy; Aina Pérez Serra</a>
        </div>
        
     
    </div>
)

export default footer;