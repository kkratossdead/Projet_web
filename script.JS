document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementsByClassName('menu')[0];

  menuToggle.addEventListener('click', function (event) {
      menu.classList.toggle('show');
  });

  document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
          menu.classList.remove('show');
      }
  });
  const toggleButtons = document.querySelectorAll('.product-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const submenu = this.closest('.product-section').querySelector('.product-submenu');
            
            this.classList.toggle('active');
            
            submenu.classList.toggle('show');
        });
    });
});

