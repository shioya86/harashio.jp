import React from 'react';


const style =  {
  div: {
  },
  header: {
    paddingTop: 60,
    borderBottom: "double 3px rgba(25, 118, 210, 0.3"
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