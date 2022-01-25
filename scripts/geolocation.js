async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name,capital,latlng,cca2,capitalInfo');
    const countries = await response.json();
    // console.log(countries);

    let content = "";
    let map = "";

    countries.forEach(country => {


        content += `<option id="option" value="${country.cca2}">${country.name.official}</option>`;

        map += `src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC-psA1diyTHzfueedcPfB1-EAVzBhobGg
              &q=Space + Needle, Seattle + WA"`;

    });

    // const selected = document.getElementById('select');
    // console.log(selected);
    // let x = content;
    // // console.log(x);
    // function y() {

    // }
    // if (value = "FR") {
    //     x += `<option value="FR" selected>French Republic</option>`;

    //     console.log(x);
    // };

    const select = document.querySelector('#countrySelect');
    const googleMap = document.querySelector('#frame');
    googleMap.innerHTML = map;
    select.innerHTML = content;
    select.value = "FR";

    // faire une fonction onchange avec eventlistener (ex kokou : let mapsOfCountries = `https://www.google.com/maps/embed/v1/view?key=AIzaSyAWHSmK2mrqS2Dg_E8DPygukjvKPCOqcKk&center=${event.target.value.capitalInfo}&zoom=10`)


    // const map = null;
    // function iniMap() {

    // }




    // async function rend() {
    //     const response = await fetch(`'https://restcountries.com/v3.1/capital/${country.capital}'`);
    //     const countri = await response.json();
    //     console.log(countri);
    // }

}


window.addEventListener('load', render());

// value = "FR" selected