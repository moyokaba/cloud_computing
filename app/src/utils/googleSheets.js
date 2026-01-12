import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

/**
 * Fonction pour envoyer les données du formulaire d'inscription vers Google Sheets
 * @param {Object} formData - Les données du formulaire à enregistrer
 * @returns {Promise<Object>} - Résultat de l'opération
 */
export async function saveFormDataToSheet(formData) {
  
  const teilprivatekey="-----BEGIN PRIVATE KEY-----\n"+process.env.GOOGLE_SERVICE_TEILKKEY+"\n/IKy8ZaMgZ3AYIUvimualjTZtufWp7ZCLhreM8dQB5FcLflGnFAtBiT607ZZGsWE\nHlcthf1gMNwqEX4ue8U0lRpexxof3UoR4qPiDA/66brkqg3TEFQn+VaFJLa+yC5C\n6eV4dJgx5UNIN6weL9goHf/6RagqqQF1gHwcGctHmXfrsIGlrUGmZGIHa/6qsq+j\nOHWFEHo05gk+imKtdIyHrfrzpx8wUDJwF18BBgyeF7YsMqiD/fCTVfkwoIHui1UT\npEm8HvDh7t3KxZfjxTlCLPJtHJVuBaBtGbLLA/m1eGrJn5jxwUadnPIhz3unmEqz\nHKjLZwprAgMBAAECggEAaW/BXGTwRM2+AJIoX0DEbLh+7r2khvQ8SDQC/KuN4765\n6+VjgaVqn+uG8PweNTxoU9GLNp3Cd+y7Mq2RU548TZZGJuaaBMQkvOLV/rYEnSui\n+k5q1kEL1P/D92M3mIlgkol2fnjg1d6ytAc5e46Hgkwm00pJ+6cKnxEa3CGQrERM\n88i6JF75eyojO83TZhc/sF1L4b9EF+i4/nGveOSMOtU74o9PAOZUDyojeq1iap0Y\nUd2xu9sSpsASNHGat80FwBfSwCiN9PrFGoEnMrAuORzyr/m1tfl3lSP96gdd2xBa\nEqjba1o4VsjixU4qxHJ/v1bI4EZ7jBuVytfl4HpowQKBgQDvBoTW4GtANA2OOSeL\nPJyA+MSyyjowgkSVmh+Mze0htlD6ZIpH89vF8M+UEWj8VBD5CjmOOVX0+H5saQbW\nKOMCQsk2Jai64slRi71yQBJjbK0nDbPdMBe3OhiL09zPGD8WTZT/B2jioVRMB/2C\nm+AGXKwTbR4+wnhdR3LgNXbudQKBgQDqBaK+1lJn5NMZHnug1FpWzBX36JdeMWST\nFJpiDnfRNsAiaTnLMmXEy9uYhDPtbr17+wbo28ojaymRWff0eTiceuxTdbte7if+\n00wtx6FNEz9qmsZuWez+Ua8XBgE3c+dlgkFNNqPuuXdCtp2/Z7YWFFUePnGtK2W5\nbiSQf+q5XwKBgB5trwWHxj+DIOKlJgKUsbu9b5TvJ587Ri3hU/jh0jlDc2Wc3Pmx\n8p1tPY+086+DqDF7+r2/UNEBvV5htGwZAmUsSV8qRiOccVJ/PpvHyk9760MYfHhB\nAhPiQnOygd6fUJCvSbN5pwGK1idjsQMqgsdsjr9eWcZVjWsaiGZAiCZtAoGAM8uF\nhqlW2cnKcw/NGv6E9Br9bb4b6mwSL39q3/MFz9dHVRZnBTMlVRYthycTeyR8ablY\ngSdMKOSp8ZKxD3nY7sFCFwLCsrMRRRQtEyDQ8YcmDQkui/P5QRyBHR5mHIjZmRzo\nKRfD1q1T2P8kEN36bg6X/Daj4Ejvncfj7dtx7w8CgYEA2pgIelaSuq6ma1/cGUml\n82IevplRYml9HCBW/eyGp6h3+PbCV60pyQM2e1XKNTtcVZ7JsIyubivoPgL9PiCY\nrsNL6CyXTEpDjm1hvgbi3NaC59gtE03cSDA9OQt8/lJu5lcAwAqB2ppYbicX/Jmq\n8Yoo33FFZm6bCY9wSjrzDQM=\n-----END PRIVATE KEY-----\n"

  try {
    // Créer l'objet d'authentification JWT
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: teilprivatekey.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialiser le document Google Sheets a base de l'authentification
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

    // Charger les informations du document
    await doc.loadInfo();

    // Utiliser la feuille "data"
    let sheet = doc.sheetsByTitle['data'];
    
    if (!sheet) {
      // Si la feuille n'existe pas, on la crée
      sheet = await doc.addSheet({ title: 'data' });
    }

    // Définir les en-têtes souhaités
    const headers = [
      "Zeitstempel",
      "Nom(s) et Prénom(s)",
      "Adresse e-mail",
      "Ville et pays de résidence",
      "Numéro de téléphone (WhatsApp) :",
      "Statut actuel",
      "Filière étudiée",
      "Si oui, veuillez décrire votre expérience",
      "Lien vers votre profil professionnel",
      "Qu’espérez-vous atteindre avec la communauté Codex ?",
      "Quels types de projets vous intéressent ?/ Quels sont vos centres d’intérêts ?",
      "Commentaires ou suggestions",
      "Protection des données",
      "Comment avez-vous découvert Codex ?"
    ];

    // Charger les en-têtes actuels pour vérifier s'ils existent
    let headersLoaded = false;
    try {
      await sheet.loadHeaderRow();
      headersLoaded = true;
    } catch (e) {
      // Ignore error
    }

    // Si les en-têtes ne sont pas chargés OU sont vides, on les définit
    if (!headersLoaded || !sheet.headerValues || sheet.headerValues.length === 0) {
      await sheet.setHeaderRow(headers);
      // Recharger les en-têtes pour s'assurer que l'objet sheet est à jour
      await sheet.loadHeaderRow();
    }

    // Préparer les données pour l'insertion
    // Convertir les tableaux en chaînes de caractères
    const objectives = Array.isArray(formData.objectives) 
      ? formData.objectives.join(', ') 
      : formData.objectives;
      
    const interests = Array.isArray(formData.interests) 
      ? formData.interests.join(', ') 
      : formData.interests;
    
    // Créer un format de date et heure lisible
    const now = new Date();
    const zeitstempel = now.toLocaleString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Créer un objet avec les données à insérer en utilisant les nouveaux noms de colonnes
    const rowData = {
      "Nom(s) et Prénom(s)": formData.fullName,
      "Adresse e-mail": formData.email,
      "Ville et pays de résidence": formData.location,
      "Numéro de téléphone (WhatsApp) :": formData.phone,
      "Comment avez-vous découvert Codex ?": formData.discovery === 'Autre' ? `Autre: ${formData.otherDiscovery}` : formData.discovery,
      "Statut actuel": formData.status,
      "Filière étudiée": formData.field,
      "Si oui, veuillez décrire votre expérience": formData.experience || '',
      "Lien vers votre profil professionnel": formData.profileLink || '',
      "Qu’espérez-vous atteindre avec la communauté Codex ?": objectives,
      "Quels types de projets vous intéressent ?/ Quels sont vos centres d’intérêts ?": interests,
      "Commentaires ou suggestions": formData.comments || '',
      "Protection des données": formData.consent ? "Oui" : "Non",
      "Zeitstempel": zeitstempel
    };

    // Ajouter les données à la feuille
    try {
      await sheet.addRow(rowData);
    } catch (err) {
      console.error("Erreur lors de l'ajout de la ligne:", err);
      // Fallback: Si addRow échoue, essayer de recharger et réessayer
      await doc.loadInfo();
      const reloadedSheet = doc.sheetsByTitle['data'];
      await reloadedSheet.addRow(rowData);
    }

    return {
      success: true,
      message: "Données enregistrées avec succès"
    };
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des données:', error);
    return {
      success: false,
      message: error.message || "Une erreur est survenue lors de l'enregistrement des données"
    };
  }
}