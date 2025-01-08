document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    if (!productId) {
      alert("Aucun utilisateur spécifié !");
      return;
    }
  
    axios
      .get(`http://localhost/Projet_web/api.php?resource=utilisateurs&id=${productId}`)
      .then((response) => {
        const product = response.data;
  
        if (!product) {
          alert("Utilisateur introuvable !");
          return;
        }
        document.getElementById("id").textContent = `ID: ${product.id}`;
        document.getElementById("nom").textContent = `Nom: ${product.nom}`;
        document.getElementById("email").textContent = `Email :${product.email}`;
        document.getElementById("date").textContent = `Date de création : ${product.date_creation}`;
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de l'utilisateurs :", error);
        alert("Erreur lors du chargement des détails de l'utilisateurs.");
      });
  });
  