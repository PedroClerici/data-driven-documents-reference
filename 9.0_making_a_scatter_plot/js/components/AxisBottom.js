const AxisBottom = ({ xScale, innerHeight, className }) => (
  xScale.ticks().map(tickValue => (
    <g 
      className={className}
      key={tickValue}
      transform={`translate(${xScale(tickValue)}, 0)`}
    >
      <line y2={innerHeight} stroke="black"/>
      <text
        style={{ textAnchor: 'middle'}}
        y={innerHeight + 10}
        dy=".35em"
      >
        {tickValue}
      </text>
    </g>
  ))
);