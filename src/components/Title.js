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
    <div>
      <h2 id={props.name} style={style.header}> {props.name}</h2>
    </div>
  );
};

export default Title;