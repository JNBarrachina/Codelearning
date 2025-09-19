const ctx = document.getElementById('miGrafico').getContext('2d');

const datos = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [{
        label: 'Ventas',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'green',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    },
    {
        label: 'Gastos',
        data: [5, 32, 30, 31, 16, 25, 10],
        backgroundColor: 'red',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const miGrafico = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico: 'bar', 'line', 'pie', etc.
    data: datos,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            duration: 1000, // Duración en milisegundos
            easing: 'easeOutBounce' // Tipo de animación
        }
    }
});