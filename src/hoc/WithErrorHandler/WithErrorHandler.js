import React from 'react';
import Modal from '../../components/UI/Modal';
import Aux from '../Aux/Aux'; 

const withErrorHandler = (WrappedComponent) => {
    return(props) => {
        return (
            <Aux>
                <Modal heading='' body=''/>
                <WrappedComponent {...props} />
            </Aux>
        )
    }
}

export default withErrorHandler;