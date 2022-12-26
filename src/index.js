import fetchCountries from './js/fetchCountries';
import './css/styles.css';
import debounce from 'lodash.debounce';


const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const input = document.querySelector('#search-box');


input.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

