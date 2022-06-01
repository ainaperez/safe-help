import React, { Component } from 'react'; 
import Aux from '../../../hoc/Aux/Aux';
import '../../../App.scss';
import Button from '@mui/material/Button'; 
import axios from 'axios';
import { getAuth } from "firebase/auth";
import Input from '../../../components/UI/Input/Input';

const auth = getAuth();
const user = auth.currentUser;

class CPCreateForm extends Component {

    state = {
        user: {
            userId: user.uid,
            slug: "",
            title:"",
            availability: true, 
            addressStreet:"",
            addressNum:0,
            addressPostal:0, 
            addressCity:'', 
            addressCountry:'',
            openningTimes: {
                monday: "", 
                tuesday: "", 
                wednesday: "", 
                thursday: "",
                friday: "",
                saturday: "",
                sunday: ""
            },
            initiative: "", 
            additional: "", 
            responsible: "", 
            phonenumber: "", 
            email: "", 
            website: "",
            items: ['']
        }, 
        createForm: {
            title: {
                label: 'Title',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter title'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
             }, 
             availability: {
                label: 'Availability',
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                    placeholder: 'Is it available to collect donations?'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
             }, 
             openingTimes: {
                label: 'Opening hours',
                elementType: 'input',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Monday: 12AM to 03PM, Tuesday: CLOSED...'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
             }, 
             
             addressStreet: {
                label: 'Street',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter street'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
             }, 
             addressNum: {
                label: 'House Number',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Enter House Number'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
             }, 
             addressPostal: {
                label: 'Postal Code',
                elementType: 'input',
                elementConfig: {
                    type: 'Number',
                    placeholder: 'Enter Postal Code'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
             }, 
             addressCity: {
                label: 'City',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter City'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
             }, 
             addressCountry: {
                label: 'Country',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Country'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
             }, 
             initiative: {
                label: 'Inititative',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter initiative'
                },
                value: '',
                validation: {
                    required: false,
                },
                valid: false,
                touched: false
             }, 
             additional: {
                label: 'Additional information',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter additional information'
                },
                value: '',
                validation: {
                    required: false,
                },
                valid: false,
                touched: false
             },
             responsible: {
                label: 'Responsible person',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Responsible person'
                },
                value: '',
                validation: {
                    required: false,
                },
                valid: false,
                touched: false
             }, 
             phonenumber: {
                label: 'Phone number',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'xxx-xxx-xxx'
                },
                value: '',
                validation: {
                    required: false,
                },
                valid: false,
                touched: false
             },  
            Email: {
                label: 'Contact Email',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Contact email'
                },
                value: '',
                validation: {
                    required: false,
                    isEmail: true
                },
                valid: false,
                touched: false
             }, 
            Website: {
                label: 'Website',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Website'
                },
                value: '',
                validation: {
                    required: false,
                },
                valid: false,
                touched: false
             },  

             
        }
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
        return isValid;
    }
    CPCreateFormHandler = (e) =>{
        e.preventDefault();
        console.log(user)
        const cp =  { 
                userId: user.uid,
                slug: this.createSlug,
                title:this.state.createForm.title.value,
                availability: this.state.createForm.availability.value, 
                addressStreet: this.state.createForm.addressStreet.value,
                addressNum: this.state.createForm.addressNum.value,
                addressPostal: this.state.createForm.addressPostal.value, 
                addressCity: this.state.createForm.addressCity.value, 
                addressCountry: this.state.createForm.addressCountry.value,
                openingTimes: this.state.createForm.openningTimes,
                initiative: this.state.createForm.initiative.value, 
                additional: this.state.createForm.additional.value, 
                responsible: this.state.createForm.responsible.value, 
                phonenumber: this.state.createForm.phonenumber.value, 
                email: this.state.createForm.email, 
                website: this.state.createForm.website, 
                items: this.state.createForm.items
        };

        console.log(cp);
        axios.post('https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app/collectionPoints.json', cp)
            .then(response => console.log(response))
            .catch(err => console.log(err)); 
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.createForm
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
        this.setState({createForm: updatedForm, formIsValid: formIsValid});
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.createForm) {
            formElementsArray.push({
                id: key,
                config: this.state.createForm[key]
            });
        }

        return (
            <Aux>
                 <h1>Create a Collection Point </h1>
                 <div className='wrapper'>
                 <div className='container'>
                        <form onSubmit={this.CPCreateFormHandler}>

                            {formElementsArray.map(formElement => {
                                    return (
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
                                    )})}
                            
                        <Button type='submit' >CREATE COLLECTION POINT</Button>{' '}
                        </form>
                </div>
                </div>
            </Aux>
        );
    }
}

export default CPCreateForm;
