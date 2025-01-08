// Make sure to include Axios in your HTML:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// Function to fetch and process data
function fetchOrderData() {
    axios.get('http://localhost/Projet_web/api.php?resource=commandes')
        .then(response => {
            const data = response.data;
            
            const ordersByDate = data.reduce((countByDate, order) => {
                const currentDate = order.date_commande;
                
                if (!countByDate[currentDate]) {
                    countByDate[currentDate] = 1;
                } else {
                    countByDate[currentDate] += 1;
                }
                
                return countByDate;
            }, {});

            const dates = Object.keys(ordersByDate).sort();
            const counts = dates.map(date => ordersByDate[date]);

            const ctx = document.getElementById('myChart');
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Nombres de commandes par jour',
                        data: counts,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Nombre de commandes par date'
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error fetching order data:', error);
            // Display error message on the page
            const ctx = document.getElementById('myChart');
            ctx.insertAdjacentHTML('beforebegin', 
                '<div style="color: red; text-align: center;">Erreur lors du chargement des données</div>'
            );
        });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchOrderData);

const ctx2 = document.getElementById('myChart2');
const myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
    datasets: [{
      label: 'Nombres de visiteurs par jour',
      data: [102, 190, 30, 50, 20],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx3 = document.getElementById('myChart3');
const myChart3 = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ['Vêtements', 'Chaussures', 'Casquettes', 'Accessoires'],
    datasets: [{
      label: 'Taux de vente par catégorie',
      data: [14, 30, 24, 13],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {}
});

const ctx4 = document.getElementById('myChart4');
const myChart4 = new Chart(ctx4, {
  type: 'doughnut',
  data: {
    labels: ['Vêtements', 'Chaussures', 'Casquettes', 'Accessoires'],
    datasets: [{
      label: 'Taux de vente par catégorie',
      data: [14, 30, 24, 13],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {}
});
