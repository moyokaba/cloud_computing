import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Fonction pour envoyer un email de confirmation d'inscription
 * @param {Object} userData - Les données de l'utilisateur
 * @returns {Promise<Object>} - Résultat de l'envoi de l'email
 */
export async function sendWelcomeEmail(userData) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Codex Community <info@codex-cmr.com>', // Remplacez par votre domaine vérifié
      to: [userData.email],
      subject: 'Bienvenue dans la communauté Codex ! 🎉',
      react: EmailTemplate({
        fullName: userData.fullName,
        email: userData.email
      }),
    });

    if (error) {

      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return {
        success: false,
        message: error.message || 'Erreur lors de l\'envoi de l\'email'
      };
    }


    return {
      success: true,
      message: 'Email de bienvenue envoyé avec succès',
      data: data
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return {
      success: false,
      message: error.message || 'Une erreur est survenue lors de l\'envoi de l\'email'
    };
  }
}

/**
 * Fonction pour envoyer un email de notification à l'équipe Codex
 * @param {Object} userData - Les données de l'utilisateur inscrit
 * @returns {Promise<Object>} - Résultat de l'envoi de l'email
 */
export async function sendNotificationEmail(userData) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Codex Community <notifications@resend.dev>', // Remplacez par votre domaine vérifié
      to: ['admin@codex.com'], // Remplacez par l'email de l'équipe
      subject: `Nouvelle inscription - ${userData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb;">Nouvelle inscription à la communauté Codex</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Informations du nouveau membre :</h3>
            <ul style="line-height: 1.6;">
              <li><strong>Nom :</strong> ${userData.fullName}</li>
              <li><strong>Email :</strong> ${userData.email}</li>
              <li><strong>Localisation :</strong> ${userData.location || 'Non spécifiée'}</li>
              <li><strong>Téléphone :</strong> ${userData.phone || 'Non spécifié'}</li>
              <li><strong>Statut :</strong> ${userData.status || 'Non spécifié'}</li>
              <li><strong>Filière :</strong> ${userData.field || 'Non spécifiée'}</li>
              <li><strong>Découverte :</strong> ${userData.discovery || 'Non spécifiée'}</li>
            </ul>
          </div>
          
          ${userData.objectives ? `
            <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <h4>Objectifs :</h4>
              <p>${Array.isArray(userData.objectives) ? userData.objectives.join(', ') : userData.objectives}</p>
            </div>
          ` : ''}
          
          ${userData.interests ? `
            <div style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <h4>Centres d'intérêt :</h4>
              <p>${Array.isArray(userData.interests) ? userData.interests.join(', ') : userData.interests}</p>
            </div>
          ` : ''}
          
          ${userData.comments ? `
            <div style="background-color: #fef7ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <h4>Commentaires :</h4>
              <p>${userData.comments}</p>
            </div>
          ` : ''}
          
          <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
            Inscription reçue le ${new Date().toLocaleString('fr-FR')}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur lors de l\'envoi de l\'email de notification:', error);
      return {
        success: false,
        message: error.message || 'Erreur lors de l\'envoi de l\'email de notification'
      };
    }

    console.log('Email de notification envoyé avec succès:', data);
    return {
      success: true,
      message: 'Email de notification envoyé avec succès',
      data: data
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de notification:', error);
    return {
      success: false,
      message: error.message || 'Une erreur est survenue lors de l\'envoi de l\'email de notification'
    };
  }
} 