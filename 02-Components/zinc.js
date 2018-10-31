

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

    function renderComponent(elementName, templateFile, dataObject) {
        let element = document.querySelector(elementName);
        renderTemplate(templateFile, dataObject)
            .then((template) => {
                console.log(element)
                element.insertAdjacentHTML("beforeend", template);
            });
    }

    Zinc.registerComponent = function (elementName, templateFile, dataObject) {
        Zinc.components = {
            elementName,
            templateFile,
            dataObject
        };

        renderComponent(elementName, templateFile, dataObject);
    }

    function init() {
        
    }

    document.addEventListener('DOMContentLoaded', init);
})();
