const input = document.querySelector('#search-box');
// console.dir(input);
let name = null;

export default function fetchCountries(name) {
    name = input.value;
    // name.thim();
    if (name == 0) {
        return;
    }
    fetch(`https://restcountries.com/v2/name/${name}?fullname,capital,population,flags.svg,languages`).then(r => r.json()).then(console.log);
    // if (promise.length > 10) {
    //     return console.log('fdfdfdfdf');
    // }
};
