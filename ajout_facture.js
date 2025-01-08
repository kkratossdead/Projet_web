const client_id=document.getElementById('client_id');
const montant_total=document.getElementById('montant_total');
const submit=document.getElementById('submit');
const message=document.getElementById('message');

submit.addEventListener('click',()=>{
    console.log('click');
    event.preventDefault();
    axios.post('http://localhost/Projet_web/api.php?resource=factures',{
        client_id:client_id.value,
        montant_total:montant_total.value,
    })
    .then((response)=>{
        message.innerHTML='Facture ajouté avec succès';
        console.log(response);
    })
    .catch((error)=>{
        message.innerHTML='Erreur lors de l\'ajout de la facture';
        console.error('Erreur lors de l\'ajout de la facture:',error);
    });
}
);

