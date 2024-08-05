// Import our custom CSS
import { App } from './app';
import './views/pages/scss/style.scss'

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);