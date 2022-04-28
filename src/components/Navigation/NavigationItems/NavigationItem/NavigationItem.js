import React from 'react';
import classes from './NavigationItem.module.scss' 
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    
        <NavLink
            to={props.link}
            exact
            
            >{props.children}
        </NavLink>
    
)

export default navigationItem;