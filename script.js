// ==========================================
// KONFIGURASI PIWERCLOUD
// Edit data di sini untuk mengubah produk
// ==========================================

const CONFIG = {
    whatsapp_number: "6285810797798",
    discord_link: "https://discord.gg/kZagau5cHs",
    brand_name: "PiwerCloud"
};

// Data Minecraft Hosting
const mcHosting = [
    {
        name: 'MC Basic',
        price: 10000,
        ram: '2 GB RAM',
        storage: '10 GB SSD',
        cpu: '2 vCPU',
        slots: '20 Slot Player',
        bandwidth: 'Unlimited Bandwidth',
        emoji: '⛏️',
        featured: false
    },
    {
        name: 'MC Standard',
        price: 20000,
        ram: '4 GB RAM',
        storage: '20 GB SSD',
        cpu: '3 vCPU',
        slots: '40 Slot Player',
        bandwidth: 'Unlimited Bandwidth',
        emoji: '⚔️',
        featured: true
    },
    {
        name: 'MC Premium',
        price: 35000,
        ram: '6 GB RAM',
        storage: '30 GB SSD',
        cpu: '4 vCPU',
        slots: '60 Slot Player',
        bandwidth: 'Unlimited Bandwidth',
        emoji: '🏆',
        featured: false
    },
    {
        name: 'MC Ultimate',
        price: 50000,
        ram: '8 GB RAM',
        storage: '50 GB SSD',
        cpu: '6 vCPU',
        slots: '100 Slot Player',
        bandwidth: 'Unlimited Bandwidth',
        emoji: '💎',
        featured: false
    },
    {
        name: 'MC Extreme',
        price: 75000,
        ram: '12 GB RAM',
        storage: '80 GB NVMe SSD',
        cpu: '8 vCPU',
        slots: '150 Slot Player',
        bandwidth: 'Unlimited Bandwidth',
        emoji: '🚀',
        featured: false
    },
    {
        name: 'MC Enterprise',
        price: 100000,
        ram: '16 GB RAM',
        storage: '100 GB NVMe SSD',
        cpu: '10 vCPU',
        slots: '200 Slot Player',
        bandwidth: 'Unlimited Bandwidth',
        emoji: '👑',
        featured: false
    },
    {
        name: 'MC Titan',
        price: 150000,
        ram: '24 GB RAM',
        storage: '150 GB NVMe SSD',
        cpu: '12 vCPU',
        slots: '300 Slot Player',
        bandwidth: 'Unlimited Bandwidth',
        emoji: '🔥',
        featured: false
    },
    {
        name: 'MC Legend',
        price: 200000,
        ram: '32 GB RAM',
        storage: '200 GB NVMe SSD',
        cpu: '16 vCPU',
        slots: '500 Slot Player',
        bandwidth: 'Unlimited Bandwidth',
        emoji: '🌟',
        featured: false
    }
];

// Data Bot Services
const botServices = [
    {
        name: 'Bot WA Basic',
        price: 15000,
        features: ['Fitur Basic', 'Auto Reply', 'Support 1 Bulan', '1 Nomor WA'],
        emoji: '🤖'
    },
    {
        name: 'Bot WA Pro',
        price: 30000,
        features: ['Fitur Lengkap', 'Custom Command', 'Support 2 Bulan', '3 Nomor WA'],
        emoji: '💬'
    },
    {
        name: 'Bot Discord Basic',
        price: 15000,
        features: ['Fitur Basic', 'Music Player', 'Support 1 Bulan', '1 Server'],
        emoji: '🎮'
    },
    {
        name: 'Bot Discord Pro',
        price: 35000,
        features: ['Fitur Lengkap', 'Custom Command', 'Support 2 Bulan', 'Unlimited Server'],
        emoji: '⚡'
    }
];

// ==========================================
// FUNGSI GENERATE PRODUK
// ==========================================

function formatPrice(price) {
    return new Intl.NumberFormat('id-ID').format(price);
}

function createProductCard(product, type) {
    const card = document.createElement('div');
    card.className = 'product-card' + (product.featured ? ' featured' : '');
    
    let featuresHTML = '';
    if (type === 'mc') {
        featuresHTML = `
            <li>${product.ram}</li>
            <li>${product.storage}</li>
            <li>${product.cpu}</li>
            <li>${product.slots}</li>
            <li>${product.bandwidth}</li>
        `;
    } else {
        featuresHTML = product.features.map(f => `<li>${f}</li>`).join('');
    }
    
    const message = `Halo CS ${CONFIG.brand_name}! saya ingin order ${product.name} ${product.price/1000}K dong!`;
    const waLink = `https://wa.me/${CONFIG.whatsapp_number}?text=${encodeURIComponent(message)}`;
    
    card.innerHTML = `
        ${product.featured ? '<div class="best-seller">🔥 BEST SELLER</div>' : ''}
        <div class="product-icon">${product.emoji}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price"><span>Rp</span>${formatPrice(product.price)}<span>/bulan</span></div>
        <ul class="product-features">
            ${featuresHTML}
        </ul>
        <div class="order-buttons">
            <a href="${waLink}" class="order-btn wa-btn" target="_blank">
                <span class="btn-icon">📱</span> Order via WA
            </a>
            <button onclick="copyDiscordMessage('${product.name}', ${product.price})" class="order-btn discord-order-btn">
                <span class="btn-icon">📋</span> Copy Pesan Discord
            </button>
        </div>
    `;
    
    return card;
}

function renderProducts() {
    const mcGrid = document.getElementById('mc-grid');
    const botGrid = document.getElementById('bot-grid');
    
    mcHosting.forEach(product => {
        mcGrid.appendChild(createProductCard(product, 'mc'));
    });
    
    botServices.forEach(product => {
        botGrid.appendChild(createProductCard(product, 'bot'));
    });
}

// ==========================================
// FUNGSI COPY DISCORD MESSAGE
// ==========================================

function copyDiscordMessage(productName, price) {
    const message = `Halo CS ${CONFIG.brand_name}! saya ingin order ${productName} ${price/1000}K dong!`;
    
    navigator.clipboard.writeText(message).then(() => {
        showToast('Pesan berhasil dicopy! Silakan paste di PM Discord admin.');
    }).catch(err => {
        // Fallback untuk browser lama
        const textArea = document.createElement('textarea');
        textArea.value = message;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Pesan berhasil dicopy! Silakan paste di PM Discord admin.');
    });
}

// ==========================================
// TOAST NOTIFICATION
// ==========================================

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==========================================
// PARTICLES ANIMATION
// ==========================================

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        const colors = ['#ff00ff', '#00ffff', '#ffdd00', '#5865F2'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(particle);
    }
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    renderProducts();
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Hover effect untuk product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
});