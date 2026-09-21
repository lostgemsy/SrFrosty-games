/* Farius shared settings. Add <script src="/farius.js"></script> to every page (games, apps, other, index). */
(function () {
    var KEY = 'farius.settings';
    var SITES = [
        { id: 'classroom', name: 'Google Classroom', url: 'https://classroom.google.com/', domain: 'classroom.google.com', title: 'Classroom' },
        { id: 'docs', name: 'Google Docs', url: 'https://docs.google.com/document/u/0/', domain: 'docs.google.com', title: 'Google Docs' },
        { id: 'drive', name: 'Google Drive', url: 'https://drive.google.com/', domain: 'drive.google.com', title: 'My Drive - Google Drive' },
        { id: 'schoology', name: 'Schoology', url: 'https://app.schoology.com/home', domain: 'schoology.com', title: 'Home | Schoology' },
        { id: 'canvas', name: 'Canvas', url: 'https://canvas.instructure.com/', domain: 'instructure.com', title: 'Dashboard' },
        { id: 'clever', name: 'Clever', url: 'https://clever.com/in/', domain: 'clever.com', title: 'Clever | Portal' },
        { id: 'khan', name: 'Khan Academy', url: 'https://www.khanacademy.org/', domain: 'khanacademy.org', title: 'Khan Academy' }
    ];
    var DEFAULTS = {
        panic: { on: false, code: 'Minus', label: '-', ctrl: false, alt: false, shift: false, meta: false, url: SITES[0].url },
        cloak: { id: 'none', title: '', icon: '' },
        confirmLeave: false,
        calm: false
    };
    var orig, calmStyle, leaving = false, skipPrompt = false;

    function fav(domain) { return 'https://www.google.com/s2/favicons?domain=' + domain + '&sz=64'; }

    // Only http(s) links with a real hostname are accepted (blocks javascript:, data:, etc.)
    function safeUrl(v) {
        v = (v || '').trim();
        if (!v) return null;
        if (!/^[a-z][a-z0-9+.-]*:/i.test(v)) v = 'https://' + v;
        var u;
        try { u = new URL(v); } catch (e) { return null; }
        if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
        if (u.hostname.indexOf('.') < 0 && u.hostname !== 'localhost') return null;
        return u.href;
    }

    function load() {
        var s;
        try { s = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { s = {}; }
        return {
            panic: Object.assign({}, DEFAULTS.panic, s.panic),
            cloak: Object.assign({}, DEFAULTS.cloak, s.cloak),
            confirmLeave: !!s.confirmLeave,
            calm: !!s.calm
        };
    }
    function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} apply(); }
    function reset() { try { localStorage.removeItem(KEY); } catch (e) {} apply(); }

    function go(url) {
        leaving = true;
        try { top.location.replace(url); } catch (e) { location.replace(url); }
    }

    function cloakInfo(c) {
        if (c.id === 'custom') return { title: c.title, icon: safeUrl(c.icon) };
        for (var i = 0; i < SITES.length; i++) if (SITES[i].id === c.id) return { title: SITES[i].title, icon: fav(SITES[i].domain) };
        return null;
    }

    function apply() {
        var s = load(), link = document.querySelector('link[rel~="icon"]');
        if (!orig) orig = { title: document.title, icon: link && link.getAttribute('href'), type: link && link.getAttribute('type') };

        var c = cloakInfo(s.cloak);
        document.title = (c && c.title) || orig.title;
        if (!link && c && c.icon) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
        if (link) {
            if (c && c.icon) { link.removeAttribute('type'); link.href = c.icon; }
            else if (orig.icon) { if (orig.type) link.type = orig.type; link.href = orig.icon; }
        }

        if (!calmStyle) {
            calmStyle = document.createElement('style');
            calmStyle.textContent = 'html.fs-calm :not(#loading-screen):not(#loading-screen *){animation:none!important;transition:none!important;scroll-behavior:auto!important}';
            document.head.appendChild(calmStyle);
        }
        document.documentElement.classList.toggle('fs-calm', s.calm);
    }

    // Panic key
    document.addEventListener('keydown', function (e) {
        if (api.paused || e.repeat) return;
        var p = load().panic;
        if (!p.on || e.code !== p.code) return;
        if (e.ctrlKey !== p.ctrl || e.altKey !== p.alt || e.shiftKey !== p.shift || e.metaKey !== p.meta) return;
        var t = e.target, typing = t && (t.isContentEditable || /^(input|textarea|select)$/i.test(t.tagName));
        if (typing && !(p.ctrl || p.alt || p.meta)) return;
        var url = safeUrl(p.url);
        if (!url) return;
        e.preventDefault();
        go(url);
    }, true);

    // "Ask before leaving" (skips the prompt for panic redirects and links inside the site)
    window.addEventListener('beforeunload', function (e) {
        if (leaving || skipPrompt || !load().confirmLeave) return;
        e.preventDefault();
        e.returnValue = '';
    });
    document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href]');
        if (a && a.origin === location.origin) { skipPrompt = true; setTimeout(function () { skipPrompt = false; }, 400); }
    }, true);

    var api = window.Farius = { SITES: SITES, load: load, save: save, reset: reset, apply: apply, safeUrl: safeUrl, fav: fav, cloakInfo: cloakInfo, go: go, paused: false };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
    window.addEventListener('load', apply);
})();