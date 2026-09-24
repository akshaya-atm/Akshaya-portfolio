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
                    name: "Employee Leave Management System (ELMS) — Agentic RAG & MCP",
                    image: "assets/elms.png",
                    description: "Agentic Employee Leave Management System combining a Spring Boot backend with an AI-powered conversational interface. Features RAG for policy Q&A via pgvector and Model Context Protocol (MCP) integration for secure tool execution.",
                    tech: ["Java 21", "Spring AI", "Agentic RAG", "MCP", "pgvector"],
                    github: "https://github.com/akshaya-atm/Employee-Leave-Management-System",
                    readme: "https://github.com/akshaya-atm/Employee-Leave-Management-System/blob/main/README.md",
                    demo: "decks/elms/index.html",
                    deck: "decks/elms/index.html"
                },
                {
                    name: "AI Outlast — Multi-Agent Survivor Simulator",
                    image: "assets/outlast_ai.jpg",
                    description: "Autonomous LLM multi-agent Survivor simulation in Spring Boot 4 & Java 17 featuring multi-provider routing (Groq, Gemini, Ollama), asymmetric social memory matrices, and probabilistic deception mechanics.",
                    tech: ["Java 17", "Spring Boot 4", "openai-java SDK", "Groq / Gemini", "Multithreading"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/AI%20outlast",
                    readme: "https://github.com/akshaya-atm/Featured-Projects/blob/main/AI%20outlast/README.md",
                    demo: "decks/ai-outlast/index.html",
                    deck: "decks/ai-outlast/index.html"
                },
                {
                    name: "Lift Management — Multithreaded Elevator System",
                    image: "assets/lift_management_diagram.jpg",
                    description: "Multithreaded elevator simulation in plain Java 11+. Features 1 worker thread per elevator, SCAN scheduling via dual min/max PriorityBlockingQueue, and 2-phase call flow with monitor locks.",
                    tech: ["Java 11+", "Multithreading", "PriorityBlockingQueue", "SCAN Algorithm", "Monitor Sync"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/Lift%20Management",
                    readme: "https://github.com/akshaya-atm/Featured-Projects/blob/main/Lift%20Management/README.md",
                    demo: "decks/lift-management/index.html",
                    deck: "decks/lift-management/index.html"
                }
            ],
            others: []
        },
        ai: {
            title: "AI Applications",
            shortTitle: "AI Applications",
            featured: [
                {
                    name: "Employee Leave Management System (ELMS) — Agentic RAG & MCP",
                    image: "assets/elms.png",
                    description: "Agentic Employee Leave Management System combining a Spring Boot backend with an AI-powered conversational interface. Features RAG for policy Q&A via pgvector and Model Context Protocol (MCP) integration for secure tool execution.",
                    tech: ["Java 21", "Spring AI", "Agentic RAG", "MCP", "pgvector"],
                    github: "https://github.com/akshaya-atm/Employee-Leave-Management-System",
                    readme: "https://github.com/akshaya-atm/Employee-Leave-Management-System/blob/main/README.md",
                    demo: "decks/elms/index.html",
                    deck: "decks/elms/index.html"
                },
                {
                    name: "AI Outlast — Multi-Agent Survivor Simulator",
                    image: "assets/outlast_ai.jpg",
                    description: "Autonomous LLM multi-agent Survivor simulation in Spring Boot 4 & Java 17 featuring multi-provider routing (Groq, Gemini, Ollama), asymmetric social memory matrices, and probabilistic deception mechanics.",
                    tech: ["Java 17", "Spring Boot 4", "openai-java SDK", "Groq / Gemini", "Multithreading"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/AI%20outlast",
                    readme: "https://github.com/akshaya-atm/Featured-Projects/blob/main/AI%20outlast/README.md",
                    demo: "decks/ai-outlast/index.html",
                    deck: "decks/ai-outlast/index.html"
                },
                {
                    name: "MindClash Debate Platform",
                    image: "assets/mindclash.png",
                    description: "Autonomous multi-agent AI debate engine built in Spring Boot featuring round-based argument orchestration, LLM provider routing, automated judge scoring, and real-time SSE streaming.",
                    tech: ["Java", "Spring Boot", "OpenAI API", "Multi-Agent", "SSE Streaming"],
                    github: "https://github.com/akshaya-atm/AI-And-LLD-Systems/tree/main/MindClash-Debater",
                    readme: "https://github.com/akshaya-atm/AI-And-LLD-Systems/blob/main/MindClash-Debater/README.md",
                    demo: "assets/mindclash.png"
                },
                {
                    name: "ShopSphere AI Engine",
                    image: "assets/shopsphere.png",
                    description: "Role-isolated dual AI agent assistant embedded in an e-commerce platform with RBAC tool isolation and strict safety guardrails.",
                    tech: ["Java", "LangChain4j", "Gemini API", "Servlets"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/ShopSphere",
                    readme: "https://github.com/akshaya-atm/Featured-Projects/blob/main/ShopSphere/README.md",
                    demo: "decks/shopsphere/index.html",
                    deck: "decks/shopsphere/index.html"
                }
            ],
            others: []
        },
        web: {
            title: "Web Applications",
            shortTitle: "Web Applications",
            featured: [
                {
                    name: "ShopSphere — Framework-Free E-Commerce Engine & Tool-Calling AI",
                    image: "assets/shopsphere.png",
                    description: "Framework-free full-stack e-commerce engine built with 16 raw HttpServlet dispatchers, HikariCP connection pooling, ThreadLocal JWT auth, and PostgreSQL.",
                    tech: ["Java Servlets", "PostgreSQL", "HikariCP", "JWT", "Vanilla JS"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/ShopSphere",
                    readme: "https://github.com/akshaya-atm/Featured-Projects/blob/main/ShopSphere/README.md",
                    demo: "decks/shopsphere/index.html",
                    deck: "decks/shopsphere/index.html"
                },
                {
                    name: "Portfolio Website",
                    image: "assets/outlast_ai.jpg",
                    description: "Premium, fully responsive developer portfolio portal featuring clean CSS grids, dynamic tab switching, and mobile drawer menu navigations.",
                    tech: ["HTML", "CSS", "JavaScript", "Git"],
                    github: "https://github.com/akshaya-atm/Akshaya-portfolio",
                    readme: "https://github.com/akshaya-atm/Akshaya-portfolio/blob/main/README.md",
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
                    name: "Lift Management — Multithreaded Elevator System",
                    image: "assets/lift_management_diagram.jpg",
                    description: "Multithreaded elevator simulation in plain Java 11+. 1 worker thread per elevator, SCAN scheduling via dual min/max PriorityBlockingQueue, and 2-phase call flow.",
                    tech: ["Java 11+", "Multithreading", "SCAN Algorithm", "Monitor Synchronization"],
                    github: "https://github.com/akshaya-atm/Featured-Projects/tree/main/Lift%20Management",
                    readme: "https://github.com/akshaya-atm/Featured-Projects/blob/main/Lift%20Management/README.md",
                    demo: "decks/lift-management/index.html",
                    deck: "decks/lift-management/index.html"
                },
                {
                    name: "Hyperloop Booking System",
                    image: "assets/hyperloop_diagram.jpg",
                    description: "High-concurrency ticket booking and seat allocation LLD engine with dynamic station route calculation and OOP design patterns.",
                    tech: ["Java", "LLD", "Concurrent Data Structures", "OOP Patterns"],
                    github: "https://github.com/akshaya-atm/AI-And-LLD-Systems/tree/main/HyperloopBookingSystem",
                    readme: "https://github.com/akshaya-atm/AI-And-LLD-Systems/blob/main/HyperloopBookingSystem/README.md",
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
    //         DYNAMIC CARD HELPER
    // =========================================
    function buildCardHtml(proj, isBigCard) {
        const isSnapshotDemo = proj.demo && (proj.demo.endsWith('.jpg') || proj.demo.endsWith('.png'));
        const targetDemoUrl = proj.deck || proj.demo || '#';

        // Check if the project is a globally featured flagship project by matching its name
        const globalFeaturedNames = projects.featured.featured.map(p => p.name);
        const isGloballyFeatured = globalFeaturedNames.includes(proj.name);

        // Snapshot Image Header - Clicking opens Presentation Deck / Live Demo
        const mediaHeader = proj.image ? `
            <div class="project_card_media">
                <a href="${targetDemoUrl}" target="_blank" rel="noopener" class="snapshot_media_link" title="Click to view Live Demo Presentation Deck">
                    <img src="${proj.image}" alt="${proj.name}" class="project_card_img" loading="lazy" />
                </a>
            </div>
        ` : '';

        const githubBtn = proj.github ? `<a href="${proj.github}" target="_blank" class="project_action_link github_link" rel="noopener"><i class="devicon-github-original"></i> GitHub</a>` : '';
        const readmeBtn = proj.readme ? `<a href="${proj.readme}" target="_blank" class="project_action_link readme_link" rel="noopener">📄 README</a>` : '';

        // Presentation Deck served as the primary Live Demo
        let demoBtn = '';
        if (proj.deck) {
            demoBtn = `<a href="${proj.deck}" target="_blank" class="project_action_link deck_link" rel="noopener">🌐 Live Demo (Interactive Deck)</a>`;
        } else if (proj.demo && proj.demo !== '#') {
            if (isSnapshotDemo) {
                demoBtn = `<a href="${proj.demo}" target="_blank" class="project_action_link snapshot_action_link" rel="noopener">📸 View Diagram</a>`;
            } else {
                demoBtn = `<a href="${proj.demo}" target="_blank" class="project_action_link demo_link" rel="noopener">🌐 Live Demo</a>`;
            }
        }

        return `
            <div class="project_card ${isBigCard ? 'featured_card' : 'other_card'}">
                ${mediaHeader}
                <div class="project_card_content">
                    <h4 class="project_card_title">${isGloballyFeatured ? '⭐ ' : ''}${proj.name}</h4>
                    <p class="project_card_desc">${proj.description}</p>
                    <div class="project_card_tags">
                        ${proj.tech.map(t => `<span class="project_tag">${t}</span>`).join('')}
                    </div>
                    <div class="project_card_actions">
                        ${githubBtn}
                        ${readmeBtn}
                        ${demoBtn}
                    </div>
                </div>
            </div>
        `;
    }

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
                    featuredGrid.insertAdjacentHTML('beforeend', buildCardHtml(proj, true));
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
                    otherGrid.insertAdjacentHTML('beforeend', buildCardHtml(proj, false));
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

    // =========================================
    //         PRESENTATION DECK MODAL LOGIC
    // =========================================
    const deckModal = document.getElementById('deck-modal');
    const deckIframe = document.getElementById('deck-modal-iframe');
    const deckModalTitle = document.getElementById('deck-modal-title');
    const deckExternalLink = document.getElementById('deck-modal-external-link');
    const deckModalClose = document.getElementById('deck-modal-close');

    function openDeckModal(url, title) {
        if (!deckModal || !deckIframe) {
            window.open(url, '_blank');
            return;
        }
        deckIframe.src = url;
        if (deckModalTitle) deckModalTitle.textContent = title || 'Presentation Deck';
        if (deckExternalLink) deckExternalLink.href = url;
        deckModal.classList.add('active');
        deckModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeDeckModal() {
        if (!deckModal) return;
        deckModal.classList.remove('active');
        deckModal.setAttribute('aria-hidden', 'true');
        if (deckIframe) deckIframe.src = '';
        document.body.style.overflow = '';
    }

    if (deckModalClose) {
        deckModalClose.addEventListener('click', closeDeckModal);
    }

    if (deckModal) {
        deckModal.addEventListener('click', (e) => {
            if (e.target === deckModal) {
                closeDeckModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && deckModal && deckModal.classList.contains('active')) {
            closeDeckModal();
        }
    });

    // Intercept clicks on deck links & card image headers to open modal
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
            const href = link.getAttribute('href');
            if (href && (href.includes('decks/') || href.includes('presentation-deck/')) && href.endsWith('.html')) {
                e.preventDefault();
                const card = link.closest('.project_card');
                const titleEl = card ? card.querySelector('.project_card_title') : null;
                const title = titleEl ? titleEl.textContent : 'Presentation Deck';
                openDeckModal(href, title);
            }
        }
    });
});
