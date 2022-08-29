const AxisBottom = ({ xScale, innerHeight, className }) => (
  xScale.domain().map(domainValue => (
    <g 
      className={className}
      key={domainValue}
      transform={`translate(${xScale(domainValue)},0)`}
    >
      <text
        style={{ textAnchor: 'middle'}}
        y={innerHeight + 20}
        x={xScale.bandwidth() / 2}
      >
        {domainValue}
      </text>
    </g>
  ))
);