import React from 'react';

function List(props) {
    console.log(props.items)
    return (
        <React.Fragment>
            {props.items.map(item => (
                <h3>{item.title}</h3>
            ))}
        </React.Fragment>
    )
}

export default List;
