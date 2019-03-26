document.addEventListener('readystatechange', e => {
    if (e.target.readyState === 'interactive') {
        let externalLinks = document.querySelectorAll('[data-hook="link-external"]');

        externalLinks.forEach( (link) => {
            link.addEventListener('click', e => {
                e.preventDefault();
                window.open(e.target.href);
            });
        });
    }
});