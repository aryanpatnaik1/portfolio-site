function renderHero() {
    const target = document.getElementById('hero-target');
    target.classList.add('reveal');
    target.innerHTML = `
        <h1>${CONFIG.profile.firstName}<br>${CONFIG.profile.lastName}</h1>
        <p class="reveal">${CONFIG.profile.title}</p>
        <div class="reveal">
            <a href="${CONFIG.profile.resume}" class="btn-outline" download>Download Resume</a>
        </div>
    `;
}

function renderProjects() {
    const target = document.getElementById('projects-target');
    const section = document.getElementById('projects');

    if (!CONFIG.projects || CONFIG.projects.length === 0) {
        if (section) section.style.display = 'none';
        if (target) target.innerHTML = '';
        return;
    }

    if (section) section.style.display = '';
    target.classList.add('stagger-children');
    target.innerHTML = CONFIG.projects.map(p => {
        const content = `
            <div class="project-header">
                <h3>${p.repo ? `<a class="project-title-link" href="${p.repo}" target="_blank" rel="noopener noreferrer">${p.title}</a>` : p.title}</h3>
                <div class="project-actions">
                    ${p.repo ? `<a class="project-repo-link" href="${p.repo}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i> View repo <span aria-hidden="true">↗</span></a>` : ''}
                    ${p.details ? `<button class="project-more-toggle" type="button" aria-expanded="false">More</button>` : ''}
                </div>
            </div>
            <p>${p.desc}</p>
            ${p.details ? `<div class="project-more-panel"><p>${p.details}</p></div>` : ''}
            <div class="tech-list">
                ${p.stack.map(s => `<span>// ${s}</span>`).join('')}
            </div>
        `;

        return p.link && !p.repo
            ? `<a href="${p.link}" class="project-card">${content}</a>`
            : `<article class="project-card">${content}</article>`;
    }).join('');

    target.querySelectorAll('.project-more-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.project-card');
            const isExpanded = card.classList.toggle('expanded');
            button.setAttribute('aria-expanded', String(isExpanded));
            button.textContent = isExpanded ? 'Less' : 'More';
        });
    });
}

function renderAbout() {
    const target = document.getElementById('about-target');
    target.classList.add('reveal');
    target.innerHTML = `
        <p style="font-size: 1.5rem; max-width: 800px;">${CONFIG.profile.bio}</p>
        <div style="margin-top: 40px;">
            <a href="mailto:${CONFIG.profile.email}" class="btn-outline">Say Hello</a>
        </div>
    `;
}

function renderContact() {
    const target = document.getElementById('contact-target');
    if (!target) return;

    const socialHTML = CONFIG.socials.map(s => `
        <a href="${s.url}" class="icon-btn" target="_blank" style="margin-right: 15px; text-decoration: none; display: inline-block;">
            <i class="${s.icon}"></i> ${s.name}
        </a>
    `).join('');

    target.innerHTML = `
        <div class="reveal">
            <p style="font-size: 1.5rem; margin-bottom: 30px; max-width: 600px;">
                I'm currently looking for new opportunities. Feel free to reach out!
            </p>
            <div style="margin-bottom: 40px;">
                <a href="mailto:${CONFIG.profile.email}" class="btn-outline">${CONFIG.profile.email}</a>
            </div>
            <div class="social-links-container">
                ${socialHTML}
            </div>
        </div>
    `;
}

// SINGLE DOMContentLoaded listener - all initialization in one place
document.addEventListener('DOMContentLoaded', () => {
    // 1. Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);

    // 2. Render all content
    renderHero();
    renderProjects();
    renderAbout();
    renderContact();

    // 3. Initialize Utilities
    Utils.setupSmoothScroll();
    Utils.initReveal();

    // 4. Setup theme toggle
    document.getElementById('theme-toggle').addEventListener('click', Utils.toggleTheme);

    // 5. Initialize Ambient Background System
    AmbientBackground.init();
    
    const ambientBtn = document.getElementById('ambient-toggle');
    const canvasEl = document.getElementById('ambient-canvas');

    // 6. Check for saved ambient preference or default to true
    const isAmbientOn = localStorage.getItem('ambient') !== 'false';
    if (isAmbientOn) {
        canvasEl.classList.add('active');
        ambientBtn.classList.add('active');
        AmbientBackground.draw();
    }
    localStorage.setItem('ambient', isAmbientOn);

    // 7. Setup ambient toggle
    ambientBtn.addEventListener('click', () => {
        const isActive = canvasEl.classList.toggle('active');
        ambientBtn.classList.toggle('active');
        localStorage.setItem('ambient', isActive);

        if (isActive) {
            AmbientBackground.draw();
        } else {
            setTimeout(() => {
                if (!canvasEl.classList.contains('active')) AmbientBackground.stop();
            }, 1000);
        }
    });
});