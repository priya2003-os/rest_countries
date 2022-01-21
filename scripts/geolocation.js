async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name,capital,latlng,cca2');
    const countries = await response.json();
    console.log(countries);

    let content = "";

    countries.forEach(country => {
        content += `<option value="${country.cca2}">${country.name.official}</option>`;
    }
        function change(param) {
            const valeur;
            valeur = document.getElementById(param).value;
            if (selected == "FR") { change(); }

        }

        function change() {
            document.getElementById('')
        }

        
    });



const select = document.querySelector('#countrySelect');
select.innerHTML = content;

}
window.addEventListener('load', render());