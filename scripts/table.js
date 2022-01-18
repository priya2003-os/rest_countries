//Partie 2

async function fetchTable() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name,area,population,capital');
    const datas = await response.json();

    let contents = "";
    for (const data of datas) {
        const numberFormat = new Intl.NumberFormat("en-GB");

        contents +=
            `<tr>
                <th class="text-nowrap ">${data.name.official}</th>
                <td class="text-end">${numberFormat.format(data.area)}</td>
                <td class="text-end">${numberFormat.format(data.population)}</td>
                <td class="text-nowrap ">${data.capital}</td>
            </tr>`;
    };

    const listData = document.querySelector('#headerCell');
    listData.innerHTML = contents;

}


window.addEventListener('load', fetchTable(), { once: true });