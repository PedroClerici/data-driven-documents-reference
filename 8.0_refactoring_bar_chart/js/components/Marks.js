const Marks = ({ data, xScale, yScale, xValue, yValue, innerHeight, className, titleFormat }) => (
  data.map(d => (
    <rect 
      className={className}
      key={yValue(d)}
      x={xScale(xValue(d))} 
      y={yScale(yValue(d))} 
      width={xScale.bandwidth()} 
      height={innerHeight - yScale(d.Population)} 
    >
      <title>{titleFormat(yValue(d), 4)}</title>
    </rect>
  ))
);