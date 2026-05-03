import React from 'react';

export default function RefundPolicy() {
  return (
    <>
      <h1 className="text-blue-900">Botón de Arrepentimiento</h1>
      
      <p>
        De acuerdo a las normativas del Banco Central de la República Argentina y la Secretaría de Comercio Interior (Resolución 424/2020), los usuarios tienen el derecho a revocar la aceptación del producto o servicio contratado.
      </p>

      <h2>Condiciones para la revocación</h2>
      <ul>
        <li>
          <strong>Plazo:</strong> El usuario dispone de <strong>diez (10) días corridos</strong> contados a partir de la firma del contrato o la disponibilidad efectiva de los fondos, lo que ocurra último.
        </li>
        <li>
          <strong>Costo:</strong> La revocación no genera ningún costo o penalidad para el usuario.
        </li>
        <li>
          <strong>Restitución:</strong> Si los fondos ya fueron acreditados, el usuario deberá devolver el monto de capital recibido. No se le cobrarán intereses durante estos 10 días iniciales en caso de arrepentimiento válido.
        </li>
      </ul>

      <h2>¿Cómo ejercer este derecho?</h2>
      <p>
        Para cancelar el préstamo utilizando su derecho de arrepentimiento, por favor complete el siguiente formulario de contacto o comuníquese con nosotros por correo electrónico con el asunto <strong>"Revocación de Préstamo - DNI [Su Número]"</strong>.
      </p>

      {/* Formulario Mock para UI */}
      <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6 md:p-8 max-w-2xl shadow-sm">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Solicitud de Arrepentimiento</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">DNI</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Motivo (Opcional)</label>
            <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-900 hover:bg-blue-900/90 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </>
  );
}
