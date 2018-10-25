'use strict';

/* eslint-env browser */

(() => {

    function renderTemplate(HTML, data) {
        return HTML.replace(/\{\{\s*(\w+)\s*\}\}/g, function (matches, p1) {
            return data[p1];
        })
    }

    let userHTML = `<li class="user">
        <img class="user-photo" src="{{ photo }}" alt="Photo of {{ firstName }} {{ lastName }}">
        <div class="user-name">{{ firstName }} {{ lastName }}</div>
        <div class="user-location">{{ city }}, {{ state }}</div>
        <div class="user-email">{{ email }}</div>
        </li>`;

    function populateList(results) {
        for (let i = 0; i < results.length; i++) {
            
            const data = {
                photo: results[i].picture.thumbnail,
                firstName: results[i].name.first,
                lastName: results[i].name.last,
                city: results[i].location.city,
                state: results[i].location.state,
                email: results[i].email
            };
            
            let template = renderTemplate(userHTML, data);
            document.getElementById("z-user-list").insertAdjacentHTML("beforeend", template);
        }
    }

    function init() {
        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(json => populateList(json.results));
    }

    document.addEventListener('DOMContentLoaded', init);
})();
