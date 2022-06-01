import React, { Component } from 'react'; 
import Aux from '../../hoc/Aux/Aux';
import Button from '@mui/material/Button'; 
import '../../App.scss'
import axios from 'axios'; 
import Results from '../Results/Results'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state= {
            selectedCity: 'Berlin', 
            selectedItem: '',
            collectionPoints: null, 
        }

        this.getCollectionPoints = this.getCollectionPoints.bind(this);
    }

    componentDidMount() {
        this.getCollectionPoints();
        
    }

    getCollectionPoints =() =>{
        axios.get('https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app/collectionPoints.json')
        .then(response => {
            const cpFilteredList = []
            for(let key in response.data){
                console.log(response.data[key].addressCity)
                cpFilteredList.push({
                    cpKey: key,
                    details: response.data[key]
                })
            }
            this.setState({
                collectionPoints: cpFilteredList
                
            }) 
            console.log(this.state.collectionPoints)
        })
        .catch(err => console.log(err))
        
    }


    
    render() {

        const searchFilter = (
            
            <form className='flex-row'>
            <div className='formElement'>
                
                <label htmlFor=''>Where do you want to donate?</label>
                <select id='selectedCity' type='text' placeholder='--any--'>
                    <option value='Berlin'>Berlin</option>
                    <option value='Hamburg'>Hamburg</option>
                    <option value='Leipzig'>Leipzig</option>
                    <option value='Cologne'>Cologne</option>
                </select>

            </div>
            <div className='formElement'>
                <label htmlFor=''>What do you want to donate?</label>
                <input type='text' placeholder='--any--'></input>
            </div>
            <Button type='submit' variant="primary">Search</Button>
        </form>
        )

        return (
            <Aux>
                <h1>Search a donation Collection point</h1>
                {searchFilter}
                <Results 
                    selectedCity={this.state.selectedCity} 
                    selectedItem={this.state.selectedItem} 
                    collectionPoints={this.state.collectionPoints} />
                
            </Aux>
        );
    }
}

export default Home; 