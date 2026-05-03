import React from 'react';

export default function CostsAndRates() {
  return (
    <>
      <h1 className="text-blue-900">Costos y Tasas</h1>

      <p>
        Nuestra prioridad es la transparencia. CrediPlus opera bajo un modelo de préstamos con garantía prendaria (empeño). No cobramos gastos administrativos ni de almacenamiento.
      </p>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
        <p className="font-bold text-green-700 m-0">
          Costo de Almacenamiento y Seguro: $0
        </p>
        <p className="text-gray-700 mt-2 mb-0">
          Guardamos tu objeto en un depósito seguro y monitoreado sin costo adicional para vos.
        </p>
      </div>

      <h2>Tasas de Interés por Plazo</h2>
      <ul>
        <li><strong>15 días:</strong> +35% sobre el capital.</li>
        <li><strong>30 días (1 mes):</strong> +50% sobre el capital.</li>
        <li><strong>2 meses:</strong> +70% sobre el capital (pagadero en 2 cuotas).</li>
        <li><strong>3 meses:</strong> +90% sobre el capital (pagadero en 3 cuotas).</li>
        <li><strong>6 meses:</strong> +130% sobre el capital (pagadero en 6 cuotas).</li>
        <li><strong>9 meses:</strong> +150% sobre el capital (pagadero en 9 cuotas).</li>
        <li><strong>12 meses:</strong> +170% sobre el capital (pagadero en 12 cuotas).</li>
      </ul>

      <h2>Intereses por Mora</h2>
      <p>
        En caso de no pagar o renovar en la fecha pactada, se aplica un periodo de tolerancia de 3 días hábiles.
      </p>
      <ul>
        <li><strong>Interés Diario por Atraso:</strong> 2% diario sobre el monto total adeudado.</li>
        <li><strong>Estado de Intimación:</strong> Pasados los 3 días de tolerancia, el objeto puede ser puesto a la venta para recuperar el crédito.</li>
      </ul>

      <h2>Renovación</h2>
      <p>
        Si no podés cubrir el total, podés abonar solo el interés acumulado y renovar el préstamo por un nuevo periodo, manteniendo tu objeto seguro con nosotros.
      </p>
    </>
  );
}
