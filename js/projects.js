document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    //         PROJECTS DATA DATABASE
    // =========================================
    const projects = {
        ai: {
            title: "AI Applications",
            featured: [
                {
                    name: "Outlast AI",
                    image: "assets/outlast_ai.jpg",
                    description: "Java conversational AI assistant powered by LangChain4j and the Gemini API, featuring persistent user chat memory buffer integration.",
                    tech: ["Java", "LangChain4j", "Gemini API", "Maven"],
                    github: "https://github.com",
                    demo: "https://example.com/demo"
                },
                {
                    name: "MindClash Debate Platform",
                    image: "assets/mindclash.jpg",
                    description: "A semantic QA environment leveraging RAG pipelines and vector database indexing to parse and compare diverse document perspectives.",
                    tech: ["Java", "LangChain4j", "Vector DB", "Gemini API"],
                    github: "https://github.com",
                    demo: "assets/mindclash.jpg" // Snapshot
                }
            ],
            others: [
                {
                    name: "AI Chatbot",
                    image: "assets/outlast_ai.jpg",
                    description: "A lightweight conversational chatbot showcasing basic integration with large language models and session-based message buffers.",
                    tech: ["Java", "Gemini API", "Maven"],
                    github: "https://github.com",
                    demo: "https://example.com/chatbot-demo"
                }
            ]
        },
        web: {
            title: "Web Applications",
            featured: [
                {
                    name: "Portfolio Website",
                    image: "assets/portfolio_portal.jpg",
                    description: "Premium, fully responsive developer portfolio portal featuring clean CSS grids, dynamic tab switching, and mobile drawer menu navigations.",
                    tech: ["HTML", "CSS", "JavaScript", "Git"],
                    github: "https://github.com",
                    demo: "#"
                }
            ],
            others: []
        },
        java: {
            title: "Backend Applications",
            featured: [
                {
                    name: "AuthenticationJ",
                    image: "assets/secure_api.jpg",
                    description: "A secure Java backend authentication architecture featuring user password encryption, user persistence layers, and role-based JWT session handling.",
                    tech: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
                    github: "https://github.com",
                    demo: "assets/secure_api.jpg" // Snapshot
                }
            ],
            others: [
                {
                    name: "Tic Tac Toe",
                    image: "assets/secure_api.jpg",
                    description: "A classic desktop two-player Tic Tac Toe game implementing a minimax search algorithm for adjustable AI difficulty levels.",
                    tech: ["Java", "Swing", "OOP"],
                    github: "https://github.com",
                    demo: "assets/secure_api.jpg"
                },
                {
                    name: "Minesweeper",
                    image: "assets/secure_api.jpg",
                    description: "A standard desktop grid game built in Java Swing featuring recursive cell uncovering, clock indicators, and mine flags.",
                    tech: ["Java", "Swing"],
                    github: "https://github.com",
                    demo: "assets/secure_api.jpg"
                },
                {
                    name: "FLAMES",
                    image: "assets/secure_api.jpg",
                    description: "A relationship compatibility game created in Java utilizing core string algorithms, char checking, and layout managers.",
                    tech: ["Java", "Console"],
                    github: "https://github.com",
                    demo: "assets/secure_api.jpg"
                },
                {
                    name: "CRUD Applications",
                    image: "assets/secure_api.jpg",
                    description: "A database-driven client registry system managing create, read, update, and delete actions connected securely via JDBC.",
                    tech: ["Java", "PostgreSQL", "JDBC"],
                    github: "https://github.com",
                    demo: "assets/secure_api.jpg"
                }
            ]
        }
    };

    // =========================================
    //         DOM SELECTORS
    // =========================================
    const tabButtons = document.querySelectorAll('.project_tab_btn');
    const selectedTitle = document.getElementById('selected-category-title');
    const featuredGrid = document.getElementById('featured-projects-grid');
    const otherArea = document.getElementById('other-projects-area');
    const otherGrid = document.getElementById('other-projects-grid');
    const projectsContainer = document.querySelector('.projects_container');

    // Update tab counts dynamically on load
    tabButtons.forEach(btn => {
        const catKey = btn.getAttribute('data-category');
        const catData = projects[catKey];
        if (catData) {
            const totalCount = (catData.featured ? catData.featured.length : 0) + (catData.others ? catData.others.length : 0);
            btn.textContent = `${catData.title} (${totalCount})`;
        }
    });

    // =========================================
    //         DYNAMIC RENDERING LOGIC
    // =========================================
    function renderCategory(categoryKey) {
        const categoryData = projects[categoryKey];
        if (!categoryData) return;

        // 1. Update dynamic header
        if (selectedTitle) {
            selectedTitle.textContent = categoryData.title;
        }

        // 2. Render Featured Projects
        if (featuredGrid) {
            featuredGrid.innerHTML = '';
            if (categoryData.featured && categoryData.featured.length > 0) {
                categoryData.featured.forEach(proj => {
                    const fallbackUrl = `https://placehold.co/600x338/1e1b4b/a78bfa?text=${encodeURIComponent(proj.name)}`;
                    const isSnapshot = proj.demo && (proj.demo.endsWith('.jpg') || proj.demo.endsWith('.png'));
                    const actionLabel = isSnapshot ? '📸 Snapshot' : '🌐 Live Demo';
                    
                    const hasBgClass = proj.image ? 'has_bg' : '';
                    const bgStyle = proj.image ? `style="background-image: url('${proj.image}'), url('${fallbackUrl}');"` : '';

                    const cardHtml = `
                        <div class="project_card featured_card ${hasBgClass}" ${bgStyle}>
                            <div class="project_card_content">
                                <h4 class="project_card_title">${proj.name}</h4>
                                <p class="project_card_desc">${proj.description}</p>
                                <div class="project_card_tags">
                                    ${proj.tech.map(t => `<span class="project_tag">${t}</span>`).join('')}
                                </div>
                                <div class="project_card_actions">
                                    <a href="${proj.github}" target="_blank" class="project_action_link" rel="noopener"><i class="devicon-github-original"></i> GitHub</a>
                                    ${proj.demo ? `<a href="${proj.demo}" target="_blank" class="project_action_link" rel="noopener">${actionLabel}</a>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                    featuredGrid.insertAdjacentHTML('beforeend', cardHtml);
                });
            } else {
                featuredGrid.innerHTML = '<p class="no_projects_text">No projects available.</p>';
            }
        }

        // 3. Render Other Projects (with automatic display toggle)
        if (otherArea && otherGrid) {
            if (categoryData.others && categoryData.others.length > 0) {
                otherArea.style.display = 'block';
                otherGrid.innerHTML = '';
                categoryData.others.forEach(proj => {
                    const isSnapshot = proj.demo && (proj.demo.endsWith('.jpg') || proj.demo.endsWith('.png'));
                    const actionLabel = isSnapshot ? '📸 Snapshot' : '🌐 Live Demo';

                    const cardHtml = `
                        <div class="project_card other_card">
                            <div class="project_card_content">
                                <h4 class="project_card_title">${proj.name}</h4>
                                <p class="project_card_desc">${proj.description}</p>
                                <div class="project_card_tags">
                                    ${proj.tech.map(t => `<span class="project_tag">${t}</span>`).join('')}
                                </div>
                                <div class="project_card_actions">
                                    <a href="${proj.github}" target="_blank" class="project_action_link" rel="noopener"><i class="devicon-github-original"></i> GitHub</a>
                                    ${proj.demo ? `<a href="${proj.demo}" target="_blank" class="project_action_link" rel="noopener">${actionLabel}</a>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                    otherGrid.insertAdjacentHTML('beforeend', cardHtml);
                });
            } else {
                otherArea.style.display = 'none';
            }
        }
    }

    // =========================================
    //         TAB SWITCH TRIGGERS
    // =========================================
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // Toggle active state classes
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Switch category with fade transition
            if (projectsContainer) {
                projectsContainer.style.opacity = '0';
                setTimeout(() => {
                    renderCategory(category);
                    projectsContainer.style.opacity = '1';
                    
                    // Smoothly align viewport exactly below the sticky navbar (110px offset)
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                        const yOffset = -110;
                        const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }, 200);
            } else {
                renderCategory(category);
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    const yOffset = -110;
                    const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }
        });
    });

    // =========================================
    //      NAVBAR PROGRAMMATIC TRIGGER
    // =========================================
    window.triggerProjectFilter = function(categoryKey) {
        const targetBtn = document.querySelector(`.project_tab_btn[data-category="${categoryKey}"]`);
        if (targetBtn) {
            targetBtn.click();
        }
    };

    // =========================================
    //         INITIAL RENDER
    // =========================================
    const activeBtn = document.querySelector('.project_tab_btn.active');
    if (activeBtn) {
        const initialCategory = activeBtn.getAttribute('data-category');
        renderCategory(initialCategory);
    }
});
