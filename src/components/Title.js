import React from 'react';
import '../styles/index.css';

const Title = (props) => {
  return (
      <h2 id={props.name} style={{marginTop: "5px"}}> {props.name}</h2>
  );
}

export default Title;