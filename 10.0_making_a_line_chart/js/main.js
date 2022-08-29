const csvUrl = 'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv';
const width = window.screen.width - 10;
const height = window.screen.height - 10;
const margin = { top: 90, right: width / 6, bottom: 120, left: width / 6 }
const padding = 0.1;


const App = () => {

  const data = useData(csvUrl);

  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xValue = d => d.timestamp;
  const xAxisLabel = 'Time'

  const yValue = d => d.temperature;
  const yAxisLabel = 'Temperature'

  const timeFormat = d3.timeFormat('%a');

  const xScale = d3.scaleTime()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([innerHeight, 0])
    .nice();

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisLeft
          className='tick'
          yScale={yScale}
          innerWidth={innerWidth}
        />
        <text
          className='label'
          transform={`rotate(-90)`}
          textAnchor='middle'
          x={-innerHeight / 2}
          y={-45}
        >
          {yAxisLabel}
        </text>
        <AxisBottom 
          className='tick'
          xScale={xScale}
          innerHeight={innerHeight}
          timeFormat={timeFormat}
        />
        <text
          className='label'
          textAnchor='middle'
          x={innerWidth / 2}
          y={ innerHeight + 45}
        >
          {xAxisLabel}
        </text>
        <Marks 
          className='mark'
          data={data}
          xScale={xScale}
          yScale={yScale} 
          xValue={xValue}
          yValue={yValue}
          radius={10}
        />
      </g>
    </svg>
  )

};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />);