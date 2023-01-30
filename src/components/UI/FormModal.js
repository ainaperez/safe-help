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
          label={props.formElement.config.label}
          key={props.formElement.id}
          elementType={props.formElement.config.elementType}
          elementConfig={props.formElement.config.elementConfig}
          value={props.formElement.config.value}
          invalid={!props.formElement.config.valid}
          shouldValidate={props.formElement.config.validation}
          touched={props.formElement.config.touched}
          changed={(event) => this.inputChangedHandler(event, props.formElement.id)} 
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