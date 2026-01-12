'use client';

import { useState } from 'react';
import { Send, AlertCircle, Check } from 'lucide-react';
import '@/styles/components/inscription-form.css';

export default function InscriptionForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    location: '',
    phone: '',
    status: '',
    field: '',
    experience: '',
    profileLink: '',
    objectives: [],
    interests: [],
    comments: '',
    consent: false,
    discovery: '',
    otherDiscovery: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const statusOptions = [
    'Étudiant', 'Diplômé', 'Travailleur', 'En reconversion'
  ];

  const objectiveOptions = [
    'Perfectionner mes compétences en programmation',
    'Travailler sur des projets collaboratifs',
    'Trouver des mentors et établir des connexions',
    'Participer à des défis de codage',
    'Explorer d\'autres opportunités de développement',
    'Autre'
  ];

  const interestOptions = [
    'Développement et programmation',
    'Systèmes et réseaux',
    'Data science et intelligence artificielle',
    'Aucune idée (je suis encore en exploration)',
    'Autre'
  ];

  const discoveryOptions = [
    'Compte LinkedIn',
    'Ami ou connaissances',
    'Site web Codex',
    'Compte Youtube',
    'Status WhatsApp',
    'Autre'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'consent') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else if (name === 'otherObjective' && value.trim() !== '') {
      const customObjective = `Autre: ${value}`;
      if (!formData.objectives.some(obj => obj.startsWith('Autre:'))) {
        setFormData({
          ...formData,
          objectives: [...formData.objectives.filter(obj => obj !== 'Autre'), customObjective]
        });
      } else {
        setFormData({
          ...formData,
          objectives: [...formData.objectives.filter(obj => !obj.startsWith('Autre:')), customObjective]
        });
      }
    } else if (name === 'otherInterest' && value.trim() !== '') {
      const customInterest = `Autre: ${value}`;
      if (!formData.interests.some(int => int.startsWith('Autre:'))) {
        setFormData({
          ...formData,
          interests: [...formData.interests.filter(int => int !== 'Autre'), customInterest]
        });
      } else {
        setFormData({
          ...formData,
          interests: [...formData.interests.filter(int => !int.startsWith('Autre:')), customInterest]
        });
      }
    } else if (name === 'discovery') {
      setFormData({
        ...formData,
        discovery: value,
        otherDiscovery: value === 'Autre' ? formData.otherDiscovery : ''
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        [category]: [...formData[category], value]
      });
    } else {
      setFormData({
        ...formData,
        [category]: formData[category].filter(item => item !== value)
      });
    }
    
    // Clear error when field is edited
    if (errors[category]) {
      setErrors({
        ...errors,
        [category]: null
      });
    }
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};
    
    if (stepNumber === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Le nom est requis';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = "L'email est requis";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Format d'email invalide";
      }
      
      if (!formData.location.trim()) {
        newErrors.location = 'La ville et le pays sont requis';
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = 'Le numéro de téléphone est requis';
      } else if (!/^\+?[0-9\s]+$/.test(formData.phone)) {
        newErrors.phone = 'Format de téléphone invalide';
      }
      
      if (!formData.discovery) {
        newErrors.discovery = 'Veuillez indiquer comment vous avez découvert Codex';
      }
      
      if (formData.discovery === 'Autre' && !formData.otherDiscovery.trim()) {
        newErrors.otherDiscovery = 'Veuillez préciser comment vous avez découvert Codex';
      }
    }
    
    if (stepNumber === 2) {
      if (!formData.status) {
        newErrors.status = 'Veuillez sélectionner votre statut';
      }
      
      if (!formData.field) {
        newErrors.field = 'Veuillez indiquer votre filière';
      }
      
      if (formData.profileLink && !/^(https?:\/\/)?([\w-]+(\.[\w-]+)+.*)$/.test(formData.profileLink)) {
        newErrors.profileLink = 'Format de lien invalide';
      }
    }
    
    if (stepNumber === 3) {
      if (formData.objectives.length === 0) {
        newErrors.objectives = 'Veuillez sélectionner au moins un objectif';
      }
      
      if (formData.interests.length === 0) {
        newErrors.interests = 'Veuillez sélectionner au moins un centre d\'intérêt';
      }
      
      if (!formData.consent) {
        newErrors.consent = 'Vous devez accepter les conditions pour continuer';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to first error
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    console.log("Données du formulaire soumises:", formData);
    e.preventDefault();
    
    // Vérifier si le formulaire est valide avant de soumettre
    if (!isFormValid()) {
      // Afficher les erreurs pour l'étape actuelle
      validateStep(step);
      
      // Scroll to first error
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Envoyer les données à notre API route
      const response = await fetch('/api/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        // Soumission réussie
        setSubmitSuccess(true);
        
        // Réinitialiser le formulaire
        setFormData({
          fullName: '',
          email: '',
          location: '',
          phone: '',
          status: '',
          field: '',
          experience: '',
          profileLink: '',
          objectives: [],
          interests: [],
          comments: '',
          consent: false,
          discovery: '',
          otherDiscovery: ''
        });
        
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Erreur lors de la soumission
        throw new Error(result.message || 'Erreur lors de l&apos;envoi du formulaire');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour empêcher la soumission du formulaire lors de l'appui sur Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      
      // Si nous sommes sur la dernière étape et que le formulaire est valide, soumettre
      if (step === totalSteps && isFormValid()) {
        handleSubmit(e);
      } 
      // Sinon, passer à l'étape suivante si possible
      else if (step < totalSteps) {
        nextStep();
      }
    }
  };

  // Titres des étapes
  const stepTitles = [
    'Informations personnelles',
    'Parcours',
    'Objectifs'
  ];

  // Ajout d'une fonction pour vérifier si tous les champs requis sont remplis
  const isFormValid = () => {
    // Vérification des champs de l'étape 1
    if (!formData.fullName.trim() || 
        !formData.email.trim() || 
        !/\S+@\S+\.\S+/.test(formData.email) ||
        !formData.location.trim() ||
        !formData.phone.trim() ||
        !/^\+?[0-9\s]+$/.test(formData.phone)) {
      return false;
    }
    
    // Vérification des champs de l'étape 2
    if (!formData.status || !formData.field) {
      return false;
    }
    
    if (formData.profileLink && !/^(https?:\/\/)?([\w-]+(\.[\w-]+)+.*)$/.test(formData.profileLink)) {
      return false;
    }
    
    // Vérification des champs de l'étape 3
    if (formData.objectives.length === 0 || 
        formData.interests.length === 0 || 
        !formData.consent) {
      return false;
    }
    
    // Validation du champ discovery
    if (!formData.discovery || (formData.discovery === 'Autre' && !formData.otherDiscovery.trim())) {
      return false;
    }
    
    return true;
  };

  if (submitSuccess) {
    return (
      <div className="inscription-success">
        <div className="success-icon">✓</div>
        <h2>Inscription réussie !</h2>
        <p>
          Merci beaucoup d&apos;avoir rempli la fiche d&apos;inscription pour rejoindre notre groupe ! 🙏
        </p>
        <div className="success-instructions">
          <div className="instruction-item">
            <span className="instruction-icon">📧</span>
            <p>
              <strong>Vérifiez votre boîte mail :</strong> Un email de confirmation avec les instructions 
              pour rejoindre le groupe WhatsApp a été envoyé à votre adresse.
            </p>
          </div>
          <div className="instruction-item">
            <span className="instruction-icon">📬</span>
            <p>
              <strong>Consultez votre boîte aux lettres</strong> pour finaliser votre inscription.
            </p>
          </div>
          <div className="instruction-item warning">
            <span className="instruction-icon">⚠️</span>
            <p>
              <strong>Pensez à vérifier vos spams :</strong> Si vous ne voyez pas notre message, 
              regardez dans votre dossier spam/courrier indésirable.
            </p>
          </div>
          <div className="instruction-item">
            <span className="instruction-icon">⏳</span>
            <p>
              <strong>Processus de validation :</strong> Vous serez ajouté(e) au groupe une fois que 
              vos informations auront été contrôlées par un membre de l&apos;administration.
            </p>
          </div>
        </div>
        <div className="success-footer">
          <p className="team-message">
            On a hâte de faire ta connaissance et de t&apos;accueillir dans notre communauté ! 🤝
          </p>
          <p className="team-signature">
            <strong>Codex Team 🚀</strong>
          </p>
        </div>
        <button 
          className="btn-primary mt-6"
          onClick={() => window.location.href = '/'}
        >
          Retour à l&apos;accueil
        </button>
      </div>
    );
  }

  return (
    <div className="inscription-form-container">
      <div className="form-header-new">
        <h1>Fiche d&apos;Inscription</h1>
        <p>Bienvenue dans la communauté CODEX ! Merci de remplir ce formulaire pour rejoindre notre espace de co-apprentissage et d&apos;innovation.</p>
        
        <div className="steps-container">
          {[1, 2, 3].map((stepNumber) => (
            <div 
              key={stepNumber} 
              className={`step-item ${step === stepNumber ? 'active' : ''} ${step > stepNumber ? 'completed' : ''}`}
            >
              <div className="step-number">{stepNumber}</div>
              <div className="step-title">{stepTitles[stepNumber-1]}</div>
            </div>
          ))}
        </div>
      </div>

      {submitError && (
        <div className="error-banner">
          <AlertCircle className="mr-2 h-5 w-5" />
          {submitError}
        </div>
      )}

      <form 
        className="inscription-form" 
        onSubmit={handleSubmit} 
        onKeyDown={handleKeyDown}
      >
        {step === 1 && (
          <div className="form-step">
            <h2 className="step-title">Informations personnelles</h2>
            
            <div className="form-group">
              <label htmlFor="fullName">
                Nom et prénom <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'error' : ''}
                placeholder="Votre nom complet"
              />
              {errors.fullName && <div className="error-message">{errors.fullName}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Adresse e-mail <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="votre.email@exemple.com"
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="location">
                Ville et pays de résidence <span className="required">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={errors.location ? 'error' : ''}
                placeholder="Exemple : Paris, France"
              />
              {errors.location && <div className="error-message">{errors.location}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Numéro de téléphone WhatsApp <span className="required">*</span>
              </label>
              <div className="phone-input-container">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`phone-input ${errors.phone ? 'error' : ''}`}
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
              <small>Veuillez indiquer votre numéro avec l&apos;indicatif du pays</small>
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="discovery">
                Comment avez-vous découvert Codex ? <span className="required">*</span>
              </label>
              <div className="select-wrapper">
                <select
                  id="discovery"
                  name="discovery"
                  value={formData.discovery}
                  onChange={handleChange}
                  className={errors.discovery ? 'error' : ''}
                >
                  <option value="">Sélectionnez une option</option>
                  {discoveryOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              {errors.discovery && <div className="error-message">{errors.discovery}</div>}
              
              {formData.discovery === 'Autre' && (
                <div className="mt-3">
                  <input
                    type="text"
                    id="otherDiscovery"
                    name="otherDiscovery"
                    value={formData.otherDiscovery}
                    onChange={handleChange}
                    className={`w-full ${errors.otherDiscovery ? 'error' : ''}`}
                    placeholder="Veuillez préciser comment vous avez découvert Codex"
                  />
                  {errors.otherDiscovery && <div className="error-message">{errors.otherDiscovery}</div>}
                </div>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2 className="step-title">Parcours et expérience</h2>
            
            <div className="form-group">
              <label htmlFor="status">
                Statut actuel <span className="required">*</span>
              </label>
              <div className="select-wrapper">
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className={errors.status ? 'error' : ''}
                >
                  <option value="">Sélectionnez votre statut</option>
                  {statusOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                
              </div>
              {errors.status && <div className="error-message">{errors.status}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="field">
                Filière étudiée <span className="required">*</span>
              </label>
              <input
                type="text"
                id="field"
                name="field"
                value={formData.field}
                onChange={handleChange}
                className={errors.field ? 'error' : ''}
                placeholder="Exemple: Informatique, Génie logiciel, etc."
              />
              {errors.field && <div className="error-message">{errors.field}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="experience">
                Expérience
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Décrivez brièvement votre expérience professionnelle ou académique pertinente..."
                rows="4"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="profileLink">
                Lien vers votre profil professionnel
              </label>
              <input
                type="url"
                id="profileLink"
                name="profileLink"
                value={formData.profileLink}
                onChange={handleChange}
                className={errors.profileLink ? 'error' : ''}
                placeholder="https://linkedin.com/in/votre-profil"
              />
              <small>LinkedIn, GitHub, portfolio personnel, etc.</small>
              {errors.profileLink && <div className="error-message">{errors.profileLink}</div>}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2 className="step-title">Objectifs et centres d&apos;intérêt</h2>
            
            <div className="form-group">
              <h3 className="section-subtitle">
                Objectifs avec la communauté Codex <span className="required">*</span>
              </h3>
              <p className="section-description">Sélectionnez les objectifs que vous souhaitez atteindre en rejoignant notre communauté</p>
              
              <div className="checkbox-cards mobile-responsive">
                {objectiveOptions.map(option => (
                  <div 
                    key={option} 
                    className={`checkbox-card ${formData.objectives.includes(option) ? 'selected' : ''}`}
                    onClick={() => {
                      const isSelected = formData.objectives.includes(option);
                      if (isSelected) {
                        setFormData({
                          ...formData,
                          objectives: formData.objectives.filter(item => item !== option)
                        });
                      } else {
                        setFormData({
                          ...formData,
                          objectives: [...formData.objectives, option]
                        });
                      }
                      
                      // Clear error when field is edited
                      if (errors.objectives) {
                        setErrors({
                          ...errors,
                          objectives: null
                        });
                      }
                    }}
                  >
                    <div className="checkbox-card-inner">
                      <input
                        type="checkbox"
                        id={`objective-${option}`}
                        name="objectives"
                        value={option}
                        checked={formData.objectives.includes(option)}
                        onChange={(e) => handleCheckboxChange(e, 'objectives')}
                        className="sr-only" // Masquer visuellement mais garder accessible
                      />
                      <div className="checkbox-icon">
                        {formData.objectives.includes(option) && (
                          <Check className="w-4 h-4" />
                        )}
                      </div>
                      <label htmlFor={`objective-${option}`} className="option-label">{option}</label>
                    </div>
                  </div>
                ))}
              </div>
              
              {formData.objectives.includes('Autre') && (
                <input
                  type="text"
                  name="otherObjective"
                  onChange={handleChange}
                  placeholder="Précisez votre autre objectif"
                  className="mt-4 w-full"
                />
              )}
              
              {errors.objectives && (
                <div className="error-message mt-2">{errors.objectives}</div>
              )}
            </div>

            <div className="form-group mt-8">
              <h3 className="section-subtitle">
                Types de projets ou centres d&apos;intérêts <span className="required">*</span>
              </h3>
              <p className="section-description">Sélectionnez les domaines qui vous intéressent particulièrement</p>
              
              <div className="checkbox-cards mobile-responsive">
                {interestOptions.map(option => (
                  <div 
                    key={option} 
                    className={`checkbox-card ${formData.interests.includes(option) ? 'selected' : ''}`}
                    onClick={() => {
                      const isSelected = formData.interests.includes(option);
                      if (isSelected) {
                        setFormData({
                          ...formData,
                          interests: formData.interests.filter(item => item !== option)
                        });
                      } else {
                        setFormData({
                          ...formData,
                          interests: [...formData.interests, option]
                        });
                      }
                      
                      // Clear error when field is edited
                      if (errors.interests) {
                        setErrors({
                          ...errors,
                          interests: null
                        });
                      }
                    }}
                  >
                    <div className="checkbox-card-inner">
                      <input
                        type="checkbox"
                        id={`interest-${option}`}
                        name="interests"
                        value={option}
                        checked={formData.interests.includes(option)}
                        onChange={(e) => handleCheckboxChange(e, 'interests')}
                        className="sr-only" // Masquer visuellement mais garder accessible
                      />
                      <div className="checkbox-icon">
                        {formData.interests.includes(option) && (
                          <Check className="w-4 h-4" />
                        )}
                      </div>
                      <label htmlFor={`interest-${option}`} className="option-label">{option}</label>
                    </div>
                  </div>
                ))}
              </div>
              
              {formData.interests.includes('Autre') && (
                <input
                  type="text"
                  name="otherInterest"
                  onChange={handleChange}
                  placeholder="Précisez votre autre centre d&apos;intérêt"
                  className="mt-4 w-full"
                />
              )}
              
              {errors.interests && (
                <div className="error-message mt-2">{errors.interests}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="comments">
                Commentaires ou suggestions
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Avez-vous des commentaires ou des suggestions à partager avec nous ?"
                rows="4"
              ></textarea>
            </div>

            <div className="form-group consent-group">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className={errors.consent ? 'error' : ''}
                />
                <label htmlFor="consent">
                  J&apos;accepte que mes données soient utilisées dans le cadre de ma candidature à la communauté CODEX. 
                  Je comprends que mes informations seront traitées de manière confidentielle et ne seront pas partagées avec des tiers. <span className="required">*</span>
                </label>
              </div>
              {errors.consent && <div className="error-message">{errors.consent}</div>}
            </div>
          </div>
        )}

        <div className="form-navigation">
          {step > 1 && (
            <button 
              type="button" 
              className="btn-secondary"
              onClick={prevStep}
            >
              Précédent
            </button>
          )}
          
          {step < totalSteps ? (
            <button 
              type="button" 
              className="btn-primary"
              onClick={nextStep}
            >
              Suivant
            </button>
          ) : (
            <button 
              type="submit" 
              className="btn-submit"
              disabled={isSubmitting || !isFormValid()}
            >
              {isSubmitting ? (
                <span className="loading-spinner"></span>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer ma candidature
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
} 