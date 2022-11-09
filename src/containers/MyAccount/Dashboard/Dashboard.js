import React, { useContext, useState, useEffect } from 'react'; 
import '../../../App.scss';
import axios from 'axios';
import Settings from '../Settings/Settings';
import CPSnippet from '../../../components/CPSnippet/CPSnippet';
import AuthContext from '../../../AuthContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [collectionPoints, setCP] = useState(null);
    useEffect(() => {
        getCollectionPoints();
        //eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user])

    const getCollectionPoints = () =>{
        axios.get('https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app/collectionPoints.json')
        .then(response => {
        var Cps= [];
        const data = response.data
        for(let key in data){
            if(data[key].userId === user.uid){
                Cps.push({
                    key: key,
                    details: data[key]});
            }
        }  
        setCP(Cps)
        })
        .catch(err => console.log(err))
    }

    let cps = (<p>Loading...</p>) 

    if(collectionPoints){
        cps = ( 
            collectionPoints.map(cp => {
                console.log(cp);
                return (
                    <CPSnippet  
                        title={cp.details.title}
                        address={cp.details.address}
                        linkText='Edit'
                        availabilit={cp.details.availability}
                        url={`/collectionPoints/${cp.key}`}
                    />
                )
            })  
        )
    }
    
    return (
        <div>
                <h1>My Dashboard</h1>
                <div className='d-flex flex-sm-column flex-lg-row dashboard'>
                <section className='text-center'>
                <h2>Your collection points</h2>

                <a className='yellowLink' href='/createcp'>CREATE A COLLECTION POINT</a>
                <div className='cpUserList'>
                {cps}
                </div> 

                </section> 
                {<Settings />}
                </div>
        </div>
    );
    
}

export default Dashboard; 