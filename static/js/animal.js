
function showAnimals(res) {
  console.log(res);

  let headers = Object.keys(res[0]);

  console.log(headers);

  // create a header html string
  let header_html = '<thead><tr><th>#</th>';

  for (let i in headers) {
    let column_name = headers[i];
    console.log(column_name);
    header_html += `<th>${column_name}</th>`;
  }

  // end row and header
  header_html += '</tr></thead>';

  // create body information for each animal
  let body_html = '<tbody>';

  // add to body_html for each animal, as a row
  for (let i in res) {
    body_html += `
      <tr>
        <td>${parseInt(i) + 1}</td>
        <td>${res[i].name}</td>
        <td>${res[i].species}</td>
        <td>
          <span style="color:green; font-weight:bold">Likes: </span>${res[i].foods.likes}<br>
          <span style="color:red; font-weight:bold">Dislikes: </span>${res[i].foods.dislikes}
        </td>
      </tr>
    `;
  }

  $('.table').html(header_html + body_html);
}

let url = 'https://learnwebcode.github.io/json-example/animals-1.json';

$.get(url, showAnimals);
