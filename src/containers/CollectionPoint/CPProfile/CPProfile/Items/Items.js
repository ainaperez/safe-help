import React, { Component } from 'react'; 
import Item from './Item/Item'; 


const Items = (props) => {

    let itemList = (
        <div className='snippetItemContainer'>
          {props.items.map((item) => {
            return (
              <Item
                editItem={props.editItem}
                onChange={props.onChange}
                title={item.title}
                uneeded={item.uneeded}
                ucollected={item.ucollected}
                urgency={item.urgency}
                key={item.id}

              />
            );
          })}
        </div>
      );
    

 
return (
<div className='wrapper'>
  <div className='flex-row snippetItemContainer'>
  <p>Item</p>
  <p>Units Collected / <br /><strong>Units Needed</strong></p>
  <p></p>
  </div>
  {itemList}
  </div>
         
    
)
}

export default Items;