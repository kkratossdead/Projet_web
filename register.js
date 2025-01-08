document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const submitBtn = document.getElementById("submit-btn");
    const messageDiv = document.getElementById("message");
  
    submitBtn.addEventListener("click", () => {
      const email = emailInput.value;
      const password = passwordInput.value;
  
      if (!email || !password) {
        messageDiv.style.display = "block";
        messageDiv.innerHTML = "<p style='color:red;'>Veuillez remplir tous les champs.</p>";
        return;
      }
      axios.post("http://localhost/Projet_web/api.php?resource=comptes", {
        action: "register",
        nom_compte: email,
        mot_de_passe: password,
      })
        .then((response) => {
          if (response.data.status === "success") {
            messageDiv.style.display = "block";
            messageDiv.innerHTML = "<p style='color:green;'>Compte créé avec succès</p>";
            setTimeout(() => {
              window.location.href = "login.html";
            }, 2000);
          } else {
            messageDiv.style.display = "block";
            messageDiv.innerHTML = "<p style='color:red;'>" + response.data.message + "</p>";
          }
        })
        .catch((error) => {
          console.error("Erreur lors de l'inscription :", error);
        });
  
      
    });
  });
  