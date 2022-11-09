import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SnippetItem from './SnippetItem/SnippetItem';
import { Link } from 'react-router-dom';

const CPSnippet = (props) => {
  const items = []; 
    
  for(let key in props.items){
      items.push({
        key: key,
        itemDetails: props.items[key]
      })
    }

  const itemsLength = items.length;

    let itemList = (
        <div>
          {items.slice(1).map((item) => {
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
     
    console.log(itemsLength == 0)
    return(
      <Link className='CPSnippet' to={props.url}>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.address}
          </Typography>
          {itemsLength == 0 ? null : itemList }
        </CardContent>  
      </Card>
      </Link>
      )
        
    
   
}

export default CPSnippet;