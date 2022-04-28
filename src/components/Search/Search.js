import React from 'react'; 
import classes from './Search.module.scss';
import Button from 'react-bootstrap/Button'; 

const search = () => (
    <div className={classes.formDiv}>
        <form>
            <div className={classes.formElement}>
                <label htmlFor=''>Where do you want to donate?</label>
                <input type='text' placeholder='City, street, postal code'></input>
            </div>
            <div className={classes.formElement}>
                <label htmlFor=''>What do you want to donate?</label>
                <input type='text' placeholder='--any--'></input>
            </div>
            <Button type='submit' variant="primary" className={classes.searchBtn}>Search</Button>{' '}
        </form>
    </div>
); 

export default search; 