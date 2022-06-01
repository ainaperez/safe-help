import * as React from 'react'; 
import classes from './PresentFormItem.module.scss' 
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
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
    
    const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     return(
        <div className={classes.PresentFormItem}>
        <div>
        <p className={classes.title}>{props.title}</p>
        <p>{props.value}</p>
        </div>
       <Button onClick={handleOpen}>Edit</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
                    <Box sx={style}>
                    <Button onClick={handleClose}>X</Button>  
                    <Input 
                        label={props.label}
                        key={props.key}
                        elementType={props.elementType}
                        elementConfig={props.elementConfig}
                        value={props.value}
                        invalid={props.valid}
                        shouldValidate={props.validation}
                        touched={props.touched}
                        changed={props.changed} />
                    </Box>
                </Modal>
    </div>
)
    
}

export default PresentFormItem;