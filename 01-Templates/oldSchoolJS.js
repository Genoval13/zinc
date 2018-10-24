'use strict';

/* eslint-env browser */

(() => {
    function populateList(results) {
        console.log(results); // eslint-disable-line no-console

        for (let i = 0; i < results.length; i++) {
            let user = document.createElement("li");
            user.className = "user";
            user.innerHTML = `<img class="user-photo" src=${results[i].picture.large} alt="Photo of ${results[i].name.first} ${results[i].name.last}">
            <div class="user-name">${results[i].name.first} ${results[i].name.last}</div>
            <div class="user-location">${results[i].location.city}, ${results[i].location.state}</div>
            <div class="user-email">${results[i].email}</div>`
            document.getElementById("z-user-list").appendChild(user);
        }
    }

    function init() {
        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(json => populateList(json.results));
    }

    document.addEventListener('DOMContentLoaded', init);
})();
