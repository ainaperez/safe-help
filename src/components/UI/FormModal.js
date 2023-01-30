import React from 'react';
import Button from './Button';
import Modal from 'react-bootstrap/Modal'; 
import Input from './Input/Input.js'; 
const FormModal = (props) => (


    <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Input 
      label={formElement.config.label}
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => this.inputChangedHandler(event, formElement.id)} 
      type='textArea' onChange={props.editItem}></Input>
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