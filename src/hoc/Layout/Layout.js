import React from 'react'; 
import Aux from '../Aux/Aux';
import Header from '../../components/Navigation/Header';
import '../../App.scss'
import Footer from '../../components/Navigation/Footer'; 

const layout = (props) => (
    <Aux>
    <Header />
    <main className='layout'>
        {props.children}
    </main>
    <Footer />
    </Aux>
); 

export default layout;