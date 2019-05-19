import React from 'react';

function List(props) {
  let items;
  let filter;

  if (props.filter) {
    filter = props.filter.toLowerCase();
    items = props.items.filter(item => {
      return item.name.toLowerCase().indexOf(filter) > -1
    });
  } else {
    items = props.items;
  }
  
  return (
    <ol className="entertainment-list">
      {items.map(item => (
        <li key={item.id}>
          <a href="#!"
            onClick={props.clickHandler.bind(null, item)}>{item.name}</a>
        </li>
      ))}
    </ol>
  )
}

export default List;
