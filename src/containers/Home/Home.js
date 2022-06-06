import React, { useState, useEffect } from 'react'; 
import Aux from '../../hoc/Aux/Aux';
import '../../App.scss'
import axios from 'axios'; 
import Results from '../Results/Results';


import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';


const Home = () => {

    const [address, setAddress] = useState(''); 
   
    const [selectedCoordinates, setCoordinates] = useState([52.516330, 13.379575]);
    const [collectionPoints, setCps] = useState(null); 
    const [filteredCPs, setFilteredCps] = useState(null); 
    
    useEffect(() => {
        getCollectionPoints();
    }, [address])
   
    const handleChange = address => {
       setAddress(address)
      };
     
    const handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            setCoordinates([latLng.lat, latLng.lng]);
             setAddress(address);
              filterPoints();
            }
              )
          .catch(error => console.error('Error', error));
    }; 

    const getCollectionPoints =() =>{
        axios.get('https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app/collectionPoints.json')
        .then(response => {
            const cpFilteredList = []
            for(let key in response.data){
                cpFilteredList.push({
                    cpKey: key,
                    details: response.data[key]
                })
            }
            setCps(cpFilteredList)
        })
        .catch(err => console.log(err))    
    }

    const filterPoints = () => {
        console.log(collectionPoints)

       const filteredCPs = [];
       
       collectionPoints.map(cp => {
           if((cp.details.selectedCoordinates[0] > selectedCoordinates[0] - 1 &&
            cp.details.selectedCoordinates[0] < selectedCoordinates[0]+ 1 ) &&
            (cp.details.selectedCoordinates[1] > selectedCoordinates[1] - 1 &&
            cp.details.selectedCoordinates[1] < selectedCoordinates[1] + 1) ){
                filteredCPs.push(cp);
                return true;
            }else{
                return false;
            }
            })
        ;

        setFilteredCps(filteredCPs);

       console.log(filteredCPs);

    }

    return(
        <div >
            <div className='heroImg'>
            <h1>WELCOME TO SAFEHELP</h1>
            </div>
            <div className='home'>
                <h1>Search a donation Collection point</h1>
                <Aux>
                <PlacesAutocomplete
                    value={address}
                    onChange={handleChange}
                    onSelect={handleSelect}
      >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className='d-flex flex-column homeSearch'>
                    <label className='label'>Where do you want to donate?</label>
                    <input
                    {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                    })}
                    />
                    <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                        const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                        <div
                            {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                            })}
                        >
                            <span>{suggestion.description}</span>
                        </div>
                        );
                    })}
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
            
                    {collectionPoints ? <Results 
                    collectionPoints={filteredCPs ? filteredCPs : collectionPoints} 
                    selectedCoordinates={selectedCoordinates}/> : <p>Loading...</p>  } 
                </Aux>

        </div>
            </div>
    )

}
export default Home; 