const CONFIG = {
    whatsapp_number: "6285810797798",
    brand_name: "PiwerCloud"
};

const mcHosting = [
    { name:'MC Basic', price:10000, ram:'2 GB RAM', storage:'10 GB SSD', cpu:'2 vCPU', slots:'20 Slot Player', bandwidth:'Unlimited Bandwidth', emoji:'⛏️', featured:false },
    { name:'MC Standard', price:20000, ram:'4 GB RAM', storage:'20 GB SSD', cpu:'3 vCPU', slots:'40 Slot Player', bandwidth:'Unlimited Bandwidth', emoji:'⚔️', featured:true },
    { name:'MC Premium', price:35000, ram:'6 GB RAM', storage:'30 GB SSD', cpu:'4 vCPU', slots:'60 Slot Player', bandwidth:'Unlimited Bandwidth', emoji:'🏆', featured:false },
    { name:'MC Ultimate', price:50000, ram:'8 GB RAM', storage:'50 GB SSD', cpu:'6 vCPU', slots:'100 Slot Player', bandwidth:'Unlimited Bandwidth', emoji:'💎', featured:false },
    { name:'MC Extreme', price:75000, ram:'12 GB RAM', storage:'80 GB NVMe SSD', cpu:'8 vCPU', slots:'150 Slot Player', bandwidth:'Unlimited Bandwidth', emoji:'🚀', featured:false },
    { name:'MC Enterprise', price:100000, ram:'16 GB RAM', storage:'100 GB NVMe SSD', cpu:'10 vCPU', slots:'200 Slot Player', bandwidth:'Unlimited Bandwidth', emoji:'👑', featured:false },
    { name:'MC Titan', price:150000, ram:'24 GB RAM', storage:'150 GB NVMe SSD', cpu:'12 vCPU', slots:'300 Slot Player', bandwidth:'Unlimited Bandwidth', emoji:'🔥', featured:false },
    { name:'MC Legend', price:200000, ram:'32 GB RAM', storage:'200 GB NVMe SSD', cpu:'16 vCPU', slots:'500 Slot Player', bandwidth:'Unlimited Bandwidth', emoji:'🌟', featured:false }
];

// SA:MP prices are Rp3.000 lower than the reference poster.
const sampHosting = [
    { name:'SA:MP 1GB', price:12000, ram:'1 GB RAM', storage:'10 GB NVMe SSD', cpu:'1 vCPU Core', database:'1 Database', ports:'1 Extra Port', backups:'1 Backup Slot', emoji:'🎮', featured:false, note:'Cocok untuk server kecil / testing.' },
    { name:'SA:MP 2GB', price:26000, ram:'2 GB RAM', storage:'20 GB NVMe SSD', cpu:'2 vCPU Core', database:'1 Database', ports:'1 Extra Port', backups:'1 Backup Slot', emoji:'🔥', featured:true, note:'Pilihan tepat untuk komunitas kecil.' },
    { name:'SA:MP 4GB', price:42000, ram:'4 GB RAM', storage:'40 GB NVMe SSD', cpu:'3 vCPU Core', database:'2 Database', ports:'2 Extra Port', backups:'2 Backup Slot', emoji:'🚗', featured:false, note:'Untuk server dengan fitur lebih lengkap.' },
    { name:'SA:MP 6GB', price:66000, ram:'6 GB RAM', storage:'60 GB NVMe SSD', cpu:'4 vCPU Core', database:'2 Database', ports:'2 Extra Port', backups:'3 Backup Slot', emoji:'🏙️', featured:false, note:'Cocok untuk medium server.' },
    { name:'SA:MP 8GB', price:86000, ram:'8 GB RAM', storage:'80 GB NVMe SSD', cpu:'5 vCPU Core', database:'2 Database', ports:'2 Extra Port', backups:'4 Backup Slot', emoji:'🛠️', featured:false, note:'Stabil untuk server besar.' },
    { name:'SA:MP 10GB', price:106000, ram:'10 GB RAM', storage:'80 GB NVMe SSD', cpu:'5 vCPU Core', database:'2 Database', ports:'2 Extra Port', backups:'4 Backup Slot', emoji:'⚡', featured:false, note:'Performa lebih maksimal.' },
    { name:'SA:MP 12GB', price:136000, ram:'12 GB RAM', storage:'120 GB NVMe SSD', cpu:'6 vCPU Core', database:'2 Database', ports:'3 Extra Port', backups:'4 Backup Slot', emoji:'🎯', featured:false, note:'Untuk server dengan banyak player.' },
    { name:'SA:MP 14GB', price:156000, ram:'14 GB RAM', storage:'140 GB NVMe SSD', cpu:'6 vCPU Core', database:'2 Database', ports:'3 Extra Port', backups:'4 Backup Slot', emoji:'🏆', featured:false, note:'Stabilitas tinggi untuk jangka panjang.' },
    { name:'SA:MP 16GB', price:176000, ram:'16 GB RAM', storage:'120 GB NVMe SSD', cpu:'6 vCPU Core', database:'2 Database', ports:'4 Extra Port', backups:'4 Backup Slot', emoji:'💥', featured:false, note:'Untuk server besar dan kompleks.' },
    { name:'SA:MP 18GB', price:206000, ram:'18 GB RAM', storage:'120 GB NVMe SSD', cpu:'6 vCPU Core', database:'3 Database', ports:'4 Extra Port', backups:'4 Backup Slot', emoji:'🚀', featured:false, note:'Performa & stabilitas seimbang.' },
    { name:'SA:MP 20GB', price:226000, ram:'20 GB RAM', storage:'150 GB NVMe SSD', cpu:'6 vCPU Core', database:'4 Database', ports:'4 Extra Port', backups:'4 Backup Slot', emoji:'👑', featured:false, note:'Cocok untuk komunitas besar.' },
    { name:'SA:MP 24GB', price:276000, ram:'24 GB RAM', storage:'150 GB NVMe SSD', cpu:'7 vCPU Core', database:'4 Database', ports:'5 Extra Port', backups:'5 Backup Slot', emoji:'🌟', featured:false, note:'Untuk server high load.' },
    { name:'SA:MP 32GB', price:371000, ram:'32 GB RAM', storage:'200 GB NVMe SSD', cpu:'8 vCPU Core', database:'4 Database', ports:'5 Extra Port', backups:'5 Backup Slot', emoji:'💎', featured:false, note:'Performa maksimal, tanpa kompromi.' },
    { name:'SA:MP 48GB', price:563000, ram:'48 GB RAM', storage:'250 GB NVMe SSD', cpu:'10 vCPU Core', database:'5 Database', ports:'5 Extra Port', backups:'5 Backup Slot', emoji:'🔥', featured:false, note:'Untuk server dengan kebutuhan ekstra.' },
    { name:'SA:MP 64GB', price:null, ram:'64 GB RAM', storage:'300 GB NVMe SSD', cpu:'10 vCPU Core', database:'5 Database', ports:'5 Extra Port', backups:'5 Backup Slot', emoji:'☄️', featured:false, outOfStock:true, note:'Saat ini sedang habis.' }
];

