import React from 'react'
import PropTypes from 'prop-types'
import { Layer, Rect, Circle, Text } from 'react-konva';
import Konva from 'konva';

CardTab.defaultProps = {
  width: 150,
  height: 30,
  x: 470,
  y: 300,
};

function CardTab(props) {
  return (
    <Layer>
       <Rect
        x={props.x - 5}
        y={props.y - 5}
        width={props.width + 5}
        height={props.height + 10}
        cornerRadius={8}
        fill={props.colors.secondary}
      />
      <Rect
        x={props.x}
        y={props.y}
        width={props.width}
        height={props.height}
        cornerRadius={10}
        fill={props.colors.primary}
      />
      <Rect
        x={props.x + props.width - 10}
        y={props.y}
        width={10}
        height={props.height}
        fill={props.colors.primary}
      />
      <Circle 
        x={props.x + 15}
        y={props.y + 15}
        radius={12}
        fill={props.colors.secondary}
      />
      <Text 
        x={props.x + 7}
        y={props.y + 9}
        align="center"
        text="郎" 
        fontSize={15} 
        fill={props.colors.primary}a
        verticalAlign="bottom"  
      />
      <Text 
        x={props.x + 35}
        y={props.y + 8}
        align="center"
        text="Haki armadura" 
        fontSize={14} 
        fill={props.colors.extra}
        verticalAlign="bottom"  
      />
    </Layer>
  )
}

CardTab.propTypes = {

}

export default CardTab

