import React from 'react';
import Button from './Button';
import Modal from 'react-bootstrap/Modal'; 
const FormModal = (props) => (


    <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <input type='textArea' onChange={props.editItem}></input>
    </Modal.Body>
    <Modal.Footer>
      <Button classes='dangerButton' variant="secondary" click={props.onHide}>
        CANCEL
      </Button>
      <Button classes='basicButton' variant="primary" click={props.saveEdit}>
        SAVE CHANGES
      </Button>
    </Modal.Footer>
  </Modal>
    
)

export default FormModal;