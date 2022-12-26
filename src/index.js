import fetchCountries from './js/fetchCountries';
import './css/styles.css';
import debounce from 'lodash.debounce';

// const input = document.querySelector('#search-box');
// const name = input.value;
const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const input = document.querySelector('#search-box');
// console.dir(input);

console.log(countryInfo);
console.log(countryList);

input.addEventListener('input',debounce(fetchCountries, DEBOUNCE_DELAY));

