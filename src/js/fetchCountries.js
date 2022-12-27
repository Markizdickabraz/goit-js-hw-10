import Notiflix from "notiflix";

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

export default function fetchCountries(name) {
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
            r.json().then(function (data) {
                console.log('data', data.length)
                console.log(data);
                if (data.length > 10) {
                 Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
                }
                if (data.length > 2 && data.length <= 10) {
                    ZEROINGHTML();
                        const markupCoutryList = data.map(({flags, name}) => 
                            `<li class = "list__item"><img src="${flags.svg}"alt ="flags ${name}" width = 20> ${name}</li>`).join("");
                    countryList.insertAdjacentHTML("afterbegin", markupCoutryList);
                }
                if (data.length == 1) {
                    ZEROINGHTML();
                    const markupCoutryList = data.map(({ flags, name}) =>
                        `<li class = "list__item"><img src="${flags.svg}"alt ="flags ${name}" width = 20>${name}</li>`).join("");
                    countryList.insertAdjacentHTML("afterbegin", markupCoutryList);
                    const markupCoutryInfo = data.map(({capital, population, languages }) =>`<li class= "list__item">Capital:${capital}</li>
                    <li class= "list__item">population:${population}</li>
                    <li class = "list__item">languages:${languages[0].name}</li>`)
                    countryInfo.insertAdjacentHTML("afterbegin" ,markupCoutryInfo)
                }
            });

        }
    );
};

