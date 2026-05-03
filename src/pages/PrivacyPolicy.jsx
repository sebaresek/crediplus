import React from 'react';

export default function PrivacyPolicy() {
  return (
    <>
      <h1 className="text-blue-900">Políticas de Privacidad</h1>
      
      <p>
        En <strong>CrediPlus</strong> tomamos muy en serio la privacidad y protección de los datos personales de nuestros usuarios. Esta política describe cómo recolectamos, usamos y protegemos la información en cumplimiento con la <strong>Ley de Protección de los Datos Personales N° 25.326</strong> de la República Argentina.
      </p>

      <h2>1. Recolección de Datos</h2>
      <p>
        Al registrarse y solicitar un préstamo, recolectamos datos personales como:
      </p>
      <ul>
        <li>Nombre y Apellido, DNI, CUIL/CUIT.</li>
        <li>Datos de contacto (email, teléfono, domicilio).</li>
        <li>Información bancaria (CBU/CVU) e ingresos.</li>
        <li>Información de historial crediticio obtenida de burós de crédito.</li>
      </ul>

      <h2>2. Uso de la Información</h2>
      <p>
        La información recolectada se utiliza con el fin de:
      </p>
      <ul>
        <li>Evaluar el perfil crediticio y otorgar el préstamo.</li>
        <li>Verificar la identidad del usuario para prevenir fraudes.</li>
        <li>Gestionar cobranzas y comunicarse por asuntos relacionados al servicio.</li>
        <li>Ofrecer promociones y mejoras del servicio (pudiendo el usuario optar por no recibirlas).</li>
      </ul>

      <h2>3. Protección y Confidencialidad</h2>
      <p>
        Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra acceso no autorizado, alteración o destrucción. 
      </p>

      <h2>4. Derechos de Acceso, Rectificación y Supresión</h2>
      <p>
        El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses. Asimismo, podrá solicitar la rectificación o supresión de sus datos, contactándose a nuestro correo de atención o domicilio legal.
      </p>

      <div className="bg-gray-100 p-4 rounded-xl mt-6 text-sm">
        <strong>La Agencia de Acceso a la Información Pública</strong>, Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
      </div>
    </>
  );
}
