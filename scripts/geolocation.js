async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name,capital,latlng,cca2,capitalInfo');
    const countries = await response.json();
    // console.log(countries);

    let content = "";
    let map = "";

    countries.forEach(country => {


        // content += `<option id="option" value="${country.cca2}">${country.name.official}</option>`;



        if (country.cca2 == "FR") {
            content += `<option value="${country.cca2}" selected>${country.name.official}</option>`;
        } else {
            content += `<option value="${country.cca2}">${country.name.official}</option>`;
        }

        console.log(content);

        const selectCountry = document.getElementById('countrySelect');
        selectCountry.addEventListener('change', (event) => {
            const result = document.querySelector('#map');
            result.innerHTML = `src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC-psA1diyTHzfueedcPfB1-EAVzBhobGg
                    &q=${event.target.value}"`;

        });


    });




    const select = document.querySelector('#countrySelect');
    const googleMap = document.querySelector('#frame');
    googleMap.innerHTML = map;
    select.innerHTML = content;

    // faire une fonction onchange avec eventlistener (ex kokou : let mapsOfCountries = `https://www.google.com/maps/embed/v1/view?key=AIzaSyAWHSmK2mrqS2Dg_E8DPygukjvKPCOqcKk&center=${event.target.value.capitalInfo}&zoom=10`)


    // const map = null;
    // function iniMap() {

    // }




    // }

}


window.addEventListener('load', render());

