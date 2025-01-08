document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    if (!productId) {
      alert("Aucun produit spécifié !");
      return;
    }
  
    axios
      .get(`http://localhost/Projet_web/api.php?resource=produits&id=${productId}`)
      .then((response) => {
        const product = response.data;
  
        // Vérifier si le produit existe
        if (!product) {
          alert("Produit introuvable !");
          return;
        }
  
        // Mettre à jour la page avec les détails du produit
        document.querySelector(".product_image img").src = product.image || "placeholder.png";
        document.querySelector(".product_image img").alt = product.title;
        document.getElementById("title").textContent = product.title;
        document.getElementById("description").textContent = product.description;
        document.getElementById("price").textContent = `Prix : ${product.price} €`;
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du produit :", error);
        alert("Erreur lors du chargement des détails du produit.");
      });
  });
  