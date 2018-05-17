import React from 'react';

const Line = (props) => {
  let color = props.color ? props.color : "black";
  let width = props.width ? props.width : 2;
	return(
		<line x1={props.start.x} y1={props.start.y} x2={props.end.x} y2={props.end.y} 
        stroke={color} strokeWidth={width}
    />
  );

}

export default Line;
