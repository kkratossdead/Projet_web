const ID = document.getElementById('ID');
const submit = document.getElementById('submit');
const message = document.getElementById('message');

submit.addEventListener('click', (event) => {
    event.preventDefault();
  
    if (!ID.value) {
      message.innerHTML = 'Veuillez entrer une ID de produit.';
      return;
    }
  
    axios
      .delete(`http://localhost/Projet_web/api.php?resource=produits&id=${ID.value}`)
      .then((response) => {
          message.innerHTML = 'Produit supprimé avec succès.';
      })
      .catch((error) => {
        message.innerHTML = 'Erreur lors de la suppression du produit.';
      });
  });
  
  
  
