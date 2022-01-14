//Partie 2

async function fetchTable() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name,area,population,capital');
    const datas = await response.json();

    let contents = "";
    for (const data of datas) {
        const numberFormatArea = (new Intl.NumberFormat("en-EN").format(data.area));
        const numberFormatPop = (new Intl.NumberFormat("en-EN").format(data.population));

        contents +=
            `<tr>
                <th class="text-nowrap ">${data.name.official}</th>
                <td>${numberFormatArea}</td>
                <td>${numberFormatPop}</td>
                <td class="text-nowrap ">${data.capital}</td>
            </tr>`;
    };

    const listData = document.querySelector('#headerCell');
    listData.innerHTML = contents;

}


window.addEventListener('load', fetchTable());