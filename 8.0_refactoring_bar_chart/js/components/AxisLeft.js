const AxisLeft = ({ yScale, innerWidth, className, tickFormat }) => (
  yScale.ticks().map(tickValue => (
    <g 
      className={className}
      key={tickValue}
      transform={`translate(0, ${yScale(tickValue)})`}
    >
      <line x2={innerWidth} stroke="black"/>
      <text
        style={{ textAnchor: 'end'}}
        x={-3}
        dy=".35em"
      >
        {tickFormat(tickValue, 2)}
      </text>
    </g>
  ))
);