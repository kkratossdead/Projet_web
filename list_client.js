axios.get('http://localhost/Projet_web/api.php?resource=clients')
  .then((response) => {
    const products = response.data;
    const tableBody = document.querySelector('#products-table tbody');
  

    products.forEach((product) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.nom}</td>
        <td>${product.email}</td>
        <td>${product.telephone}</td>
        <td>${product.adresse}</td>
        <td><a href="details_clients.html?id=${product.id}">Voir</a></td>
        <td><a href="modify_clients.html?id=${product.id}">Modifier</a></td>
        `;
      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error('Erreur lors de la récupération des clients:', error);
  });


  const searchBar = document.getElementById("search-bar");
  const searchBtn = document.getElementById("search-btn");
  const tableBody = document.querySelector("#products-table tbody");
  const message=document.getElementById("message");

  searchBtn.addEventListener("click", () => {
    const searchValue = searchBar.value;

    axios.get('http://localhost/Projet_web/api.php?resource=clients')
      .then((response) => {
        const products = response.data;
        tableBody.innerHTML = "";
        found=false;
        products.forEach((product) => {
          if (product.id==searchValue) {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${product.id}</td>
              <td>${product.nom}</td>
              <td>${product.email}</td>
              <td>${product.telephone}</td>
              <td>${product.adresse}</td>
              <td><a href="details_clients.html?id=${product.id}">Voir</a></td>
              <td><a href="modify_clients.html?id=${product.id}">Modifier</a></td>

              `;
            tableBody.appendChild(row);
            found=true;
          }
        });
        if(!found){
          message.innerHTML="Aucun client trouvé";
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des clients:', error);
      });
  });