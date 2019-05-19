import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function Modal(props) {
  let overview = props.data.overview && <p>{props.data.overview}</p>;
  let knownFor;

  if (props.data.known_for) {
    knownFor = (
      <React.Fragment>
        <p>Known for:</p>
        <ul className="entertainment-list">
          {props.data.known_for.map((item, i) =>
            <li key={item.id}>
              <a href="#!" onClick={props.clickHandler.bind(null, item)}>
                {item.name || item.title}
              </a>
            </li>
          )}
        </ul>
      </React.Fragment>
    )
  }

  return (
    <ReactModal
      isOpen={props.isActive}
      onRequestClose={props.reqestCloseHandler}
    >
      <div style={{textAlign: 'right'}}>
        <button
          style={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            padding: 0
          }}
          onClick={props.reqestCloseHandler}
        >&times; close</button>
      </div>
      <h2>{props.data.title || props.data.name}</h2>
      {overview}
      {knownFor}
    </ReactModal>
  )
}

export default Modal;
