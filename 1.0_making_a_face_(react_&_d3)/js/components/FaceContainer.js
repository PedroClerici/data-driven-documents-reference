const FaceContainer = ({ children, width, height }) => (
  <svg width={width} height={height}>
    <g transform={`translate(${width / 2}, ${height / 2})`}>
      {children}
    </g>
  </svg>
);