import domReady from './helpers/domReady';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faCode, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { render } from 'github-buttons'

import '../sass/main.scss';

library.add(faDownload, faGithub, faCode, faEllipsisH);
dom.watch();

domReady(() => {
    let hamburgers = document.querySelectorAll('.hamburger');

    // All hamburgers
    hamburgers.forEach(hamburger => {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            hamburger.classList.toggle('active');
        })
    });

    // Buttons
    ['reset', 'toggle-all'].forEach(action => {
        let button = document.getElementById(action);

        if (!button) {
            return;
        }

        button.addEventListener('click', e => {
            e.preventDefault();

            switch(action) {
                case 'reset': {
                    hamburgers.forEach(hamburger => hamburger.classList.remove('active'));
                    break;
                }
                case 'toggle-all': {
                    hamburgers.forEach(hamburger => hamburger.classList.toggle('active'));
                    break;
                }
            }
        })
    });

    // Github badge
    let anchor = document.getElementById('github-button')
    render(anchor, function (el) {
        anchor.parentNode.replaceChild(el, anchor)
    })
});