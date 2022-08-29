const useData = csvUrl => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const row = d => {
      d.Population = +d['2020'] * 1000;
      return d;
    };
    d3.csv(csvUrl, row).then(data => setData(data.slice(0, 5)));
  }, [])

  return data;
}