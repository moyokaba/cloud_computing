import * as React from 'react';

export const EmailTemplate = ({
  fullName,
  email,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1 style={{ color: '#2563eb', fontSize: '28px', marginBottom: '10px' }}>
        Bienvenue dans la communauté Codex !
      </h1>
      <div style={{ width: '50px', height: '3px', backgroundColor: '#2563eb', margin: '0 auto' }}></div>
    </div>
    
    <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
      <h2 style={{ color: '#1e293b', fontSize: '20px', marginBottom: '15px' }}>
        Bonjour {fullName} ! 👋
      </h2>
      <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
        Merci beaucoup d&apos;avoir rempli la fiche d&apos;inscription pour rejoindre notre groupe !
      </p>
      <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.6' }}>
        Nous sommes ravis de vous accueillir dans la communauté <strong>Codex</strong> ! 
        Votre inscription a été enregistrée avec succès.
      </p>
    </div>

    <div style={{ backgroundColor: '#10b981', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '25px', textAlign: 'center' }}>
      <h3 style={{ color: 'white', fontSize: '18px', marginBottom: '15px', margin: '0 0 15px 0' }}>
        🎉 Prochaine étape : Rejoignez notre groupe WhatsApp !
      </h3>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
        Il ne te reste plus qu&apos;à cliquer sur le lien d&apos;invitation ci-dessous pour finaliser ton adhésion :
      </p>
      <a 
        href="https://chat.whatsapp.com/ETsMryzAr1B1Iv70VlIJTv" 
        style={{ 
          display: 'inline-block',
          backgroundColor: 'white', 
          color: '#10b981', 
          padding: '12px 24px', 
          borderRadius: '6px', 
          textDecoration: 'none', 
          fontWeight: 'bold',
          fontSize: '16px',
          margin: '10px 0'
        }}
      >
        📱 Rejoindre le groupe WhatsApp ✅
      </a>
    </div>

    <div style={{ backgroundColor: '#fef3c7', padding: '20px', borderRadius: '8px', marginBottom: '25px', borderLeft: '4px solid #f59e0b' }}>
      <p style={{ color: '#92400e', fontSize: '16px', lineHeight: '1.6', margin: '0', marginBottom: '10px' }}>
        <strong>⏳ Processus de validation :</strong>
      </p>
      <p style={{ color: '#92400e', fontSize: '16px', lineHeight: '1.6', margin: '0' }}>
        Tu seras ajouté(e) au groupe une fois que tes informations auront été contrôlées par un membre de l&apos;administration. 
        Ce processus nous permet de maintenir la qualité et la sécurité de notre communauté.
      </p>
    </div>

    <div style={{ marginBottom: '25px' }}>
      <h3 style={{ color: '#1e293b', fontSize: '18px', marginBottom: '15px' }}>
        Une fois dans le groupe :
      </h3>
      <ul style={{ color: '#475569', fontSize: '16px', lineHeight: '1.6', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '8px' }}>
          <strong>Présente-toi brièvement</strong> : ton nom, ton activité professionnelle 💼
        </li>
        <li style={{ marginBottom: '8px' }}>
          <strong>Partage ta motivation</strong> : ce qui t&apos;a motivé à nous rejoindre
        </li>
        <li style={{ marginBottom: '8px' }}>
          <strong>Participe aux discussions</strong> et aux événements de la communauté
        </li>
        <li style={{ marginBottom: '8px' }}>
          <strong>Collabore sur des projets</strong> passionnants avec d&apos;autres membres
        </li>
      </ul>
    </div>

    <div style={{ backgroundColor: '#eff6ff', padding: '20px', borderRadius: '8px', marginBottom: '25px', borderLeft: '4px solid #2563eb' }}>
      <p style={{ color: '#1e40af', fontSize: '16px', lineHeight: '1.6', margin: '0' }}>
        <strong>💡 Conseil :</strong> Garde un œil sur le groupe WhatsApp pour recevoir 
        les dernières nouvelles, invitations aux événements et opportunités de collaboration !
      </p>
    </div>

    <div style={{ textAlign: 'center', marginBottom: '25px' }}>
      <p style={{ color: '#1e293b', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
        On a hâte de faire ta connaissance et de t&apos;accueillir dans notre communauté ! 🤝
      </p>
      <p style={{ color: '#2563eb', fontSize: '16px', fontWeight: 'bold' }}>
        Codex Team 🚀
      </p>
    </div>

    <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
      <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '10px' }}>
        Cet email a été envoyé à : <strong>{email}</strong>
      </p>
      <p style={{ color: '#64748b', fontSize: '14px', margin: '0' }}>
        © 2024 Codex Community. Tous droits réservés.
      </p>
    </div>
  </div>
); 