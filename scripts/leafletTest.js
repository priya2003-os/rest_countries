async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name,capital,flags,latlng');
    const cards = await response.json();

    let content = "";
    let mapContent = "";



    for (const card of cards) {



        content +=

            `<div class="col">
                <div class="card h-100">
                    <a onclick="getPosition(${card.latlng[0], card.latlng[1]});"><img  src="${card.flags.png}" class="card-img-top" alt="country flag${card.name.official}"></button>
                    <div class="card-body">
                        <p class="card-text">${card.name.official}</p>
                        <p class="card-text">${card.capital}</p>
                    </div>
                </div>
            </div>`;
        console.log();
        button.addEventListener('click', getMap());

    };

    function getMap() {
        let value = document.getElementsByTagName('button.value');
        console.log(value);


        // //on initialise la carte
        let map = L.map('mymap').setView('', 13);
        console.log(map);
        //on charge les tuiles
        L.tileLayer('//{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            attribution: 'donn&eacute;es &copy; <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20,
        }).addTo(map);
        console.log(map);
        // let marker = L.marker([card.latlng[0], card.latlng[1]]).addTo(map);
    };


    const query = document.querySelector('#flags');
    query.innerHTML = content;

    const querymap = document.querySelector('#mymap');
    querymap.innerHTML = mapContent;

}

window.addEventListener('load', render());
