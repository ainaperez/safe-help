import React, { Component } from 'react'; 
import axios from 'axios'; 
import '../../App.scss';
import SnippetItem from '../../components/CPSnippet/SnippetItem/SnippetItem';
import Divider from '@mui/material/Divider'
 
class CPProfileIndiv extends Component {
    state = {
        collectionPoint: null, 
        item: null
    };
    
    constructor(props){
        super(props); 
        this.id = window.location.pathname.replace('collectionPoint', 'collectionPoints');
        this.getCollectionPoint = this.getCollectionPoint.bind(this);    
    }; 

    componentDidMount() {
        this.getCollectionPoint();  
    }

    getCollectionPoint =() => {
        axios.get(`https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app${this.id}.json`)
        .then(response => {
            this.setState({
                collectionPoint: response.data
            }) 
         }  
        )
        .catch(err => console.log(err))
    }

    render() {

        let items = [];

        if(this.state.collectionPoint){
            items = this.state.collectionPoint.items
        }

        let details = (<p>Loading...</p>);
        
        let title = (<p>Loading...</p>)

        if(this.state.collectionPoint) {

            title= (<h1>{this.state.collectionPoint.title}</h1>)
            
            details = (
                <div className='d-flex flex-md-column align-items-md-start flex-row'>
                <div className='mr-24'>
                    <div className='individualData'>
                        <div className='flex-row-left'>
                        <div className={this.state.collectionPoint.availability ? 'square low': 'square critical' }></div>
                        <p>{this.state.collectionPoint.availability ? 'Accepting donations': 'Not accepting donations'}</p>
                        </div>
                    </div>
                    <div className='individualData'>
                        <p>{this.state.collectionPoint.address}</p>
                        
                    </div>
                    <div className='individualData'>
                        <h3>Openning times</h3>
                        <p>{this.state.collectionPoint.openingTimes}</p>
                    </div>
                    <div className='individualData'>
                        <h3>Initiative</h3>
                        <p>{this.state.collectionPoint.initiative}</p>
                    </div>
                    <div className='individualData'>
                        <h3>Additional Information</h3>
                        <p>{this.state.collectionPoint.additional}</p>
                    </div>
                </div>
                <div>
                    <h3>Contact</h3>
                    <div className='individualData'>
                        <h3>Responsible person</h3>
                        <p>{this.state.collectionPoint.responsible}</p>
                    </div>
                    <div className='individualData'>
                        <h3>Phone</h3>
                        <p>{this.state.collectionPoint.phone}</p>
                    </div>
                    <div className='individualData'>
                        <h3>Email</h3>
                        <p>{this.state.collectionPoint.email}</p>
                    </div>
                    <div className='individualData'>
                        <h3>Website</h3>
                        <p>{this.state.collectionPoint.website}</p>
                    </div>
                </div>
                </div>
                
            ); 
            
           items = this.state.collectionPoint.items.map(item => {
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

            
        }
        
      
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