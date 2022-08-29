const useData = csvUrl => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const row = d => {
      d.sepal_length = +d.sepal_length;
      d.sepal_width = +d.sepal_width;
      d.pedal_length = +d.pedal_length;
      d.pedal_width = +d.pedal_width;

      return d;
    };

    d3.csv(csvUrl, row).then(data => setData(data));
  }, [])

  return data;
}