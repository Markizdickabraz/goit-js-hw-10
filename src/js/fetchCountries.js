export { fetchCountries };
import Notiflix from "notiflix";
import renderList from "../index";

const countryList = document.querySelector('.country-list');
countryList.style.listStyle = 'none';
const countryInfo = document.querySelector('.country-info');
countryInfo.style.listStyle = 'none';
const input = document.querySelector('#search-box');
// console.dir(input);

function ZEROINGHTML() {
    countryList.innerHTML = " ";
    countryInfo.innerHTML = " ";
};

let name = null;

const URL = 'https://restcountries.com/v2/name/';

function fetchCountries(name) {
    name = input.value;

    if (name == 0) {
        ZEROINGHTML();
        return;
    }
    fetch(`${URL}${name}?fields=name,capital,population,flags,languages`).then(
        (r) => {
            if (!r.ok) {
                Notiflix.Notify.failure('Oops, there is no country with that name');
            }
           return r.json()

        }
    ).then(renderList)
};
