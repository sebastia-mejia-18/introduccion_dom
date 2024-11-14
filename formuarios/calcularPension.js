
function calcularPension() {
    const salario = parseFloat(document.getElementById("salario").value);
    const semanasColpensiones = parseInt(document.getElementById("semanasColpensiones").value) || 0;
    const semanasPrivados = parseInt(document.getElementById("semanasPrivados").value) || 0;

    // Total de semanas cotizadas
    const totalSemanas = semanasColpensiones + semanasPrivados;
    const añosCotizados = totalSemanas / 52;

    // Tasa estimada (1.5% del salario anual por cada año cotizado)
    const tasaPension = 0.015;
    const pensionAnual = salario * 12 * tasaPension * añosCotizados;
    const pensionMensual = pensionAnual / 12;

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = `
        <p>Tu pensión estimada mensual es: <strong>$${pensionMensual.toFixed(2)}</strong></p>`;
}
