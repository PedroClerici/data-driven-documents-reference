const csvUrl = 'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv';
const width = window.screen.width - 10;
const height = window.screen.height - 10;
const margin = { top: 30, right: width / 6, bottom: 60, left: width / 6 }
const padding = 0.1;


const App = () => {

  const data = useData(csvUrl);

  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xValue = d => d.sepal_length;
  const xAxisLabel = 'Sepal Length'

  const yValue = d => d.sepal_width;
  const yAxisLabel = 'Sepal Width'

  const yAxisNumberFormat = (number, digits) => d3.format(`.${digits}s`)(number).replace('G', 'B');

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([0, innerHeight])
    .nice();

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisLeft
          className='tick'
          yScale={yScale}
          innerWidth={innerWidth}
          tickFormat={yAxisNumberFormat}
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