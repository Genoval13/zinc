'use strict';

/* eslint-env browser */

(() => {
    function renderTemplate(str, data) {
        console.log(results); // eslint-disable-line no-console

            
    }

    function init() {
        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(json => renderTemplate(json.results));
    }

    document.addEventListener('DOMContentLoaded', init);
})();
