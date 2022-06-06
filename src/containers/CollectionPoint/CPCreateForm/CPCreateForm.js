import React, { useState, useEffect  } from 'react'; 
import Aux from '../../../hoc/Aux/Aux';
import '../../../App.scss';
import Button from 'react-bootstrap/Button'; 
import axios from 'axios';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Input from '../../../components/UI/Input/Input';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import { useContext } from "react";
import AuthContext from '../../../AuthContext';

  const CPCreateForm = () => {
    const [address, setAddress] = useState(''); 
    const { user } = useContext(AuthContext);
    const [cp, setCp] = useState({
        userId: "",
        slug: "",
        title:"",
        availability: true, 
        address:"",
        selectedCoordinates: null, 
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
    }); 
    let [createForm, setCreateForm] = useState({
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
         address: {
            label: 'Address',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ''
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
        email: {
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
        website: {
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
    }); 

    useEffect(()=>{
       console.log(user)
       //console.log(cp.userId)
    }, [user])

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...createForm
        };
        const updatedFormElement = { 
            ...updatedForm[inputIdentifier]
        }   
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        setCreateForm(createForm = updatedForm);
        formIsValid = formIsValid;
    }

    const handleChange = address => {
        console.log(address)
        setAddress(address = address);
    };
      
    const handleSelect = address => {
        setAddress(address = address );
        geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
            cp.selectedCoordinates = [latLng.lat, latLng.lng];
            address = address;
            console.log('Success', address, latLng)}
        ) 
        .catch(error => console.error('Error', error));
    };

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
        return isValid;
    }

    const CPCreateFormHandler = (e) =>{
        e.preventDefault();
        console.log(user)
        const NewCp =  { 
                userId: user.uid,
                title:createForm.title.value,
                availability: createForm.availability.value, 
                address: address,
                selectedCoordinates: cp.selectedCoordinates,
                openingTimes: createForm.openingTimes,
                initiative: createForm.initiative.value, 
                additional: createForm.additional.value, 
                responsible: createForm.responsible.value, 
                phonenumber: createForm.phonenumber.value, 
                email: createForm.email.value, 
                website: createForm.website.value, 
                items: [''] 
        };
        console.log(NewCp);
        axios.post('https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app/collectionPoints.json', NewCp)
            .then(response => {
               console.log(response); 
               window.location = `${response.data.name}/createsuccess`;
            }
            )
            .catch(err => console.log(err)); 
    } 

    const formElementsArray = [];

    for (let key in createForm) {
        formElementsArray.push({
            id: key,
            config: createForm[key]
        });
    }

    return(
        <div className='smallWrapper'>
             <h1>Create a Collection Point </h1>
             <div className='formContainer'>
             <div className='inputContainer'>
                    <form onSubmit={CPCreateFormHandler}>
                        {formElementsArray.map(formElement => {
                            console.log(formElement)
                            if(formElement.id == 'address'){
                                return ( 
                                    <div className='input'>
                                    <label className='label'>{formElement.config.label}</label>
                                    <PlacesAutocomplete
                                        className='inputElement'
                                        value={address}
                                        onChange={handleChange}
                                        onSelect={handleSelect}
                                        required
                                        >
                                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                        <div>
                                            <input
                                            {...getInputProps({
                                                placeholder: 'Search Places ...',
                                                className: 'location-search-input',
                                            })}
                                            />
                                            <div className="autocomplete-dropdown-container">
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                                // inline style for demonstration purpose
                                                const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    style,
                                                    })}
                                                >
                                                    <span>{suggestion.description}</span>
                                                </div>
                                                );
                                            })}
                                            </div>
                                        </div>
                                        )}
                                    </PlacesAutocomplete>
                                    </div>
                                )
                            }else{
                                console.log(formElement.config.elementConfig)
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
                                    changed={(event) => inputChangedHandler(event, formElement.id)} />
                            )}
                                })}
                        
                    <Button type='submit' >CREATE COLLECTION POINT</Button>{' '}
                    </form>
            </div> 
            </div>
        </div>
    )


  }

  export default CPCreateForm; 