const useData = csvUrl => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const row = d => {
      d.timestamp = new Date(d.timestamp)
      d.temperature = +d.temperature 

      return d;
    };

    d3.csv(csvUrl, row).then(data => setData(data));
  }, [])

  return data;
}