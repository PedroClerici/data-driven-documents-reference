const strokeWidth = 15;
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
const eyeOffsetX = 100;
const eyeOffsetY = 70;
const eyeRadius = 50;
const mouthRadius = 160;
const mouthWidth = 15;

const mouthArc = d3.arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3/2)

const App = () => (
  <svg width={window.innerWidth} height={window.innerHeight}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      <circle
        r={centerY / 2 - strokeWidth / 2}
        fill="yellow"
        stroke="black"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius}
      />
      <circle
        cx={-eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius}
      />
      <path d={mouthArc()}/>
    </g>
  </svg>
);

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />);

console.log(d3.arc);