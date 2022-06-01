import React from 'react';
import Button from '@mui/material';

const CPCreateSuccess = (props) => (
    <div>
       <h1>Success!</h1>
       <p>{props.title}</p> 
       <p>has been created</p>  
       
       <Button></Button>
       </div>
)

export default CPCreateSuccess;