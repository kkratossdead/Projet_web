const titre=document.getElementById('title');
const description=document.getElementById('description');
const prix=document.getElementById('price');
const image=document.getElementById('image');
const submit=document.getElementById('submit');
const message=document.getElementById('message');


submit.addEventListener('click',()=>{
    console.log('click');
    event.preventDefault();
    axios.post('http://localhost/Projet_web/api.php?resource=produits',{
        title:titre.value,
        description:description.value,
        price:prix.value,
        image:image.value
    })
    .then((response)=>{
        message.innerHTML='Produit ajouté avec succès';
        console.log(response);
    })
    .catch((error)=>{
        message.innerHTML='Erreur lors de l\'ajout du produit';
        console.error('Erreur lors de l\'ajout du produit:',error);
    });
}
);

