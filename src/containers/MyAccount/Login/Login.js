import React, { Component} from 'react';

import '../../../App.scss';
import Button from 'react-bootstrap/Button'; 
import Input from '../../../components/UI/Input/Input'; 
import {logInWithEmailAndPassword, signInWithGoogle, sendPasswordReset } from '../../../firebase';


class Login extends Component {

    constructor(){
        super();
        this.state = {
            loginForm: {
                email: {
                    label: 'Email',
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your E-Mail'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false
                },
                password:{
                    label: 'Password',
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Enter a password'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isPassword: true
                    },
                    valid: false,
                    touched: false
                },
            }
        }
    }

    
    loginHandler = (e) =>{
        e.preventDefault();
       logInWithEmailAndPassword(this.state.loginForm.email.value, this.state.loginForm.password.value); 
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.loginForm
        };
       
        const updatedFormElement = { 
            ...updatedForm[inputIdentifier]
        };
        
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({loginForm: updatedForm, formIsValid: formIsValid});
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isPassword) {
            const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; 
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        let form = (
            <form onSubmit={this.loginHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        label={formElement.config.label}
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button 
                    type='submit' 
                    disabled={!this.state.formIsValid}>LOGIN</Button>
                <Button 
                    className="" 
                    onClick={signInWithGoogle}>Login with Google</Button>
            </form>
        )

        return (
            <div className='smWrapper'>
                <h1>Login for organizers</h1>
                    
                <div className='formContainer'>
                        <div className='inputContainer'>
                        {form}
                        </div>
                    </div>

                <div className='acc'>  
                <Button onClick={sendPasswordReset}>Forgot Password</Button>
                <p>You don't have an account? <a href='/register'><strong>register</strong></a></p>
                </div> 
            </div>
        );
    }
}; 


export default Login; 