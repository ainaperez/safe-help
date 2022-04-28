import React from 'react'; 
import classes from './Header.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import logo from '../../../assets/images/Logo-gray.png';

const header = () => (
    <div className={classes.header}>
        <div>
            <img src={logo} className={classes.logo} alt='SafeHelp logo'></img>
            <p>Matching donations with collection points</p>
        </div>
        <NavigationItems />
    </div>
)

export default header;