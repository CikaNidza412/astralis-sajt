const astralisViews = new Set(['daily', 'synastry', 'history', 'curiosities', 'books', 'merch']);

function showAstralisLocation() {
    const hashView = window.location.hash.startsWith('#view-') ? window.location.hash.slice(6) : '';
    switchMainView(astralisViews.has(hashView) ? hashView : 'daily', {
        updateUrl: false,
        scroll: astralisViews.has(hashView)
    });
}

function setAstralisPageLanguage() {
    const isSerbian = document.documentElement.lang === 'sr';
    document.querySelectorAll('[data-text-sr]').forEach(element => {
        element.dataset.textEn ??= element.textContent;
        element.textContent = isSerbian ? element.dataset.textSr : element.dataset.textEn;
        if (element.dataset.hrefSr) {
            element.dataset.hrefEn ??= element.getAttribute('href');
            element.setAttribute('href', isSerbian ? element.dataset.hrefSr : element.dataset.hrefEn);
        }
    });
    document.querySelectorAll('[data-guide-language]').forEach(element => {
        element.hidden = element.dataset.guideLanguage !== document.documentElement.lang;
    });
    document.querySelectorAll('[data-home-menu]').forEach(menu => {
        menu.setAttribute('aria-label', isSerbian ? 'Glavni meni' : 'Main menu');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = new URLSearchParams(window.location.search).get('lang');
    if (preferredLanguage === 'en' || preferredLanguage === 'sr') {
        setLanguage(preferredLanguage);
    }
    setAstralisPageLanguage();
    showAstralisLocation();

    new MutationObserver(setAstralisPageLanguage).observe(document.documentElement, {
        attributeFilter: ['lang']
    });

    document.addEventListener('click', event => {
        const link = event.target.closest('a.nav-tab-btn, a[data-home-view]');
        if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        switchMainView(link.dataset.view || link.dataset.homeView);
    });

    window.addEventListener('popstate', showAstralisLocation);
    window.addEventListener('hashchange', showAstralisLocation);
});
