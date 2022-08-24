const Table = ({ data }) => (
  <table>
    <tbody>
      <tr>
        {data.columns.map(column => <th key={column}>{column}</th>)}
      </tr>
        {data.map(row => (
          <tr key={Math.random()}>
            <td>{row.Specification}</td>
            <td>{row.Keyword}</td>
            <td style={{ backgroundColor: row['RGB hex value'] }}>{row['RGB hex value']}</td>
          </tr>
        ))}
    </tbody>
  </table>
);