document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitBtn = document.getElementById("submit-btn");
  const messageDiv = document.getElementById("message");

  submitBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      messageDiv.style.display = "block";
      messageDiv.innerHTML = "<p style='color:red;'>Veuillez remplir tous les champs.</p>";
      return;
    }

    axios.get('http://localhost/Projet_web/api.php?resource=comptes')
      .then((response) => {
        const comptes = response.data;
        console.log("Comptes retournés par l'API :", comptes);

        let isAuthenticated = false;

        comptes.forEach((compte) => {
          if (compte.nom_compte === email && compte.mot_de_passe === password) {
            isAuthenticated = true;
          }
        });

        if (isAuthenticated) {
          console.log("Connexion réussie !");
          messageDiv.style.display = "block";
          messageDiv.innerHTML = "<p style='color:green;'>Connexion réussie !</p>";

          // Redirection après un délai
          setTimeout(() => {
            window.location.href = "index.html"; // Redirige vers index.html
          }, 2000); // Délai de 2 secondes pour afficher le message
        } else {
          console.log("Email ou mot de passe incorrect.");
          messageDiv.style.display = "block";
          messageDiv.innerHTML = "<p style='color:red;'>Email ou mot de passe incorrect.</p>";
        }
      })
      .catch((error) => {
        console.error("Erreur lors de l'appel à l'API :", error);
        messageDiv.style.display = "block";
        messageDiv.innerHTML = "<p style='color:red;'>Erreur de liaison avec l'API.</p>";
      });
  });
});
