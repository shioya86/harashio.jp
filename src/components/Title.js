import React from 'react';

const style =  {
  paddingTop: 60,
  borderBottom: "double 3px rgba(178, 0, 0, 0.3"
}
const Title = (props) => {
  return (
    <div>
      <h2 id={props.name} style={style}> {props.name}</h2>
    </div>
  );
};

export default Title;