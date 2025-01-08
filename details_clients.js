document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    if (!productId) {
      alert("Aucun client spécifié !");
      return;
    }
  
    axios
      .get(`http://localhost/Projet_web/api.php?resource=clients&id=${productId}`)
      .then((response) => {
        const product = response.data;
  
        if (!product) {
          alert("Client introuvable !");
          return;
        }
        document.getElementById("id").textContent = `ID: ${product.id}`;
        document.getElementById("nom").textContent = `Nom: ${product.nom}`;
        document.getElementById("email").textContent = `Email :${product.email}`;
        document.getElementById("telephone").textContent = `Telephone : ${product.telephone}`;
        document.getElementById("adresse").textContent = `Adresse : ${product.adresse}`;
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du client :", error);
        alert("Erreur lors du chargement des détails du client.");
      });
  });
  