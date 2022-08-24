const url = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'

const App = () => {
  const [data, setData] = React.useState(null);

  d3.csv(url).then(data => setData(data));

  if (data) {
    return <Table data={data}/>;
  }

  return (<p>Loading...</p>);
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />);