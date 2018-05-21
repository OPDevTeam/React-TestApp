import React from 'react';

const TransformToView = (pt, origin, invertY, sf) => {
  let x = pt.x * sf + origin.x;
  let y = invertY ? origin.y - pt.y * sf : pt.y * sf + origin.y ;
  return ({x: x, y: y})
}


const Line = (props) => {
  let color = props.color ? props.color : "black";
  let width = props.width ? props.width : 2;
  let start = TransformToView(props.start, props.vieworigin, props.invertyaxis, props.sf);
  let end = TransformToView(props.end, props.vieworigin, props.invertyaxis, props.sf);;

  return(
		<line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke={color} strokeWidth={width} />
  );

}

export default Line;
