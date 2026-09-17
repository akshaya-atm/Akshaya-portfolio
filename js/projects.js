document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    //         PROJECTS DATA DATABASE
    // =========================================
    const projects = {
        featured: {
            title: "Featured Flagship Projects",
            shortTitle: "* Featured",
            featured: [
                {
                    name: "AI Outlast — Multi-Agent Survivor Simulator",
                    image: "assets/outlast_ai.jpg",
                    description: "Autonomous LLM multi-agent Survivor simulation in Spring Boot 4 & Java 17 featuring multi-provider routing (Groq, Gemini, Ollama), asymmetric social memory matrices, and probabilistic deception mechanics.",
                    tech: ["Java 17", "Spring Boot 4", "openai-java SDK", "Groq / Gemini", "Multithreading"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/AI%20outlast",
                    demo: "../Featured Projects/AI outlast/Outlast-Frontend/index.html",
                    deck: "../Featured Projects/AI outlast/presentation-deck/index.html"
                },
                {
                    name: "ShopSphere — Framework-Free E-Commerce Engine",
                    image: "assets/shopsphere.png",
                    description: "High-performance full-stack e-commerce architecture built with 16 raw HttpServlet dispatchers, HikariCP connection pooling, ThreadLocal JWT authentication, PostgreSQL, and dual AI agents.",
                    tech: ["Java Servlets", "PostgreSQL", "HikariCP", "JWT", "Vanilla JS"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/ShopSphere",
                    demo: "../Featured Projects/ShopSphere/presentation-deck/index.html",
                    deck: "../Featured Projects/ShopSphere/presentation-deck/index.html"
                },
                {
                    name: "Lift Management — Multithreaded Elevator System",
                    image: "assets/lift_management_diagram.jpg",
                    description: "Multithreaded elevator simulation in plain Java 11+. Features 1 worker thread per elevator, SCAN scheduling via dual min/max PriorityBlockingQueue, and 2-phase call flow with monitor locks.",
                    tech: ["Java 11+", "Multithreading", "PriorityBlockingQueue", "SCAN Algorithm", "Monitor Sync"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/Lift%20Management",
                    demo: "../Featured Projects/Lift Management/presentation-deck/index.html",
                    deck: "../Featured Projects/Lift Management/presentation-deck/index.html"
                }
            ],
            others: []
        },
        ai: {
            title: "AI Applications",
            shortTitle: "AI Applications",
            featured: [
                {
                    name: "AI Outlast — Multi-Agent Survivor Simulator",
                    image: "assets/outlast_ai.jpg",
                    description: "Autonomous LLM multi-agent Survivor simulation in Spring Boot 4 & Java 17 featuring multi-provider routing (Groq, Gemini, Ollama), asymmetric social memory matrices, and probabilistic deception mechanics.",
                    tech: ["Java 17", "Spring Boot 4", "openai-java SDK", "Groq / Gemini", "Multithreading"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/AI%20outlast",
                    demo: "../Featured Projects/AI outlast/Outlast-Frontend/index.html",
                    deck: "../Featured Projects/AI outlast/presentation-deck/index.html"
                },
                {
                    name: "ShopSphere AI Engine",
                    image: "assets/shopsphere.png",
                    description: "Role-isolated dual AI agent assistant embedded in an e-commerce platform with RBAC tool isolation and strict safety guardrails.",
                    tech: ["Java", "LangChain4j", "Gemini API", "Servlets"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/ShopSphere",
                    demo: "../Featured Projects/ShopSphere/presentation-deck/index.html",
                    deck: "../Featured Projects/ShopSphere/presentation-deck/index.html"
                },
                {
                    name: "MindClash Debate Platform",
                    image: "assets/mindclash.png",
                    description: "A semantic QA environment leveraging RAG pipelines and vector database indexing to parse and compare diverse document perspectives.",
                    tech: ["Java", "LangChain4j", "Vector DB", "Gemini API"],
                    github: "https://github.com/akshaya-atm/MindClash-Debater",
                    demo: "assets/mindclash_diagram.jpg"
                }
            ],
            others: []
        },
        web: {
            title: "Web Applications",
            shortTitle: "Web Applications",
            featured: [
                {
                    name: "ShopSphere Platform",
                    image: "assets/shopsphere.png",
                    description: "Framework-free full-stack e-commerce engine built with 16 raw HttpServlet dispatchers, HikariCP connection pooling, ThreadLocal JWT auth, and PostgreSQL.",
                    tech: ["Java Servlets", "PostgreSQL", "HikariCP", "JWT", "Vanilla JS"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/ShopSphere",
                    demo: "../Featured Projects/ShopSphere/presentation-deck/index.html",
                    deck: "../Featured Projects/ShopSphere/presentation-deck/index.html"
                },
                {
                    name: "Portfolio Website",
                    image: "assets/portfolio_portal.jpg",
                    description: "Premium, fully responsive developer portfolio portal featuring clean CSS grids, dynamic tab switching, and mobile drawer menu navigations.",
                    tech: ["HTML", "CSS", "JavaScript", "Git"],
                    github: "https://github.com/akshaya-atm/Akshaya-portfolio",
                    demo: "#"
                }
            ],
            others: []
        },
        java: {
            title: "Backend Applications",
            shortTitle: "Backend Applications",
            featured: [
                {
                    name: "Lift Management System",
                    image: "assets/lift_management_diagram.jpg",
                    description: "Multithreaded elevator simulation in plain Java 11+. 1 worker thread per elevator, SCAN scheduling via dual min/max PriorityBlockingQueue, and 2-phase call flow.",
                    tech: ["Java 11+", "Multithreading", "SCAN Algorithm", "Monitor Synchronization"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/Lift%20Management",
                    demo: "../Featured Projects/Lift Management/presentation-deck/index.html",
                    deck: "../Featured Projects/Lift Management/presentation-deck/index.html"
                },
                {
                    name: "Hyperloop Booking System",
                    image: "assets/hyperloop_diagram.jpg",
                    description: "High-concurrency ticket booking and seat allocation LLD engine with dynamic station route calculation and OOP design patterns.",
                    tech: ["Java", "LLD", "Concurrent Data Structures", "OOP Patterns"],
                    github: "https://github.com/akshaya-atm/HyperloopBookingSystem",
                    demo: "assets/hyperloop_diagram.jpg"
                }
            ],
            others: []
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
            const label = catData.shortTitle || catData.title;
            btn.textContent = `${label} (${totalCount})`;
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

                    const deckBtn = proj.deck ? `<a href="${proj.deck}" target="_blank" class="project_action_link deck_link" rel="noopener">📊 Presentation Deck</a>` : '';
                    const demoBtn = proj.demo && !proj.deck ? `<a href="${proj.demo}" target="_blank" class="project_action_link" rel="noopener">${actionLabel}</a>` : '';

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
                                    ${deckBtn}
                                    ${demoBtn}
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

                    const deckBtn = proj.deck ? `<a href="${proj.deck}" target="_blank" class="project_action_link deck_link" rel="noopener">📊 Presentation Deck</a>` : '';
                    const demoBtn = proj.demo && !proj.deck ? `<a href="${proj.demo}" target="_blank" class="project_action_link" rel="noopener">${actionLabel}</a>` : '';

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
                                    ${deckBtn}
                                    ${demoBtn}
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
