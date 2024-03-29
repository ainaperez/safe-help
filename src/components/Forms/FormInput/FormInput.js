import React, { Fragment } from 'react';
import classes from './PresentFormItem.module.scss' 
import Aux from '../../../hoc/Aux/Aux';


const FormInput = (props) => (
    <Fragment>
        <label htmlFor={props.htmlFor}><strong>{props.name}</strong></label>
        <input type={props.type} placeholder={props.placeholder} name={props.name} required />
    </Fragment>
    
)

export default FormInput;