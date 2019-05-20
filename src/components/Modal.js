import React from 'react';
import ReactModal from 'react-modal';

if (document.getElementById('root')) {
  ReactModal.setAppElement('#root');
}

function Modal(props) {
  let overview, knownFor, image, backgroundImage;
  if (props.data.overview) overview = <p>{props.data.overview}</p>;
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
  if (props.imgConfig) {
    if (props.data.profile_path) {
      image = <img
        alt=""
        style={{
          float: 'right',
          marginLeft: 20
        }}
        src={props.imgConfig.base_url + props.imgConfig.profile_sizes[1] + props.data.profile_path}        
      />
    }
    if (props.data.backdrop_path) {
      backgroundImage = <img
        alt=""
        src={props.imgConfig.base_url + props.imgConfig.backdrop_sizes[1] + props.data.backdrop_path}
      />;
    }
  }

  return (
    <ReactModal
      isOpen={props.isActive}
      onRequestClose={props.requestCloseHandler}
      style={{
        content: {
          maxWidth: '30rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          bottom: 'auto',
          maxHeight: '80vh',
          yOverflow: 'scroll'
        }
      }}
    >
      <div style={{textAlign: 'right'}}>
        <button
          style={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            padding: 0
          }}
          onClick={props.requestCloseHandler}
        >&times; close</button>
      </div>
      {image}
      <h2>{props.data.title || props.data.name}</h2>
      {overview}
      {knownFor}
      {backgroundImage}
    </ReactModal>
  )
}

export default Modal;
