import React, { useState } from 'react'; 
import axios from 'axios'; 
import Button from '../../../../components/UI/Button';
import Tabs from 'react-bootstrap/Tabs';
import '../../../../App.scss';
import Tab from 'react-bootstrap/Tab';  
import Details from './Details/Details';
import Items from './Items/Items';

const CPProfile = () => {

    const [collectionPoint, setCollectionPoint] = useState(null);
    const [item, setItem] = useState({title: "", urgency: "", ucollected: "", uneeded: ""}); 

    const id = window.location.pathname;

    const getCollectionPoint =() =>{
        axios.get(`https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app${this.id}.json`)
        .then(response => {
            this.setState({
                collectionPoint: response.data
            })
         }
        )
        .catch(err => console.log('getCollectionPoint'+err))
    }

    const addItemHandler = (e) => {
        
        e.preventDefault();
        const item = {
            title: item.title,
            urgency: item.urgency , 
            uneeded: item.uneeded, 
            ucollected: item.ucollected 
        }
        collectionPoint.items.push(item);
        axios.put(`https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app${this.id}.json`, collectionPoint)
        .then(response => {
            this.getCollectionPoint();
        })
        .catch(err => console.log(err)); 
    }

    const inputChangedHandler = ( event, inputIdentifier) => {
        const updatedForm = {
            ...item
        };   
        updatedForm[inputIdentifier] = event.target.value;
        this.setState({item : updatedForm});
    }

    const saveChanges = () => {
        axios.put(`https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app${this.id}.json`, collectionPoint)
        .then(response => {
            getCollectionPoint()
        }).catch(error => {
            alert(`Error: ${error.message}`);
            console.error('There was an error!', error);
        })
    }

    const editItemHandler = (event) => {
      event.preventDefault(); 
      //Todo Edit Item Form
    }

    const deleteItemHandler = () => {

    }

    const deleteCP = () => {
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

    let details, addItemForm, title = (<p>Loading...</p>);
    
    if(collectionPoint) {
        details = (
            <Details 
                details={collectionPoint} deleteCP={this.deleteCP}
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
                
                        <Button classes='basicButton' type='submit'>ADD</Button>
                </form>
                </div>
            </div>

            <hr />

            <Items 
            items={collectionPoint.items} 
            editItem={this.handleItemChange}
            deleteItem={this.deleteItemHandler} />
            </div>
        )

        title= (<h1>{collectionPoint.title}</h1>)
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

export default CPProfile; 