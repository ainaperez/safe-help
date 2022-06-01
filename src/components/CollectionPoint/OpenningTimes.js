import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './OpenningTimes.module.scss';


const OpenningTimes = (props) => (
    
<div className={classes.container}>

<label>{props.day}</label>
        <select name="fromH"  id="fromH" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
        <select name="fromM"  id="fromM">
            <option value=":00">:00</option>
            <option value=":15">:15</option>
            <option value=":30">:30</option>
            <option value=":45">:45</option>
        </select>
        <select name="fromAP"  id="fromAP">
            <option value=" AM">AM</option>
            <option value=" PM">PM</option>
        </select>
        
<label>to</label>

    <select name="toH"  id="toH">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    <select name="toM"  id="toM">
        <option value=":00" >:00</option>
        <option value=":15">:15</option>
        <option value=":30">:30</option>
        <option value=":45">:45</option>
    </select>
    <select name="toAP"  id="toAP">
        <option value=" AM">AM</option>
        <option value=" PM" >PM</option>
    </select>

    <input type="checkbox" name="closed" value="closed"></input>
    <span>Closed</span>
</div>
   
)

export default OpenningTimes;