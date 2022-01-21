async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name,capital,flags,maps');
    const cards = await response.json();

    let content = "";



    for (const card of cards) {



        content +=

            `<div class="col">
                <div class="card h-100">
                    <a href="${card.maps.openStreetMaps}" target="_blank"><img  src="${card.flags.png}" class="card-img-top" alt="country flag${card.name.official}"></a>
                    <div class="card-body">
                        <h5 class="card-text">${card.name.official}</h5>
                        <h6 class="card-text">${card.capital}</h6>
                    </div>
                </div>
            </div>`;

    };

    const query = document.querySelector('#flags');
    query.innerHTML = content;

}

window.addEventListener('load', render(), { once: true });
