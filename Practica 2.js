const TIEMPO_COCINA = 40;

document.getElementById('calculateBtn').addEventListener('click', function() {
    const capas = parseInt(document.getElementById('layers').value);
    const tiempoHorno = parseInt(document.getElementById('bakingTime').value);

    if (isNaN(capas) || capas <= 0 || isNaN(tiempoHorno) || tiempoHorno < 0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    const tiempoRestante = TIEMPO_COCINA - tiempoHorno;

    const tiempoPreparacion = capas * 2;

    const tiempoTotalTrabajo = tiempoPreparacion + tiempoHorno;

    let resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `
        <h2>Resultados:</h2>
        <p>Tiempo restante en el horno: ${tiempoRestante >= 0 ? tiempoRestante : '¡La lasaña ya está lista!' } minutos</p>
        <p>Tiempo total de preparación: ${tiempoPreparacion} minutos</p>
        <p>Tiempo total de trabajo (cocción + preparación): ${tiempoTotalTrabajo} minutos</p>
    `;
});

