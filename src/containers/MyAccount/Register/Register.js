import React, { useState } from 'react'; 
import '../../../App.scss';
import Button from 'react-bootstrap/Button'; 
import Input from '../../../components/UI/Input/Input'; 
import {
    registerWithEmailAndPassword,
    signInWithGoogle,
  } from "../../../firebase";

const Register = () =>{
    const [registerForm, setRegisterForm] = useState({
        name: {
            label: 'Legal Name',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Legal Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
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
        } 
       
    }); 
    const [formIsValid, setFormIsValid] = useState(false); 
    const [loading, setLoading] = useState(false);

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedRegisterForm = {
            ...registerForm
        };
     
        const updatedFormElement = { 
            ...updatedRegisterForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
       
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedRegisterForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedRegisterForm) {
            formIsValid = updatedRegisterForm[inputIdentifier].valid && formIsValid;
        }
        setRegisterForm({registerForm: updatedRegisterForm });
        setFormIsValid({formIsValid: formIsValid});
    }

    const checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isPassword) {
            const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; 
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    const formElementsArray = [];
    for (let key in registerForm) {
        formElementsArray.push({
            id: key,
            config: registerForm[key]
        });
    }
    let form = (
        <form>
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
            <Button onClick={() => registerWithEmailAndPassword(registerForm.name.value, registerForm.email.value, registerForm.password.value)} disabled={!formIsValid}>REGISTER</Button>
            <Button
        className=""
        onClick={signInWithGoogle}>Register with Google</Button>
        </form>
    )
    return (
        <div className='smallWrapper'>
                <h1>Register for organizers</h1>
                <div className='formContainer'>
                    <div className='container'>
                    {form}
                    </div>
                </div>

            <p className='acc'>You already have an account? <a href='/login'><strong>login</strong></a></p>
        </div>
    );
} ;

export default Register
; 