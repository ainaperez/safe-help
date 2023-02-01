import React, { useState } from 'react'; 
import axios from 'axios'; 
import '../../App.scss';
import SnippetItem from '../../components/CPSnippet/SnippetItem/SnippetItem';
import Divider from '@mui/material/Divider'
 
const CPProfileIndiv = (props) => {
    const [collectionPoint, setCollectionPoint] = useState(null)
    const [item, setItem] = useState(null)
    
    const id = window.location.pathname.replace('collectionPoint', 'collectionPoints');
      
    const getCollectionPoint =() => {
        axios.get(`https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app${this.id}.json`)
        .then(response => {
            this.setState({
                 collectionPoint: response.data
            }) 
         }  
        )
        .catch(err => console.log(err))
    }

    let items = [];

    if(collectionPoint){
        items = collectionPoint.items
    }

    let details = (<p>Loading...</p>);
    
    let title = (<p>Loading...</p>)

    if(collectionPoint) {

        title= (<h1>{collectionPoint.title}</h1>)
        
        details = (
            <div className='d-flex flex-md-column align-items-md-start flex-row'>
            <div className='mr-24'>
                <div className='individualData'>
                    <div className='flex-row-left'>
                    <div className={collectionPoint.availability ? 'square low': 'square critical' }></div>
                    <p>{collectionPoint.availability ? 'Accepting donations': 'Not accepting donations'}</p>
                    </div>
                </div>
                <div className='individualData'>
                    <p>{collectionPoint.address}</p>
                    
                </div>
                <div className='individualData'>
                    <h3>Openning times</h3>
                    <p>{collectionPoint.openingTimes}</p>
                </div>
                <div className='individualData'>
                    <h3>Initiative</h3>
                    <p>{collectionPoint.initiative}</p>
                </div>
                <div className='individualData'>
                    <h3>Additional Information</h3>
                    <p>{collectionPoint.additional}</p>
                </div>
            </div>
            <div>
                <h3>Contact</h3>
                <div className='individualData'>
                    <h3>Responsible person</h3>
                    <p>{collectionPoint.responsible}</p>
                </div>
                <div className='individualData'>
                    <h3>Phone</h3>
                    <p>{collectionPoint.phone}</p>
                </div>
                <div className='individualData'>
                    <h3>Email</h3>
                    <p>{collectionPoint.email}</p>
                </div>
                <div className='individualData'>
                    <h3>Website</h3>
                    <p>{collectionPoint.website}</p>
                </div>
            </div>
            </div>
            
        ); 
            
        items = collectionPoint.items.map(item => {
        return (<div className='flex-row snippetItemContainer'>
            <SnippetItem
                title={item.title}
                urgency={item.urgency}
                key={item.key}
            />
            <p>{item.ucollected}/<strong>{item.uneeded}</strong></p>
        </div>
        )
    })  
      
    return (
        <div>
        {title}
        <div>
        
        {details}
        
        <div class='d-flex flex-row align-items-center squareContainer'>
            <div class='flex-row'>
                <div class='square critical'></div>
                <p>Critical</p>
            </div>
            <div class='flex-row'>
                <div class='square high'></div>
                <p>High</p>
            </div>
            <div class='flex-row'>
                <div class='square normal'></div>
                <p>Normal</p>
            </div>
            <div class='flex-row'>
                <div class='square low'></div>
                <p>Low</p>
            </div>
        </div>

        <Divider />

        <div className='flex-row snippetItemContainer'>
            <p>Item</p>
            <p>Units Collected / <br /><strong>Units Needed</strong></p>
        </div>

        {items}

        </div>

        </div>
    );
    }
}

export default CPProfileIndiv; 