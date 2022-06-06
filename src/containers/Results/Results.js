import React, { Component } from 'react'; 
import axios from 'axios'; 
import '../../App.scss';
import CPSnippet from '../../components/CPSnippet/CPSnippet';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

import { OpenStreetMapProvider } from 'leaflet-geosearch';

class Results extends Component {
    
    constructor(props){
        super(props); 
        this.provider = new OpenStreetMapProvider();
    
    }; 

    render(){

        let list = (<p>Loading...</p>)

        if(this.props.collectionPoints){
            
            list = (<div className='cpList'>
                    {this.props.collectionPoints.map(cp =>{
                        
                            return (
                                <CPSnippet 
                                    title={cp.details.title}
                                    address={cp.details.address}
                                    items={cp.details.items}
                                    linkText='Go to details'
                                    url={`/collectionPoint/${cp.cpKey}`}
                                />
                            )
                        } ) 
                    }
                    </div>)   

        }

        const coordinates = this.props.selectedCoordinates; 
        console.log(coordinates) 


        return (
            
            <div className='resultsContainer flex-row'>
                <MapContainer className='mapContainer' center={coordinates} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {this.props.collectionPoints.map(cp =>{
                        let markerPosition = [cp.details.selectedCoordinates[0], cp.details.selectedCoordinates[1]]
                        return (
                            <Marker position={markerPosition}> 
                                {/*<Popup>
                            
                                </Popup>*/}
                            </Marker>
                        )
                        }) 
                    }
                </MapContainer>
            {list}
            
            </div>
            
        );
    }
}



export default Results;