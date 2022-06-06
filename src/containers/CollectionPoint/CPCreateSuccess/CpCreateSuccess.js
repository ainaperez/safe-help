import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const CPCreateSuccess = (props) => {
    let [collectionPoint, setCP] = useState(null);
    const id = window.location.pathname.replace('/createsuccess','');
    const getCollectionPoint = () => {
        console.log(id)
        axios.get(`https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app/collectionPoints${id}.json`)
        .then(response => {
            console.log(response)
                setCP(collectionPoint = response.data)
            
            console.log(collectionPoint)
         }
            
        )
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getCollectionPoint()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let title = (<p>Your Collection point has been created</p>)

    if(collectionPoint){
        title = (<p>{collectionPoint.title}</p>)
    }

    return(
        <div>
       <h1>Success!</h1>
       <p>{title}</p>  
       <p>has been created</p>  
       <Button onClick={() => window.location = `/collectionPoints${id}`}>ADD ITEMS</Button>
       </div>
    )
    
    }

export default CPCreateSuccess;