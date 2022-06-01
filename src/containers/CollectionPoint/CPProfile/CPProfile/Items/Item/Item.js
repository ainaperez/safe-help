import * as React from 'react'; 
import '../../../../../../App.scss'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import SnippetItem from '../../../../../../components/CPSnippet/SnippetItem/SnippetItem';

const Item = (props) => {

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
         
       <div className='flex-row snippetItemContainer'>
           <SnippetItem
                    title={props.title}
                    urgency={props.urgency}
                    key={props.key}
                />
            <p>{props.ucollected}/<strong>{props.uneeded}</strong></p>
            
            <Button onClick={handleOpen}>Edit</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Button onClick={handleClose}>X</Button>  
                    <form onSubmit={props.editItem}>
                        <p>{props.title}</p>
                        <div className='formContainer'>
                        <div>
                        <label htmlFor='uneeded'>Units needed</label>
                        <input 
                            type='number' 
                            name='uneeded' 
                            placeholder={props.uneeded} 
                            onChange={props.onChange} />
                        </div>
                        <div>
                        <label htmlFor='ucollected'>Units collected</label>
                        <input 
                            type='number' 
                            name='ucollected' 
                            placeholder={props.ucollected} 
                            onChange={props.onChange}  />
                        </div>
                        </div>
                        <div className='flex-row'>
                            <Button onClick={handleClose}>DELETE</Button>
                            <Button type='submit'>SAVE</Button>
                        </div>
                    </form>
                    </Box>
                </Modal>
                
        </div>
     )
    
};


export default Item; 

