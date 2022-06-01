import React from 'react'; 
import Aux from '../Aux/Aux';
import Header from '../../components/Navigation/Header/Header';
import classes from './Layout.module.scss';
import Footer from '../../components/Navigation/Footer/Footer'; 

const layout = (props) => (
    <Aux>
    <Header />
    <main className={classes.layout}>
        {props.children}
    </main>
    <Footer />
    </Aux>
); 

export default layout;