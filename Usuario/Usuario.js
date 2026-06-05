function avatarImage(label, color = '#d62828') {
  const initial = label.trim().charAt(0).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="60" fill="${color}"/><circle cx="60" cy="48" r="22" fill="#fff7f7" opacity="0.95"/><path d="M24 106c8-28 20-42 36-42s28 14 36 42" fill="#fff7f7" opacity="0.95"/><text x="60" y="113" text-anchor="middle" fill="#3b0505" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="800">${initial}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const defaultUser = {
  name: 'Usuario InkVerse',
  email: 'usuario@inkverse.dev',
  phone: '+591 70000000',
  photo: avatarImage('InkVerse'),
  provider: 'Cuenta local',
};

const state = {
  user: JSON.parse(localStorage.getItem('inkverseUser') || 'null'),
};

if (state.user?.photo?.includes('images.unsplash.com')) {
  state.user.photo = avatarImage(state.user.name || 'Usuario');
  localStorage.setItem('inkverseUser', JSON.stringify(state.user));
}

const savedTheme = localStorage.getItem('inkverseTheme') || 'dark';
document.body.classList.toggle('theme-light', savedTheme === 'light');

const profileTitle = document.getElementById('profileTitle');
const profileNameLabel = document.getElementById('profileNameLabel');
const profileEmailLabel = document.getElementById('profileEmailLabel');
const profilePhoneLabel = document.getElementById('profilePhoneLabel');
const profileDetails = document.getElementById('profileDetails');
const avatarPreview = document.getElementById('avatarPreview');
const profilePreview = document.getElementById('profilePreview');
const toastContainer = document.getElementById('toastContainer');
const profileModal = document.getElementById('profileModal');
const openEditBtn = document.getElementById('openEditBtn');
const closeProfileModalBtn = document.getElementById('closeProfileModalBtn');
const profileForm = document.getElementById('profileForm');
const avatarInput = document.getElementById('avatarInput');
const avatarFeedback = document.getElementById('avatarFeedback');

function notify(type, message) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function renderProfile() {
  state.user = JSON.parse(localStorage.getItem('inkverseUser') || 'null');
  if (state.user?.photo?.includes('images.unsplash.com')) {
    state.user.photo = avatarImage(state.user.name || 'Usuario');
    localStorage.setItem('inkverseUser', JSON.stringify(state.user));
  }
  if (!state.user) {
    profileTitle.textContent = 'Inicia sesión';
    profileNameLabel.textContent = 'Sin sesión activa';
    profileEmailLabel.textContent = 'Vuelve al inicio para iniciar sesión o registrarte.';
    profilePhoneLabel.textContent = '';
    avatarPreview.src = defaultUser.photo;
    profilePreview.src = defaultUser.photo;
    profileDetails.innerHTML = `
      <li><strong>Estado</strong><span>Sin sesión</span></li>
      <li><strong>Acción</strong><span>Inicia sesión desde InkVerse</span></li>
    `;
    openEditBtn.disabled = true;
    openEditBtn.classList.add('disabled');
    return;
  }
  openEditBtn.disabled = false;
  openEditBtn.classList.remove('disabled');
  profileTitle.textContent = `Hola, ${state.user.name}`;
  profileNameLabel.textContent = state.user.name || 'Usuario';
  profileEmailLabel.textContent = state.user.email || 'Sin correo';
  profilePhoneLabel.textContent = state.user.phone || 'Sin teléfono';
  avatarPreview.src = state.user.photo || defaultUser.photo;
  profilePreview.src = state.user.photo || defaultUser.photo;
  document.getElementById('editName').value = state.user.name || '';
  document.getElementById('editEmail').value = state.user.email || '';
  document.getElementById('editPhone').value = state.user.phone || '';
  document.getElementById('currentPassword').value = '';
  document.getElementById('newPassword').value = '';
  document.getElementById('confirmPassword').value = '';
  profileDetails.innerHTML = `
    <li><strong>Nombre</strong><span>${state.user.name || 'Sin nombre'}</span></li>
    <li><strong>Correo</strong><span>${state.user.email || 'Sin correo'}</span></li>
    <li><strong>Teléfono</strong><span>${state.user.phone || 'Sin teléfono'}</span></li>
    <li><strong>Contraseña</strong><span>Protegida</span></li>
    <li><strong>Proveedor</strong><span>${state.user.provider || 'Cuenta local'}</span></li>
  `;
}

function openProfileModal() {
  renderProfile();
  profileModal.classList.remove('hidden');
  profileModal.setAttribute('aria-hidden', 'false');
}

function closeProfileModal() {
  profileModal.classList.add('hidden');
  profileModal.setAttribute('aria-hidden', 'true');
}

function handleAvatarUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 2 * 1024 * 1024) {
    avatarFeedback.textContent = 'Formato o tamaño inválido. Usa JPG, PNG o WEBP hasta 2 MB.';
    notify('error', 'Formato o tamaño inválido. Usa JPG, PNG o WEBP hasta 2 MB.');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const result = String(reader.result);
    avatarFeedback.textContent = 'Vista previa lista para guardar.';
    profilePreview.src = result;
    avatarPreview.src = result;
  };
  reader.readAsDataURL(file);
}

function saveProfile(event) {
  event.preventDefault();
  if (!state.user) {
    notify('error', 'Debes iniciar sesión para editar tu perfil.');
    return;
  }
  const name = document.getElementById('editName').value.trim();
  const email = document.getElementById('editEmail').value.trim();
  const phone = document.getElementById('editPhone').value.trim();
  const currentPassword = document.getElementById('currentPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    notify('error', 'Introduce un correo válido.');
    return;
  }
  if (!/^\+?[0-9\s()-]{7,20}$/.test(phone)) {
    notify('error', 'El teléfono no tiene un formato válido.');
    return;
  }
  if ((currentPassword || newPassword || confirmPassword) && (!newPassword || newPassword.length < 6)) {
    notify('error', 'La nueva contraseña debe tener al menos 6 caracteres.');
    return;
  }
  if (newPassword && newPassword !== confirmPassword) {
    notify('error', 'La confirmación de contraseña no coincide.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('inkverseUsers') || '[]');
  const userIndex = users.findIndex((user) => user.email === state.user.email);
  if (newPassword && userIndex >= 0 && users[userIndex].password !== currentPassword) {
    notify('error', 'La contraseña actual no es correcta.');
    return;
  }
  if (newPassword && userIndex < 0 && !currentPassword) {
    notify('error', 'Escribe tu contraseña actual para cambiarla.');
    return;
  }

  state.user = {
    ...state.user,
    name: name || state.user.name,
    email,
    phone,
    photo: profilePreview.getAttribute('src') || state.user.photo,
  };
  if (userIndex >= 0) {
    users[userIndex] = {
      ...users[userIndex],
      name: state.user.name,
      email: state.user.email,
      password: newPassword || users[userIndex].password,
    };
    localStorage.setItem('inkverseUsers', JSON.stringify(users));
  }
  localStorage.setItem('inkverseUser', JSON.stringify(state.user));
  profileForm.reset();
  renderProfile();
  closeProfileModal();
  notify('success', 'Perfil actualizado correctamente.');
}

function connectOAuth(provider) {
  // Integración futura: sustituir esto por /auth/facebook, /auth/google, /auth/gmail.
  notify('success', `Conectar con ${provider} está listo para integrarse con OAuth en el backend.`);
}

openEditBtn.addEventListener('click', openProfileModal);
closeProfileModalBtn.addEventListener('click', closeProfileModal);
profileForm.addEventListener('submit', saveProfile);
avatarInput.addEventListener('change', handleAvatarUpload);
document.querySelectorAll('[data-oauth]').forEach((btn) => {
  btn.addEventListener('click', () => connectOAuth(btn.dataset.oauth));
});
window.addEventListener('click', (event) => {
  if (event.target === profileModal) closeProfileModal();
});
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeProfileModal();
  }
});

renderProfile();
