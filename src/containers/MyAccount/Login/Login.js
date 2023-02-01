import React, { useState } from 'react';

import '../../../App.scss';
import Button from '../../../components/UI/Button'; 
import Input from '../../../components/UI/Input/Input'; 
import {logInWithEmailAndPassword, signInWithGoogle, sendPasswordReset } from '../../../firebase';

const Login  = () => {

    const [loginForm, setLoginForm] = useState({
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
    }); 

    const [formIsValid, setFormIsValid] = useState(false)
    
    const loginHandler = (e) =>{
        e.preventDefault();
       logInWithEmailAndPassword(loginForm.email.value, loginForm.password.value); 
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...loginForm
        };
       
        const updatedFormElement = { 
            ...updatedForm[inputIdentifier]
        };
        
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({loginForm: updatedForm, formIsValid: formIsValid});
    }
    const checkValidity = (value, rules) => {
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

    const formElementsArray = [];
    for (let key in loginForm) {
        formElementsArray.push({
            id: key,
            config: loginForm[key]
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
                        changed={(event) => inputChangedHandler(event, formElement.id)} />
                ))}
                <Button 
                    classes='basicButton'
                    type='submit' 
                    disabled={!formIsValid}>LOGIN</Button>
                <Button 
                    classes='basicButton' 
                    click={signInWithGoogle}>Login with Google</Button>
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
                <Button classes='footerButton' click={sendPasswordReset}>Forgot Password</Button>
                <p>You don't have an account? <a href='/register'><strong>register</strong></a></p>
                </div> 
            </div>
        );
    };


export default Login; 