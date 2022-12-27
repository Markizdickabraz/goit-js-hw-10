import {fetchCountries} from './js/fetchCountries';
import './css/styles.css';
import debounce from 'lodash.debounce';


const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');


input.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

