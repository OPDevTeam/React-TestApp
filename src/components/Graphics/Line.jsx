import React from 'react';

const Line = (props) => {
  let color = props.color ? props.color : "black";
  let width = props.width ? props.width : 2;
  let startx = props.start.x * props.sf;
  let starty = props.start.y * props.sf;
  let endx = props.end.x * props.sf;
  let endy = props.end.y * props.sf;
	return(
		<line x1={startx} y1={starty} x2={endx} y2={endy} stroke={color} strokeWidth={width} />
  );

}

export default Line;
