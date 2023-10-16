import 'htmx.org'
import htmx from 'htmx.org'
import './assests/amazon.png';
import './assests/flipkart.png';
import './assests/myntra.png';
import './assests/logo.png';
import './styles.css';

document.addEventListener('htmx:configRequest', (evt) => {
    evt.detail.headers = [];
});

window.htmx = htmx