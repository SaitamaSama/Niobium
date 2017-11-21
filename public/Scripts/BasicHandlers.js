;(() => {
    "use strict";

    const primitiveElements = {
        pageMenu: {
            handler: document.querySelector('[data-handler="page-menu"]'),
            listener: document.querySelector('[data-listener="page-menu"]')
        }
    };

    class BasicHandlers {
        /**
         * Handler for the page menu button click event.
         * @param {MouseEvent} e
         */
        static pageMenu(e) {
            if(!primitiveElements.pageMenu.handler.classList.contains('activated')) {
                // Open if not activated
                primitiveElements.pageMenu.listener.classList.add('activated');
                primitiveElements.pageMenu.handler.classList.add('activated');
            } else {
                // Close if activated
                primitiveElements.pageMenu.listener.classList.remove('activated');
                primitiveElements.pageMenu.handler.classList.remove('activated');
            }
        }
    }

    primitiveElements.pageMenu.handler.addEventListener('click', BasicHandlers.pageMenu);
})();