export { fetchCountries };
import Notiflix from "notiflix";
import renderList from "../index";
import {ZEROINGHTML} from "../index";

const input = document.querySelector('#search-box');
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
