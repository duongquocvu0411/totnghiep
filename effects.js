// Ảnh rơi
const container = document.getElementById('decor-container');
const count = 30;
const imageUrls = [

    'test.jpg', // thêm ảnh khác nếu cần
    'test2.jpg', // thêm ảnh khác nếu cần
    'test3.jpg', // thêm ảnh khác nếu cần
];

for (let i = 0; i < count; i++) {
    const item = document.createElement('div');
    item.classList.add('decor-item');
    const img = document.createElement('img');
    img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDuration = 5 + Math.random() * 5 + 's';
    item.style.animationDelay = Math.random() * 5 + 's';
    item.appendChild(img);
    container.appendChild(item);
}

// lật sách
const images = [
  { src: 'test.jpg', caption: 'Ngày nhập học đầu tiên 🏫' },
  { src: 'test2.jpg', caption: 'Buổi thuyết trình cuối kỳ 🎤' },
  { src: 'test3.jpg', caption: 'Khoảnh khắc tốt nghiệp 🎓' }
];

let currentIndex = 0;

const imgEl = document.getElementById('album-image');
const captionEl = document.getElementById('album-caption');
const pageEl = document.getElementById('photo-page');

function updatePage() {
    pageEl.classList.add('flip');
    setTimeout(() => {
        imgEl.src = images[currentIndex].src;
        captionEl.textContent = images[currentIndex].caption;
        pageEl.classList.remove('flip');
    }, 400);
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updatePage();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updatePage();
});


// Pháo hoa 🎆
const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, color, velocity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;
        this.life = 0;
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.x *= 0.98;
        this.velocity.y *= 0.98;
        this.velocity.y += 0.02; // gravity
        this.alpha -= 0.01;
        this.life++;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

let particles = [];

function spawnFirework() {
    const fireworkCount = Math.floor(Math.random() * 10) + 1; // 1 đến 10 quả pháo hoa

    for (let j = 0; j < fireworkCount; j++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        const color = `hsl(${Math.random() * 360}, 100%, 60%)`;

        for (let i = 0; i < 40; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4 + 1;
            particles.push(new Particle(
                x, y, color,
                { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed }
            ));
        }
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
        p.update();
        p.draw();
        if (p.alpha <= 0 || p.life > 100) particles.splice(index, 1);
    });

    requestAnimationFrame(animate);
}

setInterval(spawnFirework, 800); // bắn pháo hoa liên tục mỗi 0.8 giây
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
