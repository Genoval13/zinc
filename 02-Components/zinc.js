'use strict';

/* eslint-env browser */

const Zinc = {};

(() => {
    const userData = {
        picture: {
            thumbnail: 'https://f4.bcbits.com/img/0001142378_10.jpg'
        },
        name: {
            first: 'Jack',
            last: 'Burton'
        },
        location: {
            city: 'San Francisco',
            state: 'CA'
        },
        email: 'jack.burton@example.com'
    };

    function renderComponent(element, content, userData) {
        return fetch(`${content}.html`)
            .then(res => res.text())
            .then(text =>{ 
                return text.replace(/\{\{\s*(.+?)\s*\}\}/g,  (matches, p1) => 
                    p1.split('.').reduce((acc, cur) => acc[cur], userData))
            })
            .then(template => {
                document.querySelector(element).insertAdjacentHTML("beforeend", template)
            })
    }

    function init() {
        renderComponent('user-item', 'user', userData);
    }

    document.addEventListener('DOMContentLoaded', init);
})();
