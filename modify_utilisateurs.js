document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const password=document.getElementById("password");
    const submit=document.getElementById("submit");
    const message=document.getElementById("message");
  
    if (!productId) {
      alert("Aucun utilisateur spécifié !");
      return;
    }
    axios
      .get(`http://localhost/Projet_web/api.php?resource=utilisateurs&id=${productId}`)
      .then((response) => {
        const product = response.data;
  
        if (!product) {
          alert("utilisateur introuvable !");
          return;
        }
        nom.value=product.nom;
        email.value=product.email;
        password.value=product.password 

        submit.addEventListener("click",()=>{
            event.preventDefault(); 
          axios
          .put(`http://localhost/Projet_web/api.php?resource=utilisateurs&id=${productId}`,{
            nom: nom.value,
            email: email.value,
            password: password.value
          })
          .then((response) => {
            message.innerHTML="Utilisateur modifié avec succès";
            setTimeout(() => {
                window.location.href = `details_utilisateurs.html?id=${productId}`;
              }, 1000);           })
          .catch((error) => {
            console.error("Erreur lors de la modification de l'utilisateur :", error);
            message.innerHTML="Erreur lors de la modification de l'utilisateur";
          });
        });

        
  
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de l'utilisateur :", error);
      });



});