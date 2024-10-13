const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'gabyr.contact@gmail.com', 
    pass: 'nizguhflnzkjfoer',
  },
});


const sendAdoptionRequestEmail = async ({ adopterName, adopterEmail, adopterPhone, ownerName, ownerEmail, ownerPhone, petName }) => {
    console.log('Aqui mandando confirmacion de solicitud de adopcion');

    const message = `
    <h1>Solicitud de Adopción</h1>
    <p>Hola!</p>
    <p>Nos complace informarte que <strong>${petName}</strong> puede estar muy cerca de encontrar un hogar amoroso.</p>
    
    <h2>Información del Adoptante interesado:</h2>
    <p><strong>Nombre:</strong> ${adopterName}</p>
    <p><strong>Email:</strong> ${adopterEmail}</p>
    <p><strong>Teléfono:</strong> ${adopterPhone}</p>
    
    <h2>Información del Refugio y/o Rescatista </h2>
    <p><strong>Nombre:</strong> ${ownerName}</p>
    <p><strong>Email:</strong> ${ownerEmail}</p>
    <p><strong>Teléfono:</strong> ${ownerPhone}</p>

    <h2>Información de la Mascota:</h2>
    <p><strong>Nombre:</strong> ${petName}</p>

    <p>Gracias por tu interés y apoyo en la adopción de esta belleza. Te recordamos que es fundamental tratar todos los datos personales con el mayor cuidado y respeto, para seguir cultivando un espacio seguro para la adopcion de callejeritos.</p>
    
    <p>¡Esperamos que ${petName} pronto encuentre un hogar!</p>
`;


  const mailOptions = {
    from: 'gabyr.contact@gmail.com',
    to: [ownerEmail, adopterEmail], // Enviar a ambos
    subject: `Solicitud de Adopción para ${petName}`,
    html: message,
  };
  console.log('Opciones de correo configuradas:', mailOptions);
  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo de solicitud de adopción enviado exitosamente.');
  } catch (error) {
    console.error('Error al enviar el correo de solicitud de adopción:', error);
    throw new Error('Error al enviar el correo');
  }
};

module.exports = { sendAdoptionRequestEmail, };
