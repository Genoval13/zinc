

/* eslint-env browser */
/* globals Zinc */

(() => {
    function userData () {
        return fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(json => {
                for (let i = 0; i < json.results.length; i++)
                Zinc.registerComponent('user-item', 'user', json.results[i])
            })
    };


    function init () {
        userData();
    };

    document.addEventListener('DOMContentLoaded', init);
})();
