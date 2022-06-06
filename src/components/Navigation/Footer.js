import React from 'react'; 
import '../../App.scss';
import logo from '../../assets/images/Logo-color.png';
import Button from '../../components/UI/Button';

const footer = () => (
    <div className='footer'>
        <img src={logo} className='footerLogo' alt='SafeHelp logo'></img>
        <div>
            <Button classes='footerButton' href='#' >About &amp; contact</Button>
            <Button classes='footerButton' href='#' >FAQs</Button>
        </div>

        <div>
            <Button classes='footerButton' href='#' >Terms &amp; Conditions</Button>
            <Button classes='footerButton' href='#' >Privacy Policy</Button>
            <Button classes='footerButton' href='https://www.ainaperez.com/' >&copy; Aina Pérez Serra</Button>
        </div>
        
     
    </div>
)

export default footer;