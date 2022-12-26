import Notiflix from "notiflix";

const countryList = document.querySelector('.country-list');
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
                // console.log(data.value);
                if (data.length > 10) {
                 Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
                }
                if (data.length > 2 && data.length <= 10) {
                    for (let i = 0; i < data.length; i+=1) {
                        const markup = data.map(({ flags, name }) => {
                            `<li><p>${flags}</p><p>${name}</p>`
                        })
                        console.log(markup);
                        countryList.insertAdjacentHTML("afterbegin", markup)
                    }
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