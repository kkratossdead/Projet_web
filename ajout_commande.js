const quantite=document.getElementById('quantite');
const produit_achete=document.getElementById('produit_achete');
const submit=document.getElementById('submit');
const message=document.getElementById('message');

submit.addEventListener('click',()=>{
    console.log('click');
    event.preventDefault();
    axios.post('http://localhost/Projet_web/api.php?resource=commandes',{
        quantite:quantite.value,
        produit_commande:produit_achete.value,
    })
    .then((response)=>{
        message.innerHTML='Commande ajouté avec succès';
        console.log(response);
    })
    .catch((error)=>{
        message.innerHTML='Erreur lors de l\'ajout de la commande';
        console.error('Erreur lors de l\'ajout de la commande:',error);
    });
}
);

