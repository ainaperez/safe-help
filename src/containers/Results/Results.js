import React, { useState, useEffect } from 'react'; 
import '../../App.scss';
import CPSnippet from '../../components/CPSnippet/CPSnippet';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const Results = (props) => {
    

       
    const provider = new OpenStreetMapProvider();
    
    let list = (<p>Loading...</p>)
    if(props.collectionPoints){
        list = (<div className='cpList'>
                {props.collectionPoints.map(cp =>{
                    return (
                        <CPSnippet 
                            title={cp.details.title}
                            address={cp.details.address}
                            items={cp.details.items}
                            linkText='Go to details'
                            url={`/collectionPoint/${cp.cpKey}`}
                        />
                    )
                }) 
                }
                </div>)}



    return (
        
        <div className='resultsContainer flex-row'>
            <MapContainer className='mapContainer' center={props.selectedCoordinates} zoom={13} scrollWheelZoom={false}>
                {console.log(props.selectedCoordinates)}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {props.collectionPoints.map(cp =>{
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



export default Results;