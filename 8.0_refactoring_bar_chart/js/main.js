const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';
const width = window.screen.width - 10;
const height = window.screen.height - 10;
const margin = { top: 40, right: 10, bottom: 30, left: 50 }
const padding = 0.1;


const App = () => {

  const data = useData(csvUrl);

  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xValue = d => d.Country;
  const yValue = d => d.Population;

  const yAxisNumberFormat = (number, digits) => d3.format(`.${digits}s`)(number).replace('G', 'B');

  const xScale = d3.scaleBand()
    .domain(data.map(xValue))
    .range([innerWidth, 0])
    .padding(padding);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, yValue)])
    .range([innerHeight, 0]);

  return (
    <svg width={width} height={height}>
      <text className='chart-title' x={width / 2} y={margin.top}>
        The 5 most populated countries (2020)
      </text>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisLeft
          className='tick'
          yScale={yScale}
          innerWidth={innerWidth}
          tickFormat={yAxisNumberFormat}
        />
        <AxisBottom 
          className='tick'
          xScale={xScale}
          innerHeight={innerHeight}
        />
        <Marks 
          className='mark'
          data={data}
          xScale={xScale}
          yScale={yScale} 
          xValue={xValue}
          yValue={yValue}
          innerHeight={innerHeight}
          titleFormat={yAxisNumberFormat}
        />
      </g>
    </svg>
  )

};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />);