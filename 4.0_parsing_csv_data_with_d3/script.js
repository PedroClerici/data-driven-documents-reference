table = document.querySelector('tbody');

const url = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'

d3.csv(url).then(data => {
  const tr = document.createElement('tr');

  for (const column of data.columns) {
    th = document.createElement('th')
    th.innerHTML = column;
    tr.appendChild(th);
    table.appendChild(tr);
  }

  for (const row of data) {
    html = `
      <tr>
        <td>${row.Specification}</td>
        <td>${row.Keyword}</td>
        <td style="background-color: ${row['RGB hex value']}">${row['RGB hex value']}</td>
      </tr>
    `

    table.innerHTML += html;
  }
});