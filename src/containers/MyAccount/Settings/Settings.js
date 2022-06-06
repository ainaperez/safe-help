import React from 'react'; 
import Aux from '../../../hoc/Aux/Aux';
import '../../../App.scss'; 
import PresentFormItem from '../../../components/Forms/PresentFormItem/PresentFormItem';
import { useContext } from "react";
import AlertDialog from '../../../components/UI/AlertDialog';
import AuthContext from '../../../AuthContext';

const Settings = (props) => {
    const { user } = useContext(AuthContext);

    let form = (<p>...loading</p>)
    if(user){
        form = ( 
            <Aux>
                 <PresentFormItem 
                 title='Name' 
                 value={user.displayName} 
                 link='/register' />

                 <PresentFormItem 
                 title='Email' 
                 value={user.email}
                 link='/register' />

                 <PresentFormItem 
                 title='Password' 
                 value={'xxxxxxxxxx'} 
                 link='/register' /> 
                     
                <AlertDialog 
                title='DELETE ACCOUNT'
                desc='If you click confirm, your account will be eliminated from the database. This action is NOT reversible!'
                cancel='CANCEL'
                confirm='CONFIRM'
                action={props.deleteCP}/>
             </Aux>
        )
     }    

        return (
            <section>
                 <h2>Settings</h2>

                 <div className='formContainer'>
                     <div className='container'>
                     {form}
                    </div> 
                </div>
            </section>
        );
    }


export default  Settings; 