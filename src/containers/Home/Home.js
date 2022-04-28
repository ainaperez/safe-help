import React, { Component } from 'react'; 
import Aux from '../../hoc/Aux';
import classes from '../Home/Home.module.scss';
import Search from '../../components/Search/Search';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }
    
    render() {
        return (
            <Aux>
                <Search />
                <div className={classes.cpSnippetContainer}>
                    <div className={classes.cpSnippet}><a href='#' >Collection points in Berlin</a></div>
                    <div className={classes.cpSnippet}><a href='#' >Collection points in Hamburg</a></div>
                    <div className={classes.cpSnippet}><a href='#' >Collection points in Leipzig</a></div>
                    <div className={classes.cpSnippet}><a href='#' >Collection points in Cologne</a></div>
                </div>
                <p>{this.state.apiResponse}</p>
                <div className={classes.organizer}>
                    <p>Or create a collection point</p>
                    <a>I am an organizer</a>
                </div>
            </Aux>
        );
    }
}

export default Home; 