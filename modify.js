document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const price = document.getElementById("price");
    const submit=document.getElementById("submit");
    const message=document.getElementById("message");
  
    if (!productId) {
      alert("Aucun produit spécifié !");
      return;
    }
    axios
      .get(`http://localhost/Projet_web/api.php?resource=produits&id=${productId}`)
      .then((response) => {
        const product = response.data;
  
        if (!product) {
          alert("Produit introuvable !");
          return;
        }
        title.value=product.title;
        description.value=product.description;
        price.value=product.price;
        submit.addEventListener("click",()=>{
            event.preventDefault(); 
          axios
          .put(`http://localhost/Projet_web/api.php?resource=produits&id=${productId}`,{
            title: title.value,
            description: description.value,
            price: price.value,
          })
          .then((response) => {
            message.innerHTML="Produit modifié avec succès";
            setTimeout(() => {
                window.location.href = `details.html?id=${productId}`;
              }, 1000);           })
          .catch((error) => {
            console.error("Erreur lors de la modification du produit :", error);
            message.innerHTML="Erreur lors de la modification du produit";
          });
        });

        
  
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du produit :", error);
      });



});