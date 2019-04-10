document.addEventListener('readystatechange', function(e) {
    if (e.target.readyState === 'interactive') {
        var externalLinks = document.querySelectorAll('[data-hook="link-external"]');

        externalLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(e.target.href);
            });
        });
    }
});