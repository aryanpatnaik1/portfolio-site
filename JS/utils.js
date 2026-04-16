const Utils = {
    // Advanced Intersection Observer
    initReveal: () => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: stop observing once revealed
                    // observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        // Target both single reveals and containers with children
        document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
            observer.observe(el);
        });
    },

    // Smooth Scroll Helper
setupSmoothScroll: () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
},

    toggleTheme: () => {
        const body = document.body;
        const current = body.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', next);
        
        // Save preference to local storage
        localStorage.setItem('theme', next);
    }
};


const AmbientBackground = {
    canvas: null,
    ctx: null,
    particles: [],
    animationId: null,
    mouse: { x: -1000, y: -1000 }, // Start off-screen
    colors: ['#222222', '#111111', '#333333'], 

    init() {
        this.canvas = document.getElementById('ambient-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Track mouse movement
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        this.createParticles();
    },

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    createParticles() {
        this.particles = [];
        const count = 6; 
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 400 + 200,
                color: this.colors[i % this.colors.length],
                isMouseTarget: i === 0 // The first particle will follow the mouse
            });
        }
    },

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(p => {
            if (p.isMouseTarget) {
                // Smoothly ease the particle toward the mouse position
                p.x += (this.mouse.x - p.x) * 0.05;
                p.y += (this.mouse.y - p.y) * 0.05;
            } else {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -p.size || p.x > this.canvas.width + p.size) p.vx *= -1;
                if (p.y < -p.size || p.y > this.canvas.height + p.size) p.vy *= -1;
            }

            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
            gradient.addColorStop(0, p.color);
            gradient.addColorStop(1, 'transparent');

            this.ctx.fillStyle = gradient;
            this.ctx.globalCompositeOperation = 'screen';
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
        });

        this.animationId = requestAnimationFrame(() => this.draw());
    },

    stop() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
    }
};