
import {
    GoogleMap, 
    useLoadScript, 
    Marker, 
    InfoWindow
} from '@react-google-maps/api';

import React, { Component } from 'react';
import axios from 'axios'; 

const libraries = ["places"]; 
const mapContainerStyle = {
    width: '50vw', 
    height: '100vh'
}
const center = {
    lat: 47.444, 
    lng: -122.176
}

/*function MapWrapper (){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.React_APP_GOOGLE_MAPS_API_KEY, 
        libraries,
    })

    if(loadError) return "Error loading maps"; 
    if(!isLoaded) return "Loading Maps"; 

    return (<div>
        <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={8} 
            center={center}></GoogleMap>
    </div>)

}

export default MapWrapper;


/*export class MapWrapper extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                {latitude: 47.359423, longitude: -122.021071},
                {latitude: 47.2052192687988, longitude: -121.988426208496},
                {latitude: 47.6307081, longitude: -122.1434325},
                {latitude: 47.3084488, longitude: -122.2140121},
                {latitude: 47.5524695, longitude: -122.0425407}]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
      return (
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: '
  })(MapWrapper);*/