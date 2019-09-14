import React from 'react'
import PropTypes from 'prop-types'
import { Layer, Rect, Circle, Text } from 'react-konva';

CardNumber.defaultProps = {
  x: 320,
  y: 100,
};


function CardNumber(props) {
  return (
    <Layer>
      <Text 
        x={props.x + 7}
        y={props.y + 9}
        align="center"
        text="001" 
        fontSize={130} 
        fill={"black"}
        verticalAlign="bottom"
        
      />
    </Layer>
  )
}

CardNumber.propTypes = {

}

export default CardNumber

