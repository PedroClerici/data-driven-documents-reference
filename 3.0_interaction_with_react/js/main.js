const width = window.screen.width;
const height = window.screen.height;
const radius = 50;

const App = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: width / 2,
    y: height / 2,
  });

  const handleMouseMove = ({ clientX, clientY }) => {
    setMousePosition({ x: clientX, y: clientY })
  }

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <Circle 
        radius={radius} 
        centerX={mousePosition.x}
        centerY={mousePosition.y}
      />
    </svg>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />);