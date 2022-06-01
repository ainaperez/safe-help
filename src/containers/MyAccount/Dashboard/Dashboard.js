import React, { Component } from 'react'; 
import '../../../App.scss';
import { getAuth } from "firebase/auth";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Settings from '../Settings/Settings';
import CPSnippet from '../../../components/CPSnippet/CPSnippet';

const auth = getAuth();

class Dashboard extends Component {
  
    constructor(props){
        super(props);   
        this.state = {
            user: auth.currentUser,
            collectionPoints: [], 
            loading: false,
        }
        this.getCollectionPoints = this.getCollectionPoints.bind(this);     
    }; 

    componentDidMount(){
      this.getCollectionPoints();
    }

    getCollectionPoints = () =>{
        
        axios.get('https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app/collectionPoints.json')
        .then(response => {
        var Cps= [];
        const data = response.data
        for(let key in data){
            if(data[key].userId == this.state.user.uid){
                Cps.push({
                    key: key,
                    details: data[key]});
            }
        }  
        this.setState({
            collectionPoints: Cps,
        });
        })
        .catch(err => console.log(err))
    }

    deleteAccount = () => {
        this.state.collectionPoints.map(cp => {
            let key = cp.key
            axios.delete(`https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app/collectionPoints/${key}.json`)
        })
        axios.delete('https://safe-help-57776-default-rtdb.europe-west1.firebasedatabase.app/organizators.json')
    }

    render() {
        let cps = (<p>...loading</p>) 
        if(this.state.user){
            cps = (
                this.state.collectionPoints.map(cp => {
                    return (
                        <CPSnippet 
                            title={cp.details.title}
                            address={`${cp.details.addressStreet} ${cp.details.addressNum}, ${cp.details.addressPostal}, ${cp.details.addressCity}, ${cp.details.addressCountry} `}
                            linkText='Edit'
                            url={`/collectionPoints/${cp.key}`}
                        />
                    )
                })  
            )
        }
    
        return (
            <div>
                 <h1>My Dashboard</h1>

                 <div className='dashboard'>
                    <section>
                        <h2>Your collection points</h2>
                            <Button href='/createcp'>CREATE A COLLECTION POINT</Button>
                            <div className='cpUserList'>
                        {cps}
                        </div> 
                    </section>
                    {<Settings />}
                </div>
            </div>
        );
    }
}

export default Dashboard; 