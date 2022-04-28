import React, { Component } from 'react'; 
import Aux from '../../../hoc/Aux';
import classes from '../Register/Register.module.scss';
import Button from 'react-bootstrap/Button'; 

class Login extends Component {
    render() {
        return (
            <Aux>
                <h1>Login for organizers</h1>

                <form className={classes.registerForm}>
                <a href='/register'>I don't have an account</a>
                    <div className={classes.formContainer}>
                        <div className={classes.container}>
                            <label htmlFor="uname"><strong>Username</strong></label>
                            <input type="text" placeholder="Enter Username" name="uname" required />
                            <label htmlFor="psw"><strong>Password</strong></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />
                        </div>
                        <Button type='submit' variant="primary" className={classes.btnForm}>Login</Button>{' '}
                        <span className="psw"><a href="#">Forgot password?</a></span>   
                    </div>
                </form>
            </Aux>
        );
    }
}

export default Login; 