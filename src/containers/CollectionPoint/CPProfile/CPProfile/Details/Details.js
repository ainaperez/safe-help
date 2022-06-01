import React, { Component } from 'react'; 
import PresentFormItem from '../../../../../components/Forms/PresentFormItem/PresentFormItem';
import Button from '@mui/material/Button'; 
import '../../../../../App.scss';
import AlertDialog from '../../../../../components/UI/AlertDialog/AlertDialog';
const Details = (props) => {
    
return (

        <div className='wrapper'>
        <div className='container'>
            <PresentFormItem 
            title='title' 
            value={props.details.title} 
            />

            <PresentFormItem 
            title='Availability' 
            value={props.details.availability ? 'Available to collect donations' : 'Not available to collect donations'}
             />

            <PresentFormItem 
            title='Address' 
            value={`${props.details.addressStreet} ${props.details.addressNum}, ${props.details.addressPostal}, ${props.details.addressCity}, ${props.details.addressCountry} `}
             />
            
            <PresentFormItem 
            title='OpeningTimes' 
            value={props.details.openingTimes} 
            /> 
            
            <PresentFormItem 
            title='Initiative' 
            value={props.details.initiative} 
             /> 

            <PresentFormItem 
            title='Additional' 
            value={props.details.additional} 
             /> 

            <PresentFormItem 
            title='Responsible person' 
            value={props.details.responsible} 
            />

            <PresentFormItem 
            title='Email' 
            value={props.details.email} 
            />

            <PresentFormItem 
            title='Website' 
            value={props.details.website} 
             />  

        <AlertDialog 
            title='DELETE COLLECTION POINT'
            desc='If you click confirm, the collection point will be eliminated from the database. This action is NOT reversible!'
            cancel='CANCEL'
            confirm='CONFIRM'
            action={props.deleteCP}/>
        </div> 
</div>
)
}

export default Details;