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

    

    render() {
        let list = (<p>Loading...</p>)
        let map = (<p>Map Loading</p>)

        if(this.props.collectionPoints){
            
            list = (<div className='cpList'>
                    {this.props.collectionPoints.map(cp =>{
                        let completeAddress = `${cp.details.addressStreet} ${cp.details.addressNum}, ${cp.details.addressPostal}, ${cp.details.addressCity}, ${cp.details.addressCountry} `;
                         console.log(cp)
                            return (
                                <CPSnippet 
                                    title={cp.details.title}
                                    address={completeAddress}
                                    items={cp.details.items}
                                    linkText='Go to details'
                                    url={`/collectionPoint/${cp.cpKey}`}
                                />
                            )
                        } ) 
                    }
                    </div>)   
        }

        const position = [52.516330, 13.379575]


        return (
            
            <div className='resultsContainer flex-row'>
                <MapContainer className='mapContainer' center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        {/*<Popup>
                       
                        </Popup>*/}
                    </Marker>
                </MapContainer>
            {list}
            
            </div>
            
        );
    }
}

export default Results; 