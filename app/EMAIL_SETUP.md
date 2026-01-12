# Configuration de l'envoi d'emails avec Resend

Ce document explique comment configurer et utiliser l'envoi automatique d'emails pour les inscriptions à la communauté Codex.

## 📧 Fonctionnalités

L'application envoie automatiquement deux types d'emails après une inscription réussie :

1. **Email de bienvenue** : Envoyé à l'utilisateur qui s'inscrit
2. **Email de notification** : Envoyé à l'équipe Codex pour les informer de la nouvelle inscription

## 🔧 Configuration

### 1. Clé API Resend

1. Créez un compte sur [Resend.com](https://resend.com)
2. Générez une clé API dans votre dashboard
3. Ajoutez la clé dans votre fichier `.env` :

```env
RESEND_API_KEY=re_votre_cle_api_ici
```

### 2. Domaine vérifié (Recommandé)

Pour une meilleure délivrabilité, configurez un domaine vérifié dans Resend :

1. Ajoutez votre domaine dans le dashboard Resend
2. Configurez les enregistrements DNS requis
3. Modifiez les adresses `from` dans `src/utils/sendEmail.js` :

```javascript
// Remplacez ces adresses par vos domaines vérifiés
from: 'Codex Community <noreply@votredomaine.com>'
from: 'Codex Community <notifications@votredomaine.com>'
```

### 3. Email de l'équipe

Modifiez l'adresse email de destination pour les notifications dans `src/utils/sendEmail.js` :

```javascript
to: ['admin@votredomaine.com'], // Remplacez par l'email de votre équipe
```

## 📁 Structure des fichiers

```
src/
├── components/
│   └── EmailTemplate.jsx          # Template React pour l'email de bienvenue
├── utils/
│   ├── sendEmail.js              # Fonctions d'envoi d'emails
│   └── googleSheets.js           # Fonctions Google Sheets (existant)
└── app/
    └── api/
        └── inscription/
            └── route.js          # Route API modifiée avec envoi d'emails
```

## 🎨 Personnalisation du template

Le template d'email se trouve dans `src/components/EmailTemplate.jsx`. Vous pouvez :

- Modifier le design et les couleurs
- Ajouter votre logo
- Personnaliser le contenu
- Ajouter des liens vers vos réseaux sociaux

### Exemple de personnalisation :

```jsx
// Ajouter un logo
<img 
  src="https://votredomaine.com/logo.png" 
  alt="Logo Codex" 
  style={{ maxWidth: '150px', marginBottom: '20px' }}
/>

// Personnaliser les couleurs
style={{ color: '#votre-couleur-principale' }}
```

## 🔄 Flux de traitement

1. L'utilisateur remplit le formulaire d'inscription
2. Les données sont validées
3. Les données sont sauvegardées dans Google Sheets
4. Si la sauvegarde réussit :
   - Un email de bienvenue est envoyé à l'utilisateur
   - Un email de notification est envoyé à l'équipe
5. La réponse API inclut le statut de l'envoi des emails

## 📊 Gestion des erreurs

L'application est conçue pour être résiliente :

- Si l'envoi d'email échoue, l'inscription reste valide
- Les erreurs d'email sont loggées mais n'interrompent pas le processus
- Le statut de l'envoi est retourné dans la réponse API

## 🧪 Test

Pour tester l'envoi d'emails en développement :

1. Configurez votre clé API Resend
2. Utilisez des adresses email de test
3. Vérifiez les logs de la console pour les erreurs
4. Consultez le dashboard Resend pour voir les emails envoyés

## 📈 Monitoring

Surveillez vos emails via :

- **Dashboard Resend** : Statistiques d'envoi, taux de délivrabilité
- **Logs de l'application** : Erreurs et succès d'envoi
- **Webhooks Resend** : Événements en temps réel (optionnel)

## 🔒 Sécurité

- Gardez votre clé API Resend secrète
- Ne commitez jamais la clé dans votre code
- Utilisez des variables d'environnement
- Limitez les permissions de la clé API si possible

## 🆘 Dépannage

### Problèmes courants :

1. **Email non reçu** :
   - Vérifiez les spams
   - Confirmez la clé API
   - Vérifiez les logs d'erreur

2. **Erreur de domaine** :
   - Utilisez un domaine vérifié
   - Ou utilisez les domaines de test Resend

3. **Limite de taux** :
   - Vérifiez votre plan Resend
   - Implémentez une logique de retry si nécessaire

## 📚 Ressources

- [Documentation Resend](https://resend.com/docs)
- [Guide Next.js + Resend](https://resend.com/docs/send-with-nextjs)
- [Templates React Email](https://react.email/) 