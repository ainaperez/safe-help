import * as React from 'react';
import '../../../App.scss';
const SnippetItem = (props) => {

    const colorCode = (itemUrgency) => {
        let color = ''; 
         if(itemUrgency == 'low'){
             color = '#2fb1a2'
         }else if(itemUrgency == 'normal'){
             color =  '#e9c46a'
         }else if(itemUrgency == 'urgent'){
             color = '#f4a261'
         }else{
             color =  '#e76f51'
         }
         return color;
     }

     return(
         <div className='SnippetItem' style={{backgroundColor: colorCode(props.urgency)}}>{props.title}</div>    
     )
    
};


export default SnippetItem; 

