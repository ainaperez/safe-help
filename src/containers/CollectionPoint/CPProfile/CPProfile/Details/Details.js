import React, { Component } from 'react'; 
import PresentFormItem from '../../../../../components/Forms/PresentFormItem/PresentFormItem';
import Button from 'react-bootstrap/Button'; 
import '../../../../../App.scss';
import AlertDialog from '../../../../../components/UI/AlertDialog';
const Details = (props) => {
    
return (

        <div className='smallWrapper'>
        <div className='d-flex flex-column justify-content-center'>
            <PresentFormItem 
            title='Title' 
            value={props.details.title} 
            editItem={(e)=>props.editItem(e, 'title', 'collectionPoint')}
            saveEdit={props.saveEdit}
            />

            <PresentFormItem 
            title='Availability' 
            value={props.details.availability ? 'Available to collect donations' : 'Not available to collect donations'}
            editItem={(e)=>props.editItem(e, 'availability', 'collectionPoint')}
            saveEdit={props.saveEdit}
            />

            <PresentFormItem 
            title='Address' 
            value={props.details.address}
            editItem={(e)=>props.editItem(e, 'address', 'collectionPoint')}
            saveEdit={props.saveEdit}
            />
            
            <PresentFormItem 
            title='OpeningTimes' 
            value={props.details.openingTimes} 
            editItem={(e)=>props.editItem(e, 'openningTimes', 'collectionPoint')}
            saveEdit={props.saveEdit}
            /> 
            
            <PresentFormItem 
            title='Initiative' 
            value={props.details.initiative} 
            editItem={(e)=>props.editItem(e, 'initiative', 'collectionPoint')}
            saveEdit={props.saveEdit}
            /> 

            <PresentFormItem 
            title='Additional' 
            value={props.details.additional} 
            editItem={(e)=>props.editItem(e, 'additional', 'collectionPoint')}
            saveEdit={props.saveEdit}
            /> 

            <PresentFormItem 
            title='Responsible person' 
            value={props.details.responsible} 
            editItem={(e)=>props.editItem(e, 'responsible', 'collectionPoint')}
            saveEdit={props.saveEdit}
            />

            <PresentFormItem 
            title='Phone Number' 
            value={props.details.phonenumber} 
            editItem={(e)=>props.editItem(e, 'phone', 'collectionPoint')}
            saveEdit={props.saveEdit}
            />

            <PresentFormItem 
            title='Email' 
            value={props.details.email} 
            editItem={(e)=>props.editItem(e, 'email', 'collectionPoint')}
            saveEdit={props.saveEdit}
            />

            <PresentFormItem 
            title='Website' 
            value={props.details.website} 
            editItem={(e)=>props.editItem(e, 'website', 'collectionPoint')}
            saveEdit={props.saveEdit}
             />  

        <AlertDialog 
            title='DELETE COLLECTION POINT'
            desc='If you click confirm, the collection point will be eliminated from the database. This action is NOT reversible!'
            cancel='CANCEL'
            confirm='CONFIRM'
            btnClasses='dangerButton m-auto d-block'
            action={props.deleteCP}/>
        </div> 
</div>
)
}

export default Details;