import Notiflix from "notiflix";

const countryList = document.querySelector('.country-list');
countryList.style.listStyle = 'none';
const countryInfo = document.querySelector('.country-info');
const input = document.querySelector('#search-box');
// console.dir(input);
let name = null;
let country = 0;
let countrys = [];
const URL = 'https://restcountries.com/v2/name/';

export default function fetchCountries(name) {
    name = input.value;
    // name.thim();
    if (name == 0) {
        return;
    }
    fetch(`${URL}${name}?fields=name,capital,population,flags,languages`).then(
        (r) => {
            if (!r.ok) {
                throw new Error(r.status);
            }
            // isFetchCountriesLengs();
          
            r.json().then(function (data) {
                console.log('data', data.length)
                console.log(data);
                if (data.length > 10) {
                 Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
                }
                if (data.length > 2 && data.length <= 10) {
                        const markup = data.map(({flags, name}) => 
                            `<li><img src="${flags.svg}"alt ="flags ${name}" width = 20> ${name}</li>`).join("");
                        countryList.insertAdjacentHTML("afterbegin", markup);
                        console.log(markup);
                }
            });

        }
    );
};


// function isFetchCountriesLengs() {
//     fetchCountries().then(console.log);
//     for (country of countrys){
//         country += 1;
//     if (country > 10) {
//         return console.log('false');
//     }
//   }
        
//         return console.log('true');
    
// }