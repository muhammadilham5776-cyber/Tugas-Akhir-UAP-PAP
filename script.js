document.getElementById('profile-icon-btn').addEventListener('click', function() {
    alert('Fitur Profil Pengguna segera hadir!');
});

const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const headerTitle = document.querySelector('.header-title-desktop');

function switchPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');

    navItems.forEach(item => {
        if (item.getAttribute('data-target') === pageId) {
            item.classList.add('active');
            if(headerTitle) {
                const pageName = item.querySelector('span').innerText;
                headerTitle.innerText = "Dashboard / " + pageName;
            }
        } else {
            item.classList.remove('active');
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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