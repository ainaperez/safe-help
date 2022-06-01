import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SnippetItem from './SnippetItem/SnippetItem';
import { Link } from 'react-router-dom';
const items = [];
const CPSnippet = (props) => {
  const items = []; 
  console.log(props.items)
  for(let key in props.items){
    
    items.push({
      key: key,
      itemDetails: props.items[key]
    })
  }
  console.log(items)

    let itemList = (
        <div>
          {items.map((item) => {
            console.log(item)
            return (
              <SnippetItem
                title={item.itemDetails.title}
                urgency={item.itemDetails.urgency}
                key={item.key}
              />
            );
          })}
        </div>
      );
       
 
    return(
        <Card className='CPSnippet' sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.address}
          </Typography>
          {itemList}
          <CardActions>
          <Link to={props.url}>{props.linkText}</Link>
        </CardActions>
        </CardContent>
        
      </Card>)
        
    
   
}

export default CPSnippet;