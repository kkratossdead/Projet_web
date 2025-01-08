const ID = document.getElementById('ID');
const submit = document.getElementById('submit');
const message = document.getElementById('message');

submit.addEventListener('click', (event) => {
    event.preventDefault();
  
    if (!ID.value) {
      message.innerHTML = 'Veuillez entrer une ID d\'utilisateur.';
      return;
    }
  
    axios
      .delete(`http://localhost/Projet_web/api.php?resource=utilisateurs&id=${ID.value}`)
      .then((response) => {
          message.innerHTML = 'Utilisateurs supprimé avec succès.';
      })
      .catch((error) => {
        message.innerHTML = 'Erreur lors de la suppression de l\'utilisateur.';
      });
  });
  
  
  
