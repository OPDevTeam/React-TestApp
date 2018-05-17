import React from 'react';

const Rectangle = (props) => {
	let width = props.end.x - props.start.x;
  let height = props.end.y - props.start.y;
  let stroke = props.border ? props.border : "black";
  let fill = props.fill ? props.fill : "white";
	return(
  	<rect x={props.start.x} y={props.start.y} width={width} height={height} 
          stroke={stroke} fill={fill} 
    />
  );
}

export default Rectangle;