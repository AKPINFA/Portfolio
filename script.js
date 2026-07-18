  document.getElementById('year').textContent = new Date().getFullYear();

  // Bascule thème "datasheet" (clair) / "blueprint" (sombre)
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', () => {
    const isBlueprint = document.documentElement.classList.toggle('theme-blueprint');
    toggle.textContent = isBlueprint ? '☀️' : '🌙';
  });

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
