// Wiki JavaScript - Infomaatje Gebruikershandleiding
// Content wordt nu geladen uit aparte HTML bestanden in /wiki-pages/

// Pagina metadata (voor zoeken en navigatie)
const pageIndex = {
    home: { title: "Welkom bij de Infomaatje Wiki", file: "wiki-pages/home.html" },
    inleiding: { title: "Inleiding", file: "wiki-pages/inleiding.html" },
    knoppen: { title: "Knoppen", file: "wiki-pages/knoppen.html" },
    parkeerplaatsen: { title: "Parkeerplaatsen", file: "wiki-pages/parkeerplaatsen.html" },
    dossier: { title: "Dossier", file: "wiki-pages/dossier.html" },
    instanties: { title: "Instanties", file: "wiki-pages/instanties.html" },
    vragenlijsten: { title: "Vragenlijsten", file: "wiki-pages/vragenlijsten.html" },
    checklijsten: { title: "Checklijsten", file: "wiki-pages/checklijsten.html" },
    agenda: { title: "Agenda Taak", file: "wiki-pages/agenda.html" },
    koppels: { title: "Koppels", file: "wiki-pages/koppels.html" },
    correspondentie: { title: "Correspondentie", file: "wiki-pages/correspondentie.html" },
    notities: { title: "Notities", file: "wiki-pages/notities.html" },
    "admin-vragenlijsten": { title: "Vragenlijsten Beheer", file: "wiki-pages/admin-vragenlijsten.html" },
    "admin-taken": { title: "Taken Beheer", file: "wiki-pages/admin-taken.html" },
    "admin-checklijsten": { title: "Checklijsten Beheer", file: "wiki-pages/admin-checklijsten.html" },
    weeklies: { title: "Weeklies", file: "wiki-pages/weeklies.html" },
    autorisatie: { title: "Autorisatie", file: "wiki-pages/autorisatie.html" },
    woordenlijst: { title: "Woordenlijst", file: "wiki-pages/woordenlijst.html" }
};

// Cache voor geladen pagina's (voor zoekfunctie)
const pageCache = {};

// DOM Elements
const contentArea = document.getElementById('content-area');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const navLinks = document.querySelectorAll('.nav-list a');

// Load page content from external file
async function loadPage(pageName) {
    const pageInfo = pageIndex[pageName];
    if (!pageInfo) {
        contentArea.innerHTML = '<h2>Pagina niet gevonden</h2><p>De opgevraagde pagina bestaat niet.</p>';
        return;
    }

    try {
        // Show loading state
        contentArea.innerHTML = '<p>Laden...</p>';

        // Fetch the HTML file
        const response = await fetch(pageInfo.file);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();

        // Update content
        contentArea.innerHTML = html;
        contentArea.classList.remove('fade-in');
        void contentArea.offsetWidth; // Trigger reflow
        contentArea.classList.add('fade-in');

        // Cache for search
        pageCache[pageName] = html;

        // Update active nav
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });

        // Update URL hash
        window.location.hash = pageName;

        // Update page title
        document.title = `${pageInfo.title} - Infomaatje Wiki`;

        // Re-attach click handlers for internal links
        attachWikiLinks();

    } catch (error) {
        console.error('Error loading page:', error);
        contentArea.innerHTML = `
            <h2>Fout bij laden</h2>
            <p>De pagina kon niet worden geladen. Probeer het opnieuw.</p>
            <p><small>Error: ${error.message}</small></p>
        `;
    }
}

// Attach click handlers to wiki links
function attachWikiLinks() {
    const wikiLinks = document.querySelectorAll('.wiki-link, .breadcrumbs a');
    wikiLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            if (page) {
                loadPage(page);
            }
        });
    });
}

// Preload all pages for search functionality
async function preloadPagesForSearch() {
    for (const [key, info] of Object.entries(pageIndex)) {
        if (!pageCache[key]) {
            try {
                const response = await fetch(info.file);
                if (response.ok) {
                    pageCache[key] = await response.text();
                }
            } catch (error) {
                console.warn(`Could not preload ${key}:`, error);
            }
        }
    }
}

// Search functionality
function searchWiki(query) {
    if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    for (const [key, info] of Object.entries(pageIndex)) {
        const titleMatch = info.title.toLowerCase().includes(lowerQuery);
        
        // Search in cached content if available
        let contentMatch = false;
        let excerpt = '';
        
        if (pageCache[key]) {
            const contentText = pageCache[key].replace(/<[^>]*>/g, '').toLowerCase();
            contentMatch = contentText.includes(lowerQuery);
            
            if (contentMatch) {
                const index = contentText.indexOf(lowerQuery);
                const start = Math.max(0, index - 50);
                const end = Math.min(contentText.length, index + 100);
                excerpt = '...' + contentText.substring(start, end).trim() + '...';
            }
        }

        if (titleMatch || contentMatch) {
            results.push({
                key: key,
                title: info.title,
                excerpt: excerpt
            });
        }
    }

    displaySearchResults(results);
}

function displaySearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">Geen resultaten gevonden</div>';
    } else {
        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" data-page="${result.key}">
                <div class="search-result-title">${result.title}</div>
                ${result.excerpt ? `<div class="search-result-excerpt">${result.excerpt}</div>` : ''}
            </div>
        `).join('');

        // Add click handlers
        searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                loadPage(item.dataset.page);
                searchResults.classList.remove('active');
                searchInput.value = '';
            });
        });
    }
    searchResults.classList.add('active');
}

// Event Listeners
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        loadPage(link.dataset.page);
    });
});

searchInput.addEventListener('input', (e) => {
    searchWiki(e.target.value);
});

searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        searchResults.classList.remove('active');
    }, 200);
});

searchInput.addEventListener('focus', () => {
    if (searchInput.value.length >= 2) {
        searchWiki(searchInput.value);
    }
});

// Handle browser back/forward
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash && pageIndex[hash]) {
        loadPage(hash);
    }
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1);
    if (hash && pageIndex[hash]) {
        loadPage(hash);
    } else {
        loadPage('home');
    }

    // Preload pages for search after initial load
    setTimeout(preloadPagesForSearch, 1000);
});
