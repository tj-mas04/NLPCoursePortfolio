// Theme toggle for a touch of interactivity
const toggleBtn = document.getElementById('toggleTheme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

const lightTheme = {
    '--bg': '#f6f8fb',
    '--card': '#ffffff',
    '--text': '#0b0f19',
    '--muted': '#475569',
    '--brand': '#2563eb',
    '--accent': '#7c3aed',
    '--link': '#16a34a'
};

const darkTheme = {
    '--bg': '#0b0f19',
    '--card': '#121828',
    '--text': '#e8eef9',
    '--muted': '#9db0cc',
    '--brand': '#66d9ef',
    '--accent': '#a78bfa',
    '--link': '#7ee787'
};

let isLight = prefersLight;

function applyTheme(vars) {
    Object.entries(vars).forEach(([k, v]) => {
        document.documentElement.style.setProperty(k, v);
    });
}

applyTheme(isLight ? lightTheme : darkTheme);

toggleBtn.addEventListener('click', () => {
    isLight = !isLight;
    applyTheme(isLight ? lightTheme : darkTheme);
});

// Modal controls
function openModal(id) { const m = document.getElementById(id); if (m) { m.setAttribute('aria-hidden', 'false'); } }
function closeModal(id) { const m = document.getElementById(id); if (m) { m.setAttribute('aria-hidden', 'true'); } }

document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.getAttribute('data-open')));
});
document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close')));
});

// Click outside to close
document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', (e) => { if (e.target === m) { m.setAttribute('aria-hidden', 'true'); } });
});

// Copy link helper
document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
        const sel = btn.getAttribute('data-copy');
        const a = document.querySelector(sel);
        if (a && a.href && a.href !== '#') {
            navigator.clipboard.writeText(a.href);
            btn.textContent = 'Copied';
            setTimeout(() => btn.textContent = 'Copy link', 1200);
        }
    });
});

// Set your repo URL in one place
const RESUMATE_REPO_URL = 'https://github.com/tj-mas04/ResuMate'; // TODO: paste your GitHub repo or live link
['resumateRepoLink', 'resumateRepoLinkModal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.href = RESUMATE_REPO_URL; el.textContent = RESUMATE_REPO_URL === '#' ? 'Add Git Repo Link' : 'Open Project'; }
});

// Resources: check for PDF existence by attempting a HEAD request; if blocked, fall back to enabling all
async function checkPdf(link) {
    try {
        const url = link.getAttribute('href');
        if (!url || url === '#') return setUnavailable(link);
        const res = await fetch(url, { method: 'HEAD', cache: 'no-store' });
        if (res.ok) { setAvailable(link); } else { setUnavailable(link); }
    } catch (e) {
        // If running from file:// or HEAD blocked, optimistically enable
        setAvailable(link, true);
    }
}
function setAvailable(link, fallback = false) {
    link.classList.remove('unavailable');
    link.classList.add('available');
    link.textContent = fallback ? 'Download (enable after publish)' : 'Download';
}
function setUnavailable(link) {
    link.classList.remove('available');
    link.classList.add('unavailable');
    link.textContent = 'PDF not found';
    link.addEventListener('click', (e) => e.preventDefault());
}

document.querySelectorAll('[data-pdf]').forEach(a => {
    a.classList.add('unavailable');
    a.textContent = 'Checking…';
    checkPdf(a);
});

// Basic scroll reveal (no IntersectionObserver needed)
const reveals = document.querySelectorAll('.reveal');
function onScroll() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh - 80) {
            el.style.animationPlayState = 'running';
        }
    });
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);
