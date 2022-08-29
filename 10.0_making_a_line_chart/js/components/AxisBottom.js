const AxisBottom = ({ xScale, innerHeight, className, timeFormat }) => (
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
        {timeFormat(tickValue)}
      </text>
    </g>
  ))
);