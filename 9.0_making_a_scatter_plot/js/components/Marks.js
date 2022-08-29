const Marks = ({ data, xScale, yScale, xValue, yValue, className, radius }) => (
  data.map(d => (
    <circle 
      className={className}
      cx={xScale(xValue(d))} 
      cy={yScale(yValue(d))} 
      r={radius}
    />
  ))
);