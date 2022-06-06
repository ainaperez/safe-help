import React, { Component } from 'react'; 
import axios from 'axios'; 
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import '../../../../App.scss';
import Tab from 'react-bootstrap/Tab'; 
import Aux from '../../../../hoc/Aux/Aux'; 
import Details from './Details/Details';
import Items from './Items/Items';

class CPProfile extends Component {
    state = {
        collectionPoint: null, 
        item: {
            title: '', 
            urgency: '', 
            ucollected: '', 
            uneeded: ''
        }
        }
    
   constructor(props){
       super(props)
       this.id = window.location.pathname;
       
        this.getCollectionPoint =this.getCollectionPoint.bind(this);
        this.addItemHandler = this.addItemHandler.bind(this);
        this.inputChangedHandler = this.inputChangedHandler.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.editItemHandler = this.editItemHandler.bind(this); 
        this.deleteItemHandler = this.deleteItemHandler.bind(this);
    };

    componentDidMount() {
        this.getCollectionPoint();  
    }

    getCollectionPoint =() =>{
        axios.get(`https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app${this.id}.json`)
        .then(response => {
            console.log(response)
            this.setState({
                collectionPoint: response.data
            })
         }
        )
        .catch(err => console.log('getCollectionPoint'+err))
    }

    addItemHandler = (e) => {
        
        e.preventDefault();
        const item = {
            title: this.state.item.title,
            urgency: this.state.item.urgency , 
            uneeded: this.state.item.uneeded, 
            ucollected: this.state.item.ucollected 
        }
        this.state.collectionPoint.items.push(item)
        console.log( this.state.collectionPoint.items)
        axios.put(`https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app${this.id}.json`, this.state.collectionPoint)
        .then(response => {
            this.getCollectionPoint();
            console.log(response)}
            )
        .catch(err => console.log(err)); 

    }

    inputChangedHandler = ( event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.item
        };
        const updatedFormElement = { 
            ...updatedForm[inputIdentifier]
        }   
        updatedForm[inputIdentifier] = event.target.value ;
        
        this.setState({item : updatedForm});
    }

    saveChanges = () => {
       
       console.log(this.state.collectionPoint)
        axios.put(`https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app${this.id}.json`, this.state.collectionPoint)
        .then(response => {
            console.log('change saved')
            console.log(response)
            this.getCollectionPoint()
        }).catch(error => {
            alert(`Error: ${error.message}`);
            console.error('There was an error!', error);
        })
    }

    editItemHandler = (event) => {
      event.preventDefault(); 

      console.log(event)  
    }

    deleteItemHandler = () => {


    }

    deleteCP = () => {
        axios.delete(`https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app${this.id}.json`)
        .then(response =>  {
            alert('Delete successful')
            window.location = '/dashboard';
        }
        )
        .catch(error => {
            alert(`Error: ${error.message}`);
            console.error('There was an error!', error);
        });
    }

    render() {

       

        let details = (<p>Loading...</p>);
        let addItemForm = (<p>Loading...</p>)
        let title = (<p>Loading...</p>)

        if(this.state.collectionPoint) {
            details = (
                <Details 
                    details={this.state.collectionPoint} deleteCP={this.deleteCP}
                    editItem={this.inputChangedHandler}
                    saveEdit={this.saveChanges}
                />
            );  

            addItemForm = (
                <div className='smallWrapper'>
                <div className='formContainer'>
                    <div className='inputContainer'>
                        <form onSubmit={this.addItemHandler} >
                            <label className='Label' htmlFor='cpItem'>Item</label>
                            <input className='InputElement' type='text' name='cpItem' placeholder='enter item title' onChange={(e)=>this.inputChangedHandler(e, 'title')} />
                            <label className='Label' htmlFor='searchItem'>Urgency</label>
                            <select className='InputElement' name='urgency' placeholder='search item' onChange={(e)=>this.inputChangedHandler(e, 'urgency')}>
                                <option value='low'>Low</option>
                                <option value='normal'>Normal</option>
                                <option value='high'>High</option>
                                <option value='critical'>Critical</option>
                            </select>
                            <label className='Label' htmlFor='uneeded'>Units needed</label>
                            <input className='InputElement' type='number' name='uneeded' placeholder='xxxx' onChange={(e)=>this.inputChangedHandler(e, 'uneeded')}/>
                            <label className='Label' htmlFor='ucollected'>Units collected</label>
                            <input className='InputElement' type='number' name='ucollected' placeholder='xxxx' onChange={(e)=>this.inputChangedHandler(e, 'ucollected')} />
                  
                            <Button type='submit'>ADD</Button>
                    </form>
                    </div>
                </div>
    
                <hr />
    
                <Items items={this.state.collectionPoint.items} editItem={this.handleItemChange} />
                </div>
            )

            title= (<h1>{this.state.collectionPoint.title}</h1>)
        }


        

        
        
      
        return (
            <div className='cpProfile'>
                 {title}
                 <Tabs defaultActiveKey="details" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="details" title="Details">
                        {details}
                    </Tab>
                    <Tab eventKey="items" title="items">
                        {addItemForm}
                    </Tab>
                </Tabs>

                 
            </div>
        );
    }
}

export default CPProfile; 