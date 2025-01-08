const nom=document.getElementById('nom');
const email=document.getElementById('email');
const mot_de_passe=document.getElementById('mot_de_passe');
const submit=document.getElementById('submit');
const message=document.getElementById('message');

submit.addEventListener('click',()=>{
    console.log('click');
    event.preventDefault();
    axios.post('http://localhost/Projet_web/api.php?resource=utilisateurs',{
        nom:nom.value,
        email:email.value,
        mot_de_passe:mot_de_passe.value,        
    })
    .then((response)=>{
        message.innerHTML='Utilisateur ajouté avec succès';
        console.log(response);
    })
    .catch((error)=>{
        message.innerHTML='Erreur lors de l\'ajout de l\'utilisateur';
        console.error('Erreur lors de l\'ajout de l\'utilisateur:',error);
    });
}
);

