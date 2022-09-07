import React from 'react';
import '../styles/index.css';
const style =  {
  div: {
  },
  header: {
  }

}
const Title = (props) => {
  return (
      <h2 id={props.name} style={style.header}> {props.name}</h2>
  );
};

export default Title;