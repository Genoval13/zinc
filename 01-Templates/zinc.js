'use strict';

/* eslint-env browser */

(() => {

    function renderTemplate(URL, data) {
        return fetch(`${URL}.html`)
            .then(res => res.text())
            .then(text =>{ 
                return text.replace(/\{\{\s*(.+?)\s*\}\}/g,  (matches, p1) => 
            p1.split('.').reduce((acc, cur) => acc[cur], data))})
    }
    
    function populateList(results) {
        for (let i = 0; i < results.length; i++) {
            renderTemplate('user', results[i])
            .then(template => document.getElementById("z-user-list").insertAdjacentHTML("beforeend", template))
        }
    }

    function init() {
        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(json => populateList(json.results));
    }

    document.addEventListener('DOMContentLoaded', init);
})();
