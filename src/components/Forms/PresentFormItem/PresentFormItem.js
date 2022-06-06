import * as React from 'react'; 
import classes from './PresentFormItem.module.scss' 
import Button from '../../UI/Button';
import FormModal from '../../UI/FormModal';
import Box from '@mui/material/Box';
import Input from '../../UI/Input/Input';

const PresentFormItem = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    const [show, setShow] = React.useState(false);
     const handleOpen = () => setShow(true);
     const handleClose = () => setShow(false);

     return(
        <div className={classes.PresentFormItem}>
        <div>
        <p className={classes.title}>{props.title}</p>
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