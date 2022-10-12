import React from 'react'; 
import '../../../../../../App.scss'
import Button from '../../../../../../components/UI/Button';
import SnippetItem from '../../../../../../components/CPSnippet/SnippetItem/SnippetItem';

const Item = (props) => {

     return(
         
       <div className='d-flex flex-row snippetItemContainer'>
           <SnippetItem
                    title={props.title}
                    urgency={props.urgency}
                    key={props.key}
                />
            <p>{props.ucollected}/<strong>{props.uneeded}</strong></p>
            <div>
                <Button classes='editButton'>Edit</Button>
                <Button click={props.deleteItem}><i className="bi bi-trash3"></i></Button>
            </div>   
        </div>
     )
    
};


export default Item; 

