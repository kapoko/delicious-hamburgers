import domReady from './helpers/domReady';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faCode, faEllipsisH, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { render } from 'github-buttons'

import '../sass/main.scss';

library.add(faDownload, faGithub, faCode, faEllipsisH, faAngleLeft, faAngleRight);
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

    // Single page auto animation
    let auto = document.getElementById("auto-activate");
    if (auto) {
        let hamburgers = auto.querySelectorAll('.hamburger');

        hamburgers.forEach((hamburger, i) => {
            setTimeout(function() {
                hamburger.classList.add('active');
                setTimeout(function() {
                    hamburger.classList.remove('active');
                }, 1500);
            }, 200 + 300 * i);
        });
    }

    // Arrow key navigation 
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    document.addEventListener('keydown', e => {
        switch(e.code) {
            case "ArrowLeft":
                if (prev) {
                    prev.classList.add('is-active');
                }
                break;
            case "ArrowRight":
                if (next) {
                    next.classList.add('is-active');
                }
                break;
        }
    });

    document.addEventListener('keyup', e => {
        let href;

        switch(e.code) {
            case "ArrowLeft":
                href = prev ? prev.getAttribute('href') : null;
                break;
            case "ArrowRight":
                href = next ? next.getAttribute('href') : null;
                break;
        }

        if (href) {
            window.location = href;
        }
    });


    // Github badge
    let anchor = document.getElementById('github-button')
    render(anchor, function (el) {
        anchor.parentNode.replaceChild(el, anchor)
    })
});