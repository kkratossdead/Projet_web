const nom=document.getElementById('nom');
const email=document.getElementById('email');
const telephone=document.getElementById('telephone');
const adresse=document.getElementById('adresse');
const submit=document.getElementById('submit');
const message=document.getElementById('message');

submit.addEventListener('click',()=>{
    console.log('click');
    event.preventDefault();
    axios.post('http://localhost/Projet_web/api.php?resource=clients',{
        nom:nom.value,
        email:email.value,
        telephone:telephone.value,
        adresse:adresse.value,        
    })
    .then((response)=>{
        message.innerHTML='Client ajouté avec succès';
        console.log(response);
    })
    .catch((error)=>{
        message.innerHTML='Erreur lors de l\'ajout du client';
        console.error('Erreur lors de l\'ajout du client:',error);
    });
}
);

