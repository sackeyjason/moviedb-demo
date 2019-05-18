import React from 'react';

function List(props) {
  return (
    <ol>
      {props.items.map(item => (
        <li key={item.id}>
          <a href="#!"
            onClick={props.modal.bind(null, item)}>{item.title}</a>
        </li>
      ))}
    </ol>
  )
}

export default List;
