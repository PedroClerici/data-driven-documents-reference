const width = 166;
const height = 166;

const array = d3.range(50);

const App = () => array.map(() => (
  <Face
    width={width}
    height={height}
    strokeWidth={10}
    centerX= {width / 2}
    centerY= {height / 2}
    eyeOffsetX={20 + Math.random() * 15}
    eyeOffsetY={20 + Math.random() * 15}
    eyeRadius={5 + Math.random() * 10}
    mouthWidth={7 + Math.random() * 9}
    mouthRadius={30 + Math.random() * 10}
  />
));

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />);