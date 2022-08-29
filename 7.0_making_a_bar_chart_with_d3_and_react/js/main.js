const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';
const width = window.screen.width - 10;
const height = window.screen.height - 10;
const margin = { top: 20, right: 20, bottom: 20, left: 20 }

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const row = d => {
      d.Population = +d['2020'];
      return d;
    };
    d3.csv(csvUrl, row).then(data => setData(data.slice(0, 6)));
  }, [])


  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = d3.scaleBand()
    .domain(data.map(d => d.Country))
    .range([innerWidth, 0]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Population)])
    .range([innerHeight, 0]);

  margin.left = d3.max(yScale.ticks()).toString().length * 9.5;

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.bottom})`}>
      {yScale.ticks().map(tickValue => (
        <g transform={`translate(0, ${yScale(tickValue)})`}>
          <line x2={innerWidth} stroke="black"/>
          <text
            style={{ textAnchor: 'end'}}
            x={-3}
            dy=".35em"
          >
            {tickValue}
          </text>
        </g>
      ))}
      {xScale.domain().map(domainValue => (
        <g transform={`translate(${xScale(domainValue)},0)`}>
          <text
            style={{ textAnchor: 'middle'}}
            y={innerHeight + margin.bottom}
            x={xScale.bandwidth() / 2}
          >
            {domainValue}
          </text>
        </g>
      ))}
      {data.map(d => (
        <rect 
          x={xScale(d.Country)} 
          y={yScale(d.Population)} 
          width={xScale.bandwidth()} 
          height={innerHeight - yScale(d.Population)} 
        />
      ))}
      </g>
    </svg>
  )

};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />);