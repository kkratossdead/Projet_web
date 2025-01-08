document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const produit_commande = document.getElementById("title");
    const quantite = document.getElementById("quantite");
    const submit=document.getElementById("submit");
    const message=document.getElementById("message");
  
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
        produit_commande.value=product.produit_commande;
        quantite.value=product.quantite;

        submit.addEventListener("click",()=>{
            event.preventDefault(); 
          axios
          .put(`http://localhost/Projet_web/api.php?resource=commandes&id=${productId}`,{
            produit_commande: produit_commande.value,
            quantite: quantite.value
          })
          .then((response) => {
            message.innerHTML="Commande modifié avec succès";
            setTimeout(() => {
                window.location.href = `details_commandes.html?id=${productId}`;
              }, 1000);           })
          .catch((error) => {
            console.error("Erreur lors de la modification de la commande :", error);
            message.innerHTML="Erreur lors de la modification de la commande";
          });
        });

        
  
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de la commande :", error);
      });



});