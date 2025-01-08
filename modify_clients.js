document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const telephone=document.getElementById("telephone");
    const adresse=document.getElementById("adresse");
    const submit=document.getElementById("submit");
    const message=document.getElementById("message");
  
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
        nom.value=product.nom;
        email.value=product.email;
        telephone.value=product.telephone;
        adresse.value=product.adresse


        submit.addEventListener("click",()=>{
            event.preventDefault(); 
          axios
          .put(`http://localhost/Projet_web/api.php?resource=clients&id=${productId}`,{
            nom: nom.value,
            email: email.value,
            telephone: telephone.value,
            adresse: adresse.value
          })
          .then((response) => {
            message.innerHTML="Client modifié avec succès";
            setTimeout(() => {
                window.location.href = `details_clients.html?id=${productId}`;
              }, 1000);           })
          .catch((error) => {
            console.error("Erreur lors de la modification du client :", error);
            message.innerHTML="Erreur lors de la modification du client";
          });
        });

        
  
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du client :", error);
      });



});