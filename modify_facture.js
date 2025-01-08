document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const client_id = document.getElementById("client_id");
    const montant_total = document.getElementById("montant_total");
    const submit=document.getElementById("submit");
    const message=document.getElementById("message");
  
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
        client_id.value=product.client_id;
        montant_total.value=product.montant_total;



        submit.addEventListener("click",()=>{
            event.preventDefault(); 
          axios
          .put(`http://localhost/Projet_web/api.php?resource=factures&id=${productId}`,{
            client_id: client_id.value,
            montant_total: montant_total.value
          })
          .then((response) => {
            message.innerHTML="Facture modifié avec succès";
            setTimeout(() => {
                window.location.href = `details_facture.html?id=${productId}`;
              }, 1000);           })
          .catch((error) => {
            console.error("Erreur lors de la modification de la facture :", error);
            message.innerHTML="Erreur lors de la modification de la facture";
          });
        });

        
  
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de la facture :", error);
      });



});