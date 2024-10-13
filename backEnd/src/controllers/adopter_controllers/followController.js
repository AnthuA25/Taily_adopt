// const { createFollowUp, updateFollowUp }  = require('../services/followUpService');
// const nodemailer = require('nodemailer');

// // Crear un nuevo seguimiento
// const createFollow = async (req, res) => {
//     const followUpData = {
//         photo_url: req.body.photo_url,
//         follow_up_date: req.body.follow_up_date,
//         next_follow_up_date: req.body.next_follow_up_date,
//         comment: req.body.comment,
//         clinical_comment: req.body.clinical_comment,
//         status: req.body.status,
//         created_by: req.body.created_by,
//         modified_by: req.body.modified_by,
//     };

//     try {
//         const newFollowUp = await createFollowUp(followUpData);
//         await notifyAdopter(newFollowUp); // Llama a la función para enviar el correo
//         return res.status(201).json({ message: 'Follow up created successfully', followUp: newFollowUp });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Failed to create follow up' });
//     }
// };

// // Enviar correo al adoptante
// const notifyAdopter = async (followUp) => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER, // Usa variables de entorno
//             pass: process.env.EMAIL_PASS, // Usa variables de entorno
//         },
//     });

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: 'adoptante_email@gmail.com', // Correo del adoptante
//         subject: 'Formulario de Seguimiento',
//         html: `<h1>Formulario de Seguimiento</h1>
//                <p>Por favor, complete el siguiente formulario:</p>
//                <a href="http://tu-api.com/formulario/seguimiento/${followUp.id}">Completar Formulario</a>`,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully');
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// };

// module.exports = {
//     createFollow,
// };
