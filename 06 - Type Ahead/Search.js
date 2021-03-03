window.addEventListener('load', function(){
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const cities = [];
    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => cities.push(...data));

    console.log(cities);

    function findMatches(wordToMatch, cities){
        return cities.filter(place => {
            const regex = new RegExp(wordToMatch, 'ig');// i:insensitive, g:global
            // console.log(place);
            return place.city.match(regex) || place.state.match(regex);
        });
    }

    function displayMatches(){
        console.log(this.value);
        const matchArray = findMatches(this.value, cities);
        console.log(matchArray);
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'ig');
            const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
            return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <psan class="population">${numberWithCommas(place.population)}</span>
                </li>
            `
        })
        .join('');
        suggestions.innerHTML = html;
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
    searchInput.focus();
});