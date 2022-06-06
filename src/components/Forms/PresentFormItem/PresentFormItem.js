import * as React from 'react'; 
import '../../../App.scss';
import Button from '../../UI/Button';
import FormModal from '../../UI/FormModal';


const PresentFormItem = (props) => {
    
    const [show, setShow] = React.useState(false);
     const handleOpen = () => setShow(true);
     const handleClose = () => setShow(false);

     return(
        <div className='presentFormItem'>
        <div>
        <p className='title'>{props.title}</p>
        <p>{props.value}</p>
        </div>
       <Button classes='editButton' click={handleOpen}>Edit</Button>
        <FormModal
            show={show}
            onHide={handleClose}
            title={props.title}
            editItem={props.editItem}
            saveEdit={props.saveEdit}
        />
       
    </div>
)
    
}

export default PresentFormItem;