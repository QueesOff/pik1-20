fetch("http://localhost:8080/users")
  .then(res => res.json())
  .then(data => {
    const body = document.getElementById("listAccount");
    data.forEach(item => {
      let row = document.createElement("tr");

      let idTd = document.createElement("td");
      idTd.innerHTML = item.id;
      let nameTd = document.createElement("td");
      nameTd.innerHTML = item.name;
      let textTd = document.createElement("td");
      textTd.innerHTML = item.text;

      row.appendChild(idTd);
      row.appendChild(nameTd);
      row.appendChild(textTd);
      body.appendChild(row);
    });
  })