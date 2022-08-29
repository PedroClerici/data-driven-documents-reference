const Marks = ({ data, xScale, yScale, xValue, yValue, className, radius }) => (
  <path 
    className={className}
    d={d3.line()
        .x(d => xScale(xValue(d)))
        .y(d => yScale(yValue(d)))
        .curve(d3.curveNatural)(data)}
  />
);