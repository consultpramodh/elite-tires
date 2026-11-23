for (const panel of document.querySelectorAll('.request-panel')) {
  const form = panel.querySelector('form');
  const summary = panel.querySelector('.request-summary');
  const contact = form.querySelector('[data-contact]');
  const phone = form.querySelector('[data-phone]');
  const email = form.querySelector('[data-email]');

  function updateContact() {
    const isEmail = contact.value === 'Email';
    for (const [label, visible] of [[phone, !isEmail], [email, isEmail]]) {
      label.hidden = !visible;
      const input = label.querySelector('input');
      input.disabled = !visible;
      input.required = visible;
    }
  }

  contact.addEventListener('change', updateContact);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = summary.querySelector('dl');
    fields.replaceChildren();
    for (const [key, value] of new FormData(form)) {
      if (!value.trim()) continue;
      const term = document.createElement('dt');
      term.textContent = key;
      const description = document.createElement('dd');
      description.textContent = value;
      fields.append(term, description);
    }
    form.hidden = true;
    summary.hidden = false;
    summary.focus();
  });
  summary.querySelector('button').addEventListener('click', () => {
    summary.hidden = true;
    form.hidden = false;
    form.querySelector('input').focus();
  });
  updateContact();
  form.hidden = false;
}
