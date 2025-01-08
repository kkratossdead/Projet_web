document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    if (!productId) {
      alert("Aucune commande spécifié !");
      return;
    }
  
    axios
      .get(`http://localhost/Projet_web/api.php?resource=commandes&id=${productId}`)
      .then((response) => {
        const product = response.data;
  
        if (!product) {
          alert("Commande introuvable !");
          return;
        }
  
        document.getElementById("produit_commande").textContent = `Produit commandé: ${product.produit_commande}`;
        document.getElementById("id").textContent = `ID: ${product.id}`;
        document.getElementById("Quantite").textContent = `Quantité commandé :${product.quantite}`;
        document.getElementById("date").textContent = `Commandé le : ${product.date_commande}`;
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de la commande :", error);
        alert("Erreur lors du chargement des détails de la commande.");
      });
  });
  