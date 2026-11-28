const astralisViews = new Set(['daily', 'synastry', 'history', 'curiosities', 'books', 'merch']);

function showAstralisLocation() {
    const hash = window.location.hash;
    if (!hash || hash.startsWith('#view-')) {
        const hashView = hash.slice(6);
        const hasView = astralisViews.has(hashView);
        switchMainView(hasView ? hashView : 'daily', { updateUrl: false, scroll: hasView });
        return;
    }

    const state = window.history.state;
    const view = astralisViews.has(state?.astralisView) ? state.astralisView : currentActiveView;
    switchMainView(view, { updateUrl: false, scroll: false });
    if (state?.astralisView !== view) {
        window.history.replaceState({ ...state, astralisView: view }, '');
    }
}

function setAstralisPageLanguage() {
    const language = document.documentElement.lang;
    const isSerbian = language === 'sr';
    document.querySelectorAll('[data-text-sr]').forEach(element => {
        element.dataset.textEn ??= element.textContent;
        element.textContent = isSerbian ? element.dataset.textSr : element.dataset.textEn;
        if (element.dataset.hrefSr) {
            element.dataset.hrefEn ??= element.getAttribute('href');
            element.setAttribute('href', isSerbian ? element.dataset.hrefSr : element.dataset.hrefEn);
        }
    });
    document.querySelectorAll('[data-guide-language]').forEach(element => {
        element.hidden = element.dataset.guideLanguage !== language;
    });
    document.querySelectorAll('[data-home-menu]').forEach(menu => {
        menu.setAttribute('aria-label', isSerbian ? 'Glavni meni' : 'Main menu');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const url = new URL(window.location.href);
    const preferredLanguage = url.searchParams.get('lang');
    if (preferredLanguage === 'en' || preferredLanguage === 'sr') {
        setLanguage(preferredLanguage);
        // Guide links set the starting language. Later visits use the latest choice.
        url.searchParams.delete('lang');
        window.history.replaceState(window.history.state, '', url);
    }
    setAstralisPageLanguage();
    showAstralisLocation();

    new MutationObserver(setAstralisPageLanguage).observe(document.documentElement, {
        attributeFilter: ['lang']
    });

    document.addEventListener('click', event => {
        const link = event.target.closest('a.nav-tab-btn, a[data-home-view]');
        if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        const view = link.dataset.view || link.dataset.homeView;
        switchMainView(view);

        if (event.detail === 0) {
            const heading = document.getElementById(`view-${view}`)?.querySelector('h1, h2');
            if (heading) {
                heading.tabIndex = -1;
                heading.focus({ preventScroll: true });
            }
        }
    });

    window.addEventListener('popstate', showAstralisLocation);
    window.addEventListener('hashchange', showAstralisLocation);
});
