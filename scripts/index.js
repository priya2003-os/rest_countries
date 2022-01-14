//recuperer la liste des noms des pays avec une fonction via URL
async function fetchCountries() {

    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name');
    const countries = await response.json();


    let listName = "";
    countries.forEach(country => {
        listName += `<li>${country.name.official}</li>`;

    });
    const list = document.querySelector('#country');
    list.innerHTML = listName;
}
window.addEventListener('load', fetchCountries());





