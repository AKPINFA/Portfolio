  document.getElementById('year').textContent = new Date().getFullYear();

  document.querySelectorAll('.hero-copy, .datasheet, .about-text, .facts-card, .skills-head, .skills-marquee, .skill-pill, .project-card, .backlog-item, .field, .direct-link').forEach((element) => {
    element.classList.add('reveal');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  // Bascule thème "datasheet" (clair) / "blueprint" (sombre)
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', () => {
    const isBlueprint = document.documentElement.classList.toggle('theme-blueprint');
    toggle.textContent = isBlueprint ? '☀️' : '🌙';
  });

  // Sélecteur de langue global du portfolio
  const langSwitches = document.querySelectorAll('.lang-switch');
  const translations = {
    fr: {
      navAbout: 'Profil',
      navSkills: 'Compétences',
      navProjects: 'Projets',
      navContact: 'Contact',
      heroEyebrow: 'FIG. 00 — PROFIL',
      heroTitle: 'Hey!👋, je suis Exhaucé.',
      heroRole: 'Aspiring Engineer 🚀',
      heroIntro: 'Actuellement étudiant en Génie Électrique et Informatique à l\'Institut National Supérieur de Technologie Industrielle (INSTI) de Lokossa, je me spécialise en Informatique et Télécommunications. Du code qui tourne sur un serveur à celui qui tourne sur un microcontrôleur, des données qui transitent sur un réseau à celles qu\'un modèle d\'IA apprend à interpréter : mon terrain de jeu, c\'est le logiciel, l\'embarqué, les télécommunications, les bases de données et l\'intelligence artificielle. Cinq briques que j\'apprends à assembler pour construire des systèmes complets, du capteur jusqu\'à l\'utilisateur.',
      heroBtnProjects: 'Voir mes projets',
      heroBtnContact: 'Me contacter',
      datasheetName: 'NOM',
      datasheetRole: 'RÔLE',
      datasheetSchool: 'ÉTABLISSEMENT',
      datasheetStatus: 'STATUT',
      datasheetStatusValue: 'Ouvert aux collaborations',
      aboutEyebrow: 'FIG. 01 — À PROPOS',
      aboutTitle: 'Approche & parcours',
      aboutP1: 'Je construis des systèmes en partant du problème, pas de l\'outil : comprendre les contraintes réelles avant d\'écrire une ligne de code, documenter mes choix, et livrer des solutions que je peux défendre techniquement — c\'est le standard que je me fixe, quel que soit le projet.',
      aboutP2: 'Au-delà de ma formation technique, je cultive des passions variées qui forgent ma vision du monde et ma discipline. Je crois que l\'équilibre entre rigueur académique et curiosité intellectuelle est essentiel pour devenir un ingénieur complet.',
      aboutQuickCard: 'FICHE RAPIDE',
      aboutFormation: 'Formation',
      aboutSpeciality: 'Spécialité',
      aboutSchool: 'Établissement',
      aboutGoal: 'Objectif',
      skillsEyebrow: 'FIG. 02 — COMPÉTENCES',
      skillsTitle: 'Stack technique',
      skillsIntro: 'Des technologies que je pratique avec une approche orientée produit et apprentissage continu.',
      projectsEyebrow: 'FIG. 03 — PROJETS',
      projectsTitle: 'Réalisations',
      project1Name: 'DocVoice',
      project1Badge: 'SaaS',
      project1Desc: 'PDF vers audio intelligent, dépôt de fichier et lecteur simulé.',
      project2Name: 'Quiz',
      project2Desc: 'Quiz rapide avec timer, score et feedback instantané.',
      project3Name: 'Dashboard',
      project3Desc: 'Dashboard premium avec KPI, mini-graphes et sidebar.',
      backlogEyebrow: 'FIG. 04 — R&D / BACKLOG',
      backlogTitle: 'Futurs projets',
      backlog2Name: 'Station météo connectée',
      backlog2Status: 'En réflexion',
      backlog2Desc: 'Boîtier Arduino qui collecte et affiche données météo en temps réel sur web.',
      backlog3Name: 'Système de surveillance IoT',
      backlog3Status: 'En réflexion',
      backlog3Desc: 'Réseau de capteurs avec alertes temps réel, authentification et historique BD.',
      backlog5Name: 'IA de recommandations',
      backlog5Status: 'En réflexion',
      backlog5Desc: 'Système de suggestions de cours & groupes d\'étude.',
      backlog6Name: 'Chatbot IA',
      backlog6Status: 'En réflexion',
      backlog6Desc: 'Assistant virtuel pour infos campus & FAQ.',
      backlog8Name: 'SaaS de conversion de PDF en audio',
      backlog8Status: 'En réflexion',
      backlog8Desc: 'Plateforme web qui transforme des fichiers PDF en audio narré avec options de vitesse et de langues.',
      contactEyebrow: 'FIG. 05 — CONTACT',
      contactTitle: 'Laisse moi un petit message 😊',
      contactNameLabel: 'Nom',
      contactNamePlaceholder: 'Ton nom',
      contactEmailLabel: 'Email',
      contactEmailPlaceholder: 'XYZ@exemple.com',
      contactMessageLabel: 'Message',
      contactMessagePlaceholder: 'Ton message',
      contactSubmit: 'Envoyer',
      contactReset: 'Effacer',
      contactGithub: 'GitHub',
      contactEmail: 'Email',
      contactWhatsapp: 'WhatsApp',
      contactWhatsappSub: 'Discuter directement',
      footerText: '© <span id="year"></span> Exhaucé AKPINFA — Portfolio.'
    },
    en: {
      navAbout: 'About',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navContact: 'Contact',
      heroEyebrow: 'FIG. 00 — PROFILE',
      heroTitle: 'Hey!👋, I am Exhaucé.',
      heroRole: 'Aspiring Engineer 🚀',
      heroIntro: 'Currently a student in Electrical and Computer Engineering at the Institut National Supérieur de Technologie Industrielle (INSTI) in Lokossa, I specialize in Computer Science and Telecommunications. From code running on a server to code running on a microcontroller, from data traveling through a network to data learned by an AI model: my playground is software, embedded systems, telecommunications, databases, and artificial intelligence. Five building blocks I am learning to combine to build complete systems, from sensor to user.',
      heroBtnProjects: 'See my projects',
      heroBtnContact: 'Contact me',
      datasheetName: 'NAME',
      datasheetRole: 'ROLE',
      datasheetSchool: 'INSTITUTION',
      datasheetStatus: 'STATUS',
      datasheetStatusValue: 'Open to collaborations',
      aboutEyebrow: 'FIG. 01 — ABOUT',
      aboutTitle: 'Approach & journey',
      aboutP1: 'I build systems starting from the problem, not the tool: understanding the real constraints before writing a line of code, documenting my choices, and delivering solutions I can defend technically — that is the standard I set for myself on every project.',
      aboutP2: 'Beyond my technical training, I cultivate varied passions that shape my worldview and discipline. I believe the balance between academic rigor and intellectual curiosity is essential to becoming a complete engineer.',
      aboutQuickCard: 'QUICK CARD',
      aboutFormation: 'Education',
      aboutSpeciality: 'Specialty',
      aboutSchool: 'Institution',
      aboutGoal: 'Goal',
      skillsEyebrow: 'FIG. 02 — SKILLS',
      skillsTitle: 'Technical stack',
      skillsIntro: 'Technologies I practice with a product-oriented approach and continuous learning.',
      projectsEyebrow: 'FIG. 03 — PROJECTS',
      projectsTitle: 'Featured work',
      project1Name: 'DocVoice',
      project1Badge: 'SaaS',
      project1Desc: 'PDF to smart audio, file drop and simulated player.',
      project2Name: 'Quiz',
      project2Desc: 'Fast quiz with timer, score, and instant feedback.',
      project3Name: 'Dashboard',
      project3Desc: 'Premium dashboard with KPI cards, mini charts, and sidebar.',
      backlogEyebrow: 'FIG. 04 — R&D / BACKLOG',

      backlogTitle: 'Future projects',
      backlog2Name: 'Connected weather station',
      backlog2Status: 'Under consideration',
      backlog2Desc: 'Arduino device that collects and displays weather data in real time on the web.',
      backlog3Name: 'IoT monitoring system',
      backlog3Status: 'Under consideration',
      backlog3Desc: 'Network of sensors with real-time alerts, authentication, and database history.',
      backlog5Name: 'Recommendation AI',
      backlog5Status: 'Under consideration',
      backlog5Desc: 'Course and study group recommendation system.',
      backlog6Name: 'AI chatbot',
      backlog6Status: 'Under consideration',
      backlog6Desc: 'Virtual assistant for campus information and FAQ.',
      backlog8Name: 'PDF-to-audio SaaS',
      backlog8Status: 'Under consideration',
      backlog8Desc: 'Web platform that converts PDF files into narrated audio with speed and language options.',
      contactEyebrow: 'FIG. 05 — CONTACT',
      contactTitle: 'Leave me a little message 😊',
      contactNameLabel: 'Name',
      contactNamePlaceholder: 'Your name',
      contactEmailLabel: 'Email',
      contactEmailPlaceholder: 'name@example.com',
      contactMessageLabel: 'Message',
      contactMessagePlaceholder: 'Your message',
      contactSubmit: 'Send',
      contactReset: 'Clear',
      contactGithub: 'GitHub',
      contactEmail: 'Email',
      contactWhatsapp: 'WhatsApp',
      contactWhatsappSub: 'Talk directly',
      footerText: '© <span id="year"></span> Exhaucé AKPINFA — Portfolio.'
    }
  };

  const updateLanguage = (lang) => {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (translations[lang] && translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });
  };

  langSwitches.forEach((button) => {
    button.addEventListener('click', () => {
      langSwitches.forEach((item) => item.classList.toggle('active', item === button));
      updateLanguage(button.dataset.lang || 'fr');
    });
  });

  updateLanguage('fr');

  // Formulaire de contact -> ouvre le client mail avec le message pré-rempli
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = encodeURIComponent(`Contact portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:aexhauce@gmail.com?subject=${subject}&body=${body}`;
  });