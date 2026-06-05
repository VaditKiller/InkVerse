const categoryVisuals = {
  Anime: {
    scene: `
      <defs>
        <linearGradient id="animeBg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#101032"/><stop offset="0.5" stop-color="#5c1a65"/><stop offset="1" stop-color="#ff4f87"/></linearGradient>
        <radialGradient id="animeGlow" cx="66%" cy="22%" r="55%"><stop offset="0" stop-color="#8ff7ff"/><stop offset="1" stop-color="#8ff7ff" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="640" height="420" fill="url(#animeBg)"/>
      <rect width="640" height="420" fill="url(#animeGlow)"/>
      <path d="M0 318h640v102H0z" fill="#130616" opacity=".72"/>
      <path d="M18 338h604M80 362h92M240 362h126M450 362h104" stroke="#ffdf70" stroke-width="5" opacity=".48"/>
      <path d="M430 76l13 27 30 4-22 20 6 30-27-15-27 15 6-30-22-20 30-4z" fill="#fff6b8"/>
      <path d="M294 96c58 0 98 42 98 106v92H196v-92c0-64 40-106 98-106z" fill="#231024"/>
      <path d="M202 190c28-72 94-102 176-74 26 31 34 71 30 116-36-42-81-62-135-62-30 0-53 7-71 20z" fill="#111526"/>
      <ellipse cx="294" cy="214" rx="80" ry="88" fill="#ffd3c5"/>
      <path d="M214 180c34-62 100-92 178-52-8 43-28 71-66 88-18-28-50-45-112-36z" fill="#202849"/>
      <path d="M246 222c15-15 39-15 54 0M315 222c16-15 40-15 55 0" stroke="#22111b" stroke-width="8" stroke-linecap="round"/>
      <circle cx="276" cy="236" r="13" fill="#6ee7ff"/><circle cx="342" cy="236" r="13" fill="#6ee7ff"/>
      <path d="M274 282c21 14 44 14 65 0" stroke="#a92d4b" stroke-width="8" stroke-linecap="round"/>
      <path d="M164 110c-30 22-49 54-55 96M475 112c32 24 50 56 56 97" stroke="#ff86c8" stroke-width="7" stroke-linecap="round" opacity=".82"/>
    `,
  },
  Terror: {
    scene: `
      <defs>
        <linearGradient id="terrorBg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#07060a"/><stop offset=".62" stop-color="#251015"/><stop offset="1" stop-color="#080303"/></linearGradient>
        <radialGradient id="moon" cx="73%" cy="22%" r="25%"><stop offset="0" stop-color="#f0ead5"/><stop offset=".42" stop-color="#d4cbb8"/><stop offset="1" stop-color="#d4cbb8" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="640" height="420" fill="url(#terrorBg)"/>
      <rect width="640" height="420" fill="url(#moon)" opacity=".78"/>
      <path d="M0 310c92-35 167-27 238-5 81 24 154 15 238-12 68-22 121-26 164-11v138H0z" fill="#090807"/>
      <path d="M82 316c25-85 46-143 62-174 14 34 20 93 19 176M158 318c31-105 56-171 76-199 16 50 23 113 19 201M422 319c20-81 42-139 65-174 14 47 19 104 16 176M514 320c26-102 51-165 77-190 14 48 19 112 15 190" fill="none" stroke="#17120f" stroke-width="16" stroke-linecap="round"/>
      <path d="M166 296c30-67 81-102 148-102s118 35 148 102" fill="#160b0d"/>
      <path d="M241 227c8-35 31-55 71-55s65 20 78 55" fill="#211014"/>
      <path d="M272 251c15-12 30-12 45 0M342 251c15-12 30-12 45 0" stroke="#f0d36f" stroke-width="8" stroke-linecap="round"/>
      <path d="M302 297c30 16 61 16 91 0" stroke="#490909" stroke-width="10" stroke-linecap="round"/>
      <path d="M74 147c36-20 70-17 103 9M453 126c38-18 72-12 102 18" stroke="#251014" stroke-width="8" stroke-linecap="round"/>
      <path d="M44 354h552" stroke="#421516" stroke-width="7" opacity=".9"/>
    `,
  },
  Chibi: {
    scene: `
      <defs>
        <linearGradient id="chibiBg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#ffe0ee"/><stop offset=".55" stop-color="#ffc36f"/><stop offset="1" stop-color="#8fd8ff"/></linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#chibiBg)"/>
      <circle cx="94" cy="76" r="26" fill="#fff8ce"/><circle cx="552" cy="104" r="18" fill="#fff8ce"/><circle cx="500" cy="72" r="10" fill="#fff8ce"/>
      <path d="M0 328c92-20 181-28 268-16s178 11 271-14c38-10 72-13 101-8v130H0z" fill="#fff1f6" opacity=".82"/>
      <ellipse cx="320" cy="232" rx="124" ry="118" fill="#ffd3ca"/>
      <path d="M207 202c11-75 65-121 134-121 57 0 98 30 122 89-43-25-83-30-121-15-43-30-88-14-135 47z" fill="#4a2a65"/>
      <circle cx="252" cy="244" r="28" fill="#39204c"/><circle cx="388" cy="244" r="28" fill="#39204c"/>
      <circle cx="262" cy="234" r="8" fill="#fff"/><circle cx="398" cy="234" r="8" fill="#fff"/>
      <circle cx="222" cy="278" r="17" fill="#ff8eb0" opacity=".72"/><circle cx="420" cy="278" r="17" fill="#ff8eb0" opacity=".72"/>
      <path d="M282 303c25 22 51 22 76 0" stroke="#8d2c4b" stroke-width="9" stroke-linecap="round"/>
      <path d="M214 188 166 146M435 189l50-43" stroke="#4a2a65" stroke-width="13" stroke-linecap="round"/>
      <path d="M129 111l10 22 24 3-17 16 4 24-21-12-21 12 4-24-17-16 24-3zM498 202l8 17 19 3-14 13 4 19-17-9-17 9 4-19-14-13 19-3z" fill="#fff8ce"/>
    `,
  },
  Caricaturesco: {
    scene: `
      <defs>
        <linearGradient id="toonBg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#ffe169"/><stop offset=".5" stop-color="#ff7a59"/><stop offset="1" stop-color="#5b1838"/></linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#toonBg)"/>
      <path d="M69 92c78-32 149-31 214 2M382 99c71-30 132-26 183 10M88 330c102 29 197 29 286 0M401 327c55 14 104 10 147-11" stroke="#fff4b8" stroke-width="11" stroke-linecap="round" opacity=".48"/>
      <path d="M244 98c42-35 101-36 146-2 40 30 58 83 50 144-10 78-58 131-120 131s-110-53-120-131c-8-60 10-112 44-142z" fill="#ffd5ab" stroke="#351018" stroke-width="11"/>
      <path d="M209 173c35-71 102-98 201-80 28 20 44 52 48 96-58-31-114-42-167-33-34 6-61 12-82 17z" fill="#37192a"/>
      <ellipse cx="202" cy="237" rx="25" ry="42" fill="#ffd5ab" stroke="#351018" stroke-width="8"/>
      <ellipse cx="438" cy="237" rx="25" ry="42" fill="#ffd5ab" stroke="#351018" stroke-width="8"/>
      <ellipse cx="276" cy="231" rx="33" ry="38" fill="#fff" stroke="#351018" stroke-width="7"/>
      <ellipse cx="364" cy="231" rx="33" ry="38" fill="#fff" stroke="#351018" stroke-width="7"/>
      <circle cx="286" cy="239" r="10" fill="#351018"/><circle cx="354" cy="239" r="10" fill="#351018"/>
      <path d="M318 248c-9 24-5 38 13 43" stroke="#351018" stroke-width="8" stroke-linecap="round"/>
      <path d="M264 305c35 32 78 32 113 0" stroke="#d62828" stroke-width="12" stroke-linecap="round"/>
      <path d="M232 204c23-20 50-24 80-12M335 192c30-12 57-8 80 12" stroke="#351018" stroke-width="10" stroke-linecap="round"/>
      <path d="M117 162l-39-25M524 178l42-18M136 247l-51 9M505 265l58 18" stroke="#351018" stroke-width="8" stroke-linecap="round" opacity=".55"/>
    `,
  },
  Realista: {
    scene: `
      <defs>
        <linearGradient id="realBg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#30241f"/><stop offset=".58" stop-color="#7e5746"/><stop offset="1" stop-color="#d9b79c"/></linearGradient>
        <radialGradient id="softLight" cx="35%" cy="18%" r="58%"><stop offset="0" stop-color="#fff0d6"/><stop offset="1" stop-color="#fff0d6" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="640" height="420" fill="url(#realBg)"/>
      <rect width="640" height="420" fill="url(#softLight)" opacity=".65"/>
      <rect x="92" y="44" width="456" height="332" rx="10" fill="#211915" stroke="#e6c3a5" stroke-width="10"/>
      <rect x="118" y="70" width="404" height="280" rx="6" fill="#51392f"/>
      <ellipse cx="320" cy="190" rx="88" ry="104" fill="#c99475"/>
      <path d="M238 168c16-70 54-105 114-105 46 0 82 30 108 91-51-28-97-34-138-18-32-6-60 4-84 32z" fill="#2c1e1d"/>
      <path d="M266 195c20-13 41-13 62 0M344 195c20-13 41-13 62 0" stroke="#2a1b18" stroke-width="8" stroke-linecap="round"/>
      <path d="M314 206c-11 31-7 50 13 58" stroke="#6e4032" stroke-width="7" stroke-linecap="round"/>
      <path d="M283 292c27 19 58 19 91 0" stroke="#6e2a2f" stroke-width="8" stroke-linecap="round"/>
      <path d="M214 350c25-65 60-97 106-97s81 32 106 97" fill="#22212a"/>
      <path d="M158 112c65-26 122-33 171-21M160 318c70 23 141 25 212 6M454 110c26 36 41 81 47 135" stroke="#f0d6bb" stroke-width="4" opacity=".28"/>
    `,
  },
  Paisaje: {
    scene: `
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd1a1"/><stop offset=".45" stop-color="#91c8dc"/><stop offset="1" stop-color="#225d63"/></linearGradient>
        <linearGradient id="river" x1="0" x2="1"><stop offset="0" stop-color="#b8edf2"/><stop offset=".55" stop-color="#4d9aad"/><stop offset="1" stop-color="#1c596b"/></linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#sky)"/>
      <circle cx="494" cy="92" r="42" fill="#fff1b2"/>
      <path d="M0 248 126 92l76 92 80-118 137 176 70-88 151 120v146H0z" fill="#54707b"/>
      <path d="M0 274 141 121l83 111 72-84 131 126 75-76 138 104v118H0z" fill="#2d5962"/>
      <path d="M0 306c70-29 141-37 212-24 69 12 138 11 207-4 81-18 155-13 221 14v128H0z" fill="#153f37"/>
      <path d="M214 420c28-59 66-102 116-128 52-27 101-30 148-7-36 37-58 82-67 135z" fill="url(#river)"/>
      <path d="M237 334c47-24 93-31 137-21M271 376c43-20 79-26 109-18" stroke="#e7fbff" stroke-width="5" opacity=".72" stroke-linecap="round"/>
      <path d="M63 324l25-52 25 52h-16l20 37H59l20-37zM128 327l22-46 22 46h-14l17 32h-50l17-32zM506 323l25-53 25 53h-16l20 37h-58l20-37zM564 334l18-39 19 39h-12l15 28h-44l15-28z" fill="#0f3029"/>
      <path d="M27 280c45-13 92-14 142-4M399 260c58-13 112-10 162 8" stroke="#d8f5ef" stroke-width="6" opacity=".38" stroke-linecap="round"/>
    `,
  },
};

function categoryArtworkImage(category) {
  const visual = categoryVisuals[category] || categoryVisuals.Anime;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420" role="img" aria-label="Ilustracion ${category}">${visual.scene}</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function avatarImage(label, color = '#d62828') {
  const initial = label.trim().charAt(0).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="60" fill="${color}"/><circle cx="60" cy="48" r="22" fill="#fff7f7" opacity="0.95"/><path d="M24 106c8-28 20-42 36-42s28 14 36 42" fill="#fff7f7" opacity="0.95"/><text x="60" y="113" text-anchor="middle" fill="#3b0505" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="800">${initial}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const sampleArtworks = [
  { id: 1, title: 'Noche de neón', category: 'Anime', priceBs: 85, priceUsd: 12, rating: 4.8, votes: 28, sellerScore: 4.9, image: categoryArtworkImage('Anime') },
  { id: 2, title: 'Bosque fantasma', category: 'Terror', priceBs: 120, priceUsd: 17, rating: 4.6, votes: 19, sellerScore: 4.7, image: categoryArtworkImage('Terror') },
  { id: 3, title: 'Bebé estrella', category: 'Chibi', priceBs: 55, priceUsd: 8, rating: 4.7, votes: 22, sellerScore: 4.8, image: categoryArtworkImage('Chibi') },
  { id: 4, title: 'Retrato satírico', category: 'Caricaturesco', priceBs: 70, priceUsd: 10, rating: 4.5, votes: 17, sellerScore: 4.6, image: categoryArtworkImage('Caricaturesco') },
  { id: 5, title: 'Atardecer realista', category: 'Realista', priceBs: 95, priceUsd: 13, rating: 4.9, votes: 31, sellerScore: 5, image: categoryArtworkImage('Realista') },
  { id: 6, title: 'Montañas al amanecer', category: 'Paisaje', priceBs: 65, priceUsd: 9, rating: 4.4, votes: 15, sellerScore: 4.5, image: categoryArtworkImage('Paisaje') },
];

function normalizeArtworks(artworks) {
  const sampleImages = new Map(sampleArtworks.map((item) => [item.id, item.image]));
  return artworks.map((item) => (
    sampleImages.has(item.id) && (!item.author || item.author === 'InkVerse')
      ? { ...item, image: sampleImages.get(item.id) }
      : item
  ));
}

const state = {
  currency: 'bs',
  cart: JSON.parse(localStorage.getItem('inkverseCart') || '[]'),
  favorites: JSON.parse(localStorage.getItem('inkverseFavorites') || '[]'),
  user: JSON.parse(localStorage.getItem('inkverseUser') || 'null'),
  artworks: normalizeArtworks(JSON.parse(localStorage.getItem('inkverseArtworks') || 'null') || sampleArtworks),
};

if (state.user?.photo?.includes('images.unsplash.com')) {
  state.user.photo = avatarImage(state.user.name || 'Usuario');
  localStorage.setItem('inkverseUser', JSON.stringify(state.user));
}

const catalogGrid = document.getElementById('catalogGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const favoritesGrid = document.getElementById('favoritesGrid');
const favoritesCount = document.getElementById('favoritesCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const cartCurrencyLabel = document.getElementById('cartCurrencyLabel');
const userMenuBtn = document.getElementById('userMenuBtn');
const userMenu = document.getElementById('userMenu');
const currencyToggleBtn = document.getElementById('currencyToggleBtn');
const switchButtons = document.querySelectorAll('.switch-btn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const uploadFieldset = document.getElementById('uploadFieldset');
const uploadAccessHint = document.getElementById('uploadAccessHint');
const uploadPanel = document.getElementById('subir');
const currentCategory = document.body.dataset.category || null;
const toastContainer = document.getElementById('toastContainer');
const authModal = document.getElementById('login');
const closeAuthModalBtn = document.getElementById('closeAuthModalBtn');
const tabButtons = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const storedReports = JSON.parse(localStorage.getItem('inkverseReports') || '[]');
const reports = Array.isArray(storedReports) ? storedReports : []; 

function notify(type, message) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function updateThemeButtons(theme) {
  const iconPath = theme === 'light'
    ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>'
    : '<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.8 6.8 0 0 0 21 12.8z"/>';
  const label = theme === 'light' ? 'Tema blanco' : 'Tema negro';
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = `<svg class="theme-mode-icon" viewBox="0 0 24 24" aria-hidden="true">${iconPath}</svg>`;
    themeToggleBtn.setAttribute('aria-label', label);
    themeToggleBtn.title = label;
  }
}

function updateUploadAccess() {
  const canUpload = Boolean(state.user);
  if (uploadFieldset) uploadFieldset.disabled = !canUpload;
  if (uploadAccessHint) {
    uploadAccessHint.textContent = canUpload
      ? `Publicarás esta obra como autor: ${state.user.name || state.user.email || 'Usuario'}.`
      : 'Inicia sesión para subir tus dibujos a la galería y registrar el autor.';
  }
}

function openAuthModal(tab = 'login') {
  if (!authModal) return;
  authModal.classList.remove('hidden');
  authModal.setAttribute('aria-hidden', 'false');
  tabButtons.forEach((button) => button.classList.toggle('active', button.dataset.tab === tab));
  authForms.forEach((form) => form.classList.toggle('active-form', form.id === `${tab}Form`));
}

function closeAuthModal() {
  if (!authModal) return;
  authModal.classList.add('hidden');
  authModal.setAttribute('aria-hidden', 'true');
}

function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const users = JSON.parse(localStorage.getItem('inkverseUsers') || '[]');
  const found = users.find((user) => user.email === email && user.password === password);
  if (!found) {
    notify('error', 'Credenciales inválidas.');
    return;
  }
  state.user = { name: found.name, email: found.email, provider: 'Cuenta local' };
  localStorage.setItem('inkverseUser', JSON.stringify(state.user));
  renderProfile();
  closeAuthModal();
  notify('success', 'Sesión iniciada correctamente.');
}

function registerUser(event) {
  event.preventDefault();
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;
  const users = JSON.parse(localStorage.getItem('inkverseUsers') || '[]');
  if (users.some((user) => user.email === email)) {
    notify('error', 'Este email ya está registrado.');
    return;
  }
  users.push({ name, email, password });
  state.user = { name, email, provider: 'Cuenta local' };
  localStorage.setItem('inkverseUsers', JSON.stringify(users));
  localStorage.setItem('inkverseUser', JSON.stringify(state.user));
  renderProfile();
  closeAuthModal();
  notify('success', 'Cuenta creada correctamente.');
}

function requestLoginForUpload(event) {
  if (state.user) return;
  event.preventDefault();
  event.stopPropagation();
  notify('error', 'Debes iniciar sesión para subir una imagen y registrar el autor.');
  openAuthModal('login');
}

function saveReports() {
  localStorage.setItem('inkverseReports', JSON.stringify(reports));
}

function applyTheme(theme) {
  document.body.classList.toggle('theme-light', theme === 'light');
  document.body.classList.toggle('theme-dark', theme === 'dark');
  updateThemeButtons(theme);
  localStorage.setItem('inkverseTheme', theme);
}

function toggleTheme() {
  const isLight = document.body.classList.contains('theme-light');
  applyTheme(isLight ? 'dark' : 'light');
}

function initTheme() {
  const savedTheme = localStorage.getItem('inkverseTheme') || 'dark';
  applyTheme(savedTheme);
}

function visibleArtworks() {
  return currentCategory ? state.artworks.filter((item) => item.category === currentCategory) : state.artworks;
}

function formatCurrency(value) {
  return state.currency === 'bs' ? `Bs ${value.toFixed(0)}` : `$ ${value.toFixed(2)}`;
}

function getPrice(item) {
  return state.currency === 'bs' ? item.priceBs : item.priceUsd;
}

function saveCart() {
  localStorage.setItem('inkverseCart', JSON.stringify(state.cart));
}

function saveFavorites() {
  localStorage.setItem('inkverseFavorites', JSON.stringify(state.favorites));
}

function renderCatalog() {
  if (!catalogGrid) return;
  const artworks = visibleArtworks();
  if (!artworks.length) {
    catalogGrid.innerHTML = '<p class="profile-box">No hay ilustraciones disponibles para esta categoría en este momento.</p>';
    return;
  }
  catalogGrid.innerHTML = artworks.map((item) => `
    <article class="card">
      <img src="${item.image}" alt="${item.title}" />
      <div class="card-body">
        <div class="meta-row"><span>${item.category}</span><span class="meta-rating"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c4.8 0 8 3.2 8 7.4 0 5.2-3.3 8.9-7.4 10.6-4.1-1.7-7.4-5.4-7.4-10.6C4 5.2 7.2 2 12 2z"/></svg> ${Number(item.rating || 0).toFixed(1)}</span></div>
        <h4>${item.title}</h4>
        <p class="art-author">Autor: ${item.author || 'InkVerse'}</p>
        <div class="price-row"><span class="price">${formatCurrency(getPrice(item))}</span><button class="primary-btn" data-add="${item.id}" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 9.3a1 1 0 0 0 1 .7h7.6a1 1 0 0 0 1-.8L19 7H6"/><circle cx="10" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></svg> Añadir</button></div>
        <div class="paint-stars">
          ${[1,2,3,4,5].map((star) => {
            const isSelected = star <= Math.round(item.rating || 0);
            return `<button class="paint-star-btn${isSelected ? ' active' : ''}" data-rate-item="${item.id}" data-rating="${star}" type="button" aria-label="Calificar con ${star} manchas"><span class="paint-star-icon" aria-hidden="true">🫟</span></button>`;
          }).join('')}
          <span class="seller-rating">Vendedor ${Number(item.sellerScore || 0).toFixed(1)}/5</span>
        </div>
        <button class="fav-btn ${state.favorites.includes(item.id) ? 'active' : ''}" data-fav="${item.id}" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 7.5-3.1A4.5 4.5 0 0 1 19 11c0 5.65-7 10-7 10z"/></svg> ${state.favorites.includes(item.id) ? 'Guardado' : 'Favorito'}</button>
        <button class="ghost-btn report-btn" data-report="${item.id}" type="button">Reportar</button>
      </div>
    </article>
  `).join('');
}

function renderFavorites() {
  if (!favoritesGrid || !favoritesCount) return;
  const favoriteItems = visibleArtworks().filter((item) => state.favorites.includes(item.id));
  favoritesCount.textContent = `${favoriteItems.length} obras`;
  if (!favoriteItems.length) {
    favoritesGrid.innerHTML = '<p class="profile-box">Aún no tienes obras favoritas. Marca una ilustración con el corazón para verla aquí.</p>';
    return;
  }
  favoritesGrid.innerHTML = favoriteItems.map((item) => `
    <article class="card">
      <img src="${item.image}" alt="${item.title}" />
      <div class="card-body">
        <div class="meta-row"><span>${item.category}</span><span class="meta-rating"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c4.8 0 8 3.2 8 7.4 0 5.2-3.3 8.9-7.4 10.6-4.1-1.7-7.4-5.4-7.4-10.6C4 5.2 7.2 2 12 2z"/></svg> ${Number(item.rating || 0).toFixed(1)}</span></div>
        <h4>${item.title}</h4>
        <p class="art-author">Autor: ${item.author || 'InkVerse'}</p>
        <div class="price-row"><span class="price">${formatCurrency(getPrice(item))}</span><button class="primary-btn" data-add="${item.id}" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 9.3a1 1 0 0 0 1 .7h7.6a1 1 0 0 0 1-.8L19 7H6"/><circle cx="10" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></svg> Añadir</button></div>
        <button class="ghost-btn report-btn" data-report="${item.id}" type="button">Reportar</button>
      </div>
    </article>
  `).join('');
}

function renderCart() {
  if (!cartItems || !cartSubtotal || !cartTotal || !cartCurrencyLabel) return;
  if (!state.cart.length) {
    cartItems.innerHTML = '<p class="profile-box">Tu carrito está vacío. Añade una ilustración para calcular el total.</p>';
  } else {
    cartItems.innerHTML = state.cart.map((item) => `
      <article class="cart-item">
        <div class="cart-item-top">
          <div>
            <strong>${item.title}</strong>
            <small>${item.category}</small>
          </div>
          <strong>${formatCurrency(getPrice(item) * item.quantity)}</strong>
        </div>
        <div class="qty-row">
          <div class="qty-controls">
            <button class="qty-btn" data-qty="dec" data-id="${item.id}" type="button">−</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" data-qty="inc" data-id="${item.id}" type="button">+</button>
          </div>
          <span class="price">${formatCurrency(getPrice(item))} c/u</span>
        </div>
      </article>
    `).join('');
  }

  const subtotal = state.cart.reduce((sum, item) => sum + getPrice(item) * item.quantity, 0);
  if (cartCount) cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartSubtotal.textContent = formatCurrency(subtotal);
  cartTotal.textContent = formatCurrency(subtotal);
  cartCurrencyLabel.textContent = state.currency === 'bs' ? 'Bs' : '$';
}

function renderProfile() {
  const isLoggedIn = Boolean(state.user);
  if (userMenuBtn) {
    userMenuBtn.innerHTML = isLoggedIn
      ? `${state.user.photo ? `<img src="${state.user.photo}" alt="Avatar de usuario" class="user-avatar-chip" /> ` : ''}<span>${state.user.name || 'Usuario'}</span>`
      : `
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/></svg>
        <span>Iniciar sesión</span>
      `;
  }
  if (userMenu) {
    userMenu.querySelector('[data-user-action="login"]')?.classList.toggle('hidden', isLoggedIn);
    userMenu.querySelector('[data-user-action="register"]')?.classList.toggle('hidden', isLoggedIn);
    userMenu.querySelector('[data-user-action="profile"]')?.classList.toggle('hidden', !isLoggedIn);
    userMenu.querySelector('[data-user-action="logout"]')?.classList.toggle('hidden', !isLoggedIn);
  }
  updateUploadAccess();
}


function toggleFavorite(itemId) {
  const id = Number(itemId);
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter((entry) => entry !== id)
    : [...state.favorites, id];
  saveFavorites();
  renderCatalog();
  renderFavorites();
}

function addToCart(itemId) {
  const item = state.artworks.find((entry) => entry.id === Number(itemId));
  if (!item) return;
  const existing = state.cart.find((entry) => entry.id === item.id);
  if (existing) existing.quantity += 1;
  else state.cart.push({ ...item, quantity: 1 });
  saveCart();
  renderCart();
  notify('success', `Añadiste ${item.title} al carrito.`);
}

function rateArtwork(itemId, rating) {
  const item = state.artworks.find((entry) => entry.id === Number(itemId));
  if (!item) return;
  const total = item.rating * item.votes + rating;
  item.votes += 1;
  item.rating = Number((total / item.votes).toFixed(1));
  localStorage.setItem('inkverseArtworks', JSON.stringify(state.artworks));
  renderCatalog();
  notify('success', `Valoración enviada: ${rating} manchas de pintura para ${item.title}.`);
}

function changeQty(id, mode) {
  const item = state.cart.find((entry) => entry.id === Number(id));
  if (!item) return;
  if (mode === 'inc') item.quantity += 1;
  else if (item.quantity > 1) item.quantity -= 1;
  else state.cart = state.cart.filter((entry) => entry.id !== Number(id));
  saveCart();
  renderCart();
}

function handleCardReport(itemId) {
  const item = state.artworks.find((entry) => entry.id === Number(itemId));
  if (!item) return;
  reports.push({
    id: Date.now(),
    itemId: item.id,
    title: item.title,
    type: 'imagen-reportada',
    detail: 'Reporte directo desde la galería',
    date: new Date().toISOString(),
  });
  saveReports();
  notify('success', `Reporte enviado para ${item.title}. Gracias por avisar.`);
}

function openUserMenu() {
  if (!userMenu) return;
  const expanded = userMenuBtn?.getAttribute('aria-expanded') === 'true';
  userMenu.classList.toggle('hidden', expanded);
  userMenuBtn?.setAttribute('aria-expanded', String(!expanded));
  userMenu?.setAttribute('aria-hidden', String(expanded));
}

function closeUserMenu() {
  if (!userMenu) return;
  userMenu.classList.add('hidden');
  userMenuBtn?.setAttribute('aria-expanded', 'false');
  userMenu?.setAttribute('aria-hidden', 'true');
}

function setCurrency(currency) {
  state.currency = currency;
  document.querySelectorAll('.switch-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.currency === currency));
  if (currencyToggleBtn) currencyToggleBtn.textContent = `Moneda: ${currency === 'bs' ? 'Bs' : '$'}`;
  renderCatalog();
  renderCart();
}

function logoutUser() {
  localStorage.removeItem('inkverseUser');
  state.user = null;
  renderProfile();
}

function loginWithProvider(provider) {
  const providers = {
    Google: { name: 'Usuario Google', email: 'usuario@gmail.com', photo: avatarImage('Google', '#1a73e8') },
    Facebook: { name: 'Usuario Facebook', email: 'usuario@facebook.com', photo: avatarImage('Facebook', '#3b5998') },
    Gmail: { name: 'Usuario Gmail', email: 'usuario@gmail.com', photo: avatarImage('Gmail', '#d93025') },
  };
  const profile = providers[provider];
  if (!profile) return;
  state.user = { ...profile, phone: '+591 70000000', provider };
  localStorage.setItem('inkverseUser', JSON.stringify(state.user));
  renderProfile();
  notify('success', `Sesión iniciada con ${provider}.`);
}

catalogGrid?.addEventListener('click', (event) => {
  const addBtn = event.target.closest('[data-add]');
  const favBtn = event.target.closest('[data-fav]');
  const rateBtn = event.target.closest('[data-rate-item]');
  const reportBtn = event.target.closest('[data-report]');
  if (addBtn) addToCart(addBtn.dataset.add);
  if (favBtn) toggleFavorite(favBtn.dataset.fav);
  if (rateBtn) rateArtwork(rateBtn.dataset.rateItem, Number(rateBtn.dataset.rating));
  if (reportBtn) handleCardReport(reportBtn.dataset.report);
});

favoritesGrid?.addEventListener('click', (event) => {
  const addBtn = event.target.closest('[data-add]');
  const reportBtn = event.target.closest('[data-report]');
  if (addBtn) addToCart(addBtn.dataset.add);
  if (reportBtn) handleCardReport(reportBtn.dataset.report);
});

cartItems?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-qty]');
  if (button) changeQty(button.dataset.id, button.dataset.qty);
});

userMenuBtn?.addEventListener('click', (event) => {
  event.stopPropagation();
  openUserMenu();
});

document.querySelectorAll('[data-user-action]').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.userAction;
    closeUserMenu();
    if (action === 'login') openAuthModal('login');
    if (action === 'register') openAuthModal('register');
    if (action === 'profile') window.location.href = 'Usuario/Usuario.html';
    if (action === 'logout') logoutUser();
  });
});

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((tabButton) => tabButton.classList.toggle('active', tabButton === button));
    authForms.forEach((form) => form.classList.toggle('active-form', form.id === `${button.dataset.tab}Form`));
  });
});

if (loginForm) loginForm.addEventListener('submit', loginUser);
if (registerForm) registerForm.addEventListener('submit', registerUser);
if (closeAuthModalBtn) closeAuthModalBtn.addEventListener('click', closeAuthModal);

switchButtons.forEach((button) => {
  button.addEventListener('click', () => setCurrency(button.dataset.currency));
});

currencyToggleBtn?.addEventListener('click', () => {
  setCurrency(state.currency === 'bs' ? 'usd' : 'bs');
});

window.addEventListener('click', (event) => {
  if (userMenu && !userMenu.contains(event.target) && event.target !== userMenuBtn) closeUserMenu();
  if (authModal && event.target === authModal) closeAuthModal();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeUserMenu();
    closeAuthModal();
  }
});

const previewBox = document.getElementById('previewBox');
const uploadForm = document.getElementById('uploadForm');
const artImageInput = document.getElementById('artImage');

if (uploadPanel) uploadPanel.addEventListener('click', requestLoginForUpload, true);

artImageInput?.addEventListener('change', (event) => {
  if (!state.user) {
    requestLoginForUpload(event);
    artImageInput.value = '';
    return;
  }
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    previewBox.innerHTML = `<img src="${reader.result}" alt="Vista previa de la ilustración" />`;
  };
  reader.readAsDataURL(file);
});

uploadForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!state.user) {
    notify('error', 'Debes iniciar sesión para subir tu obra.');
    openAuthModal('login');
    return;
  }
  const title = document.getElementById('artTitle').value.trim();
  const category = document.getElementById('artCategory').value;
  const price = Number(document.getElementById('artPrice').value);
  const currency = document.getElementById('artCurrency').value;
  const image = previewBox.querySelector('img')?.getAttribute('src');

  if (!image) {
    notify('error', 'Sube una imagen para ver la vista previa.');
    return;
  }

  const newArtwork = {
    id: Date.now(),
    title,
    category,
    priceBs: currency === 'bs' ? price : Math.round(price * 7),
    priceUsd: currency === 'usd' ? price : Number((price / 7).toFixed(2)),
    image,
    author: state.user.name || state.user.email || 'Usuario',
    authorEmail: state.user.email || '',
    rating: 5,
    votes: 0,
    sellerScore: 5,
  };

  state.artworks = [newArtwork, ...state.artworks];
  localStorage.setItem('inkverseArtworks', JSON.stringify(state.artworks));
  uploadForm.reset();
  previewBox.innerHTML = 'Vista previa de tu imagen';
  renderCatalog();
  notify('success', 'Tu ilustración se añadió a la galería.');
});

if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

initTheme();
setCurrency('bs');
renderCatalog();
renderFavorites();
renderCart();
renderProfile();
