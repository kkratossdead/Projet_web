document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    if (!productId) {
      alert("Aucune facture spécifié !");
      return;
    }
  
    axios
      .get(`http://localhost/Projet_web/api.php?resource=factures&id=${productId}`)
      .then((response) => {
        const product = response.data;
  
        if (!product) {
          alert("Facture introuvable !");
          return;
        }
        document.getElementById("id_facture").textContent = `ID de la facture: ${product.id}`;
        document.getElementById("id_client").textContent = `ID du client: ${product.client_id}`;
        document.getElementById("date").textContent = `Date de la facture :${product.date_creation}`;
        document.getElementById("Montant").textContent = `Montant Total à payer : ${product.montant_total}`;
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de la facture :", error);
        alert("Erreur lors du chargement des détails de la facture.");
      });
  });
  