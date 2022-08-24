const url = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'
const width = window.screen.width;
const height = window.screen.height;

const App = () => {
  const [data, setData] = React.useState(null);

  d3.csv(url).then(data => setData(data));

  const pieArc = d3.arc()
    .innerRadius(0)
    .outerRadius(width);

  if (!data) {
    return <pre>Loading</pre>
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
      {d3.pie()
        .value(1)(data)
        .map(d => (
        <path
          fill={d.data['RGB hex value']}
          d={pieArc(d)}
        />
      ))}
      </g>
    </svg>
  )

  // return (
  //   <svg width={width} height={height}>
  //     <g transform={`translate(${width / 2}, ${height / 2})`}>
  //     {data.map((d, i)=> (
  //       <path
  //         fill={d['RGB hex value']}
  //         d={pieArc({
  //           startAngle: i / data.length * 2 * Math.PI,
  //           endAngle: (i + 1) / data.length * 2 * Math.PI,
  //         })}
  //       />
  //     ))}
  //     </g>
  //   </svg>
  // )
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />);