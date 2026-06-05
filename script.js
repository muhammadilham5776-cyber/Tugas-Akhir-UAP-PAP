const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const headerTitle = document.querySelector('.header-title-desktop');

function switchPage(pageId, customTitle) {
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');

    let matched = false;
    navItems.forEach(item => {
        if (item.getAttribute('data-target') === pageId) {
            item.classList.add('active');
            matched = true;
            if(headerTitle) {
                const pageName = item.querySelector('span').innerText;
                headerTitle.innerText = "Dashboard / " + pageName;
            }
        } else {
            item.classList.remove('active');
        }
    });

    if (!matched && headerTitle && customTitle) {
        navItems.forEach(item => item.classList.remove('active'));
        headerTitle.innerText = customTitle;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('profile-icon-btn').addEventListener('click', function() {
    switchPage('page-login', 'Autentikasi / Masuk');
});

document.getElementById('go-to-register').addEventListener('click', function() {
    switchPage('page-register', 'Autentikasi / Daftar');
});

document.getElementById('go-to-login').addEventListener('click', function() {
    switchPage('page-login', 'Autentikasi / Masuk');
});

function setupPasswordToggle(toggleId, inputId) {
    const toggleIcon = document.getElementById(toggleId);
    const passwordInput = document.getElementById(inputId);
    if (toggleIcon && passwordInput) {
        toggleIcon.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.classList.remove('fa-eye');
                toggleIcon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                toggleIcon.classList.remove('fa-eye-slash');
                toggleIcon.classList.add('fa-eye');
            }
        });
    }
}

setupPasswordToggle('login-pass-toggle', 'login-pass-input');
setupPasswordToggle('reg-pass-toggle', 'reg-pass-input');
setupPasswordToggle('reg-confirm-toggle', 'reg-confirm-input');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        switchPage(this.getAttribute('data-target'));
    });
});

document.getElementById('hero-cta-btn').addEventListener('click', () => switchPage('page-learn'));
document.getElementById('home-report-btn').addEventListener('click', () => switchPage('page-report'));

const mandi = document.getElementById('mandi-slide');
const cuci = document.getElementById('cuci-slide');
const piring = document.getElementById('piring-slide');
const tanaman = document.getElementById('tanaman-slide');
const totalHtml = document.getElementById('total-liter');

function hitungTotal() {
    let airMandi = (mandi ? mandi.value : 10) * 12;
    let airCuci = (cuci ? cuci.value : 1) * 40;
    let airPiring = (piring ? piring.value : 2) * 5;
    let airTanaman = (tanaman ? tanaman.value : 0) * 5;
    
    let total = airMandi + airCuci + airPiring + airTanaman;
    if(totalHtml) totalHtml.innerText = total + " Liter";
}

if (mandi && cuci && piring && tanaman) {
    mandi.addEventListener('input', function() {
        document.getElementById('mandi-val').innerText = this.value + " Menit";
        hitungTotal();
    });
    cuci.addEventListener('input', function() {
        document.getElementById('cuci-val').innerText = this.value + " Kali";
        hitungTotal();
    });
    piring.addEventListener('input', function() {
        document.getElementById('piring-val').innerText = this.value + " Kali";
        hitungTotal();
    });
    tanaman.addEventListener('input', function() {
        document.getElementById('tanaman-val').innerText = this.value + " Menit";
        hitungTotal();
    });
}

const reportForm = document.getElementById('report-form');
if (reportForm) {
    reportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Laporan Anda berhasil terkirim ke database WaterWise!');
        this.reset();
    });
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Berhasil masuk! Selamat datang kembali.');
        switchPage('page-home');
    });
}

const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pendaftaran berhasil! Silakan masuk dengan akun baru Anda.');
        switchPage('page-login', 'Autentikasi / Masuk');
    });
}