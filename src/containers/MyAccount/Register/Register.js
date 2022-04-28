import React, { Component } from 'react'; 
import Aux from '../../../hoc/Aux';
import classes from './Register.module.scss';
import Button from 'react-bootstrap/Button'; 


class Register
 extends Component {
    render() {
        return (
            <Aux>
                 <h1>Register for organizers</h1>

                <form action="#" className={classes.registerForm} >
                    <div className={classes.formContainer}>
                        <div className={classes.container}>
                            <label htmlFor="uname"><strong>Legal Name</strong></label>
                            <input type="text" placeholder="Enter Username" name="uname" required />
                            <label htmlFor="gender"><strong>Gender</strong></label>
                            <select name='gender'>
                                <option value='no-answer'>Prefer not to say</option>
                                <option value='woman'>Woman</option>
                                <option value='man'>Man</option>
                                <option value='non-binary'>Non-binary/non-conforming</option>
                                <option value='transgender'>Transgender</option>
                                <option value='non-listed'>Gender not listed above</option>    
                            </select>

                            <label htmlFor="birth"><strong>Date of Birth</strong></label>
                            <input type="text" placeholder="yyyy-mm-dd" name="birth" required />

                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" placeholder="Enter Email" name="email" required />

                            <label htmlFor="phone"><strong>Phone number</strong></label>
                            <input type="number" placeholder="xxxxxxxxx" name="phone" required />

                            <label htmlFor="psw"><strong>Password</strong></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <label htmlFor="psw2"><strong>Confirm Password</strong></label>
                            <input type="password" placeholder="Repeat the password" name="psw2" required />


                        </div>
                        <Button type='submit' variant="primary" className={classes.btnForm}>Register</Button>{' '}
                    </div>
                </form>
                <p className={classes.acc}>You already have an account? <a href='/login'>login</a></p>
            </Aux>
        );
    }
}

export default Register
; 