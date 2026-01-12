import { saveFormDataToSheet } from '@/utils/googleSheets';
import { sendWelcomeEmail } from '@/utils/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Récupérer les données du formulaire
    const formData = await request.json();

    // Valider les données (vous pouvez ajouter plus de validation ici)
    if (!formData.fullName || !formData.email || !formData.consent) {
      return NextResponse.json(
        { success: false, message: 'Données de formulaire incomplètes' },
        { status: 400 }
      );
    }

    // Enregistrer les données dans Google Sheet
    const result = await saveFormDataToSheet(formData);

    if (result.success) {
      // Si l'enregistrement dans Google Sheets est réussi, envoyer l'email de bienvenue
      let emailResult = { success: false };

      try {
        // Envoyer l'email de bienvenue à l'utilisateur
        emailResult = await sendWelcomeEmail(formData);

      } catch (emailError) {
        console.error('Erreur lors de l\'envoi de l\'email:', emailError);
        // On continue même si l'envoi d'email échoue
      }

      // Préparer la réponse avec instructions pour vérifier les emails
      let responseMessage = 'Inscription enregistrée avec succès ! ';
      
      if (emailResult.success) {
        responseMessage += '📧 Un email de confirmation avec les instructions pour rejoindre le groupe WhatsApp a été envoyé à votre adresse. ';
        responseMessage += '📬 Veuillez consulter votre boîte aux lettres pour finaliser votre inscription. ';
        responseMessage += '⚠️ Si vous ne voyez pas notre message, pensez à vérifier votre dossier spam/courrier indésirable.';
      } else {
        responseMessage += '⚠️ Cependant, l\'email de confirmation n\'a pas pu être envoyé. Veuillez nous contacter directement pour recevoir les instructions d\'adhésion au groupe.';
        console.warn('Échec de l\'envoi de l\'email de bienvenue:', emailResult.message);
      }

      return NextResponse.json(
        { 
          success: true, 
          message: responseMessage,
          emailStatus: {
            welcomeEmailSent: emailResult.success
          },
          instructions: {
            checkEmail: true,
            checkSpam: true,
            emailSent: emailResult.success
          }
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur lors du traitement de l\'inscription:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors du traitement de l\'inscription' },
      { status: 500 }
    );
  }
}