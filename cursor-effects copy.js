class StarCursor {
    constructor() {
        this.particles = [];
        this.cursor = { x: 0, y: 0 };
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        document.body.appendChild(this.canvas);

        this.resize();
        window.addEventListener('resize', () => this.resize());
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));

        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    onMouseMove(e) {
        this.cursor.x = e.clientX;
        this.cursor.y = e.clientY;

        // Add new particles
        for (let i = 0; i < 3; i++) {
            this.particles.push(new Star(this.cursor.x, this.cursor.y));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
            this.particles[i].draw(this.ctx);

            if (this.particles[i].life <= 0) {
                this.particles.splice(i, 1);
                i--;
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.life = 1.0;
        this.decay = Math.random() * 0.03 + 0.01;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size -= 0.1;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life;
        ctx.beginPath();
        // Draw star shape
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * this.size + this.x,
                -Math.sin((18 + i * 72) / 180 * Math.PI) * this.size + this.y);
            ctx.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * (this.size / 2) + this.x,
                -Math.sin((54 + i * 72) / 180 * Math.PI) * (this.size / 2) + this.y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1.0;
    }
}

// Initialize
new StarCursor();