const botServices = [
    { name:'Bot WA Basic', price:15000, features:['Fitur Basic','Auto Reply','Support 1 Bulan','1 Nomor WA'], emoji:'🤖' },
    { name:'Bot WA Pro', price:30000, features:['Fitur Lengkap','Custom Command','Support 2 Bulan','3 Nomor WA'], emoji:'💬' },
    { name:'Bot Discord Basic', price:15000, features:['Fitur Basic','Music Player','Support 1 Bulan','1 Server'], emoji:'🎮' },
    { name:'Bot Discord Pro', price:35000, features:['Fitur Lengkap','Custom Command','Support 2 Bulan','Unlimited Server'], emoji:'⚡' }
];

function formatPrice(price) { return new Intl.NumberFormat('id-ID').format(price); }

function createProductCard(product, type) {
    const card = document.createElement('article');
    card.className = 'product-card' + (product.featured ? ' featured' : '') + (product.outOfStock ? ' out-of-stock' : '');

    let featuresHTML = '';
    if (type === 'mc') {
        featuresHTML = [product.ram, product.storage, product.cpu, product.slots, product.bandwidth].map(f => `<li>${f}</li>`).join('');
    } else if (type === 'samp') {
        featuresHTML = [product.ram, product.cpu, product.storage, product.database, product.ports, product.backups].map(f => `<li>${f}</li>`).join('');
    } else {
        featuresHTML = product.features.map(f => `<li>${f}</li>`).join('');
    }

    const displayPrice = product.price === null ? '—' : `Rp ${formatPrice(product.price)}`;
    const priceForMessage = product.price === null ? 'cek stok' : `${product.price / 1000}K`;
    const message = `Halo CS ${CONFIG.brand_name}! saya ingin order ${product.name} ${priceForMessage} dong!`;
    const waLink = `https://wa.me/${CONFIG.whatsapp_number}?text=${encodeURIComponent(message)}`;

    card.innerHTML = `
        <div class="comic-corner"></div>
        ${product.featured ? '<div class="best-seller">POPULAR</div>' : ''}
        ${product.outOfStock ? '<div class="stock-badge">OUT OF STOCK</div>' : ''}
        <div class="product-top"><div class="product-icon">${product.emoji}</div><span class="plan-type">${type === 'samp' ? 'SA:MP' : type === 'mc' ? 'GAME' : 'BOT'}</span></div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price ${product.price === null ? 'muted-price' : ''}">${displayPrice}<span>${product.price === null ? '' : '/bln'}</span></div>
        <ul class="product-features">${featuresHTML}</ul>
        <p class="product-note">${product.note || ''}</p>
        <div class="order-buttons">
            ${product.outOfStock ? '<button class="order-btn disabled" disabled>STOK HABIS</button>' : `<a href="${waLink}" class="order-btn wa-btn" target="_blank" rel="noopener">📱 ORDER WA</a>`}
        </div>
    `;
    return card;
}

function renderProducts() {
    document.getElementById('mc-grid').replaceChildren(...mcHosting.map(p => createProductCard(p, 'mc')));
    document.getElementById('samp-grid').replaceChildren(...sampHosting.map(p => createProductCard(p, 'samp')));
    document.getElementById('bot-grid').replaceChildren(...botServices.map(p => createProductCard(p, 'bot')));
}


function showToast(message) {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-message').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 24; i++) {
        const particle = document.createElement('i');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 4}s`;
        particle.style.animationDuration = `${3 + Math.random() * 4}s`;
        container.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderProducts();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior:'smooth', block:'start' }); }
        });
    });
});
