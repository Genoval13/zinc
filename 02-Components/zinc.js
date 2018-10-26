

const Zinc = {};

(() => {
    function renderTemplate(templateFile, dataObject) {
        return fetch(`${templateFile}.html`)
            .then(res => res.text())
            .then(text => { 
                return text.replace(/\{\{\s*(.+?)\s*\}\}/g,  (matches, p1) => 
                    p1.split('.').reduce((acc, cur) => acc[cur], dataObject))
            })
    }

    Zinc.registerComponent = function (elementName, templateFile, dataObject) {
        let element = document.querySelectorAll(elementName);
        for (let i = 0; i < element.length; i++) {
            renderTemplate(templateFile, dataObject)
                .then((template) => {
                    element[i].insertAdjacentHTML("beforeend", template);
                })
        }
    }

    function init() {
        
    }

    document.addEventListener('DOMContentLoaded', init);
})();
