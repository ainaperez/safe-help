import React from 'react'; 
import Aux from '../../hoc/Aux';
import Header from '../Navigation/Header/Header';

const layout = (props) => (
    <Aux>
    <Header />
    <main>
        {props.children}
    </main>
    </Aux>
); 

export default layout;