fetch('/weather-fetch/config.json')
    .then(response => response.json())
    .then(config => config)
    .catch(error => console.log(error));


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const country = event.target['country'].value;
    const city = event.target['city'].value;
  
    fetch(`${config.URL}?country=${country}&q=${city}&APPID=${config.APPID}`)
        .then(response => response.json())
        .then(json => showWeather(json, event.target));
})

function showWeather(json, target) {
    console.log(json);
    const titleElement$ = target.nextElementSibling.querySelector('h5.card-title');
    titleElement$.innerText = `Weather for ${json.name}`;
    
    let html = '';
    config.weatherFieldConig.forEach((el => {
        html += '<div class="row">';
        html += `<div class="col-6">${el.name}</div><div class="col-6">${eval('json.' + el.field)}</div>`
        html += '</div>';
    }))    

    titleElement$.nextElementSibling.innerHTML = html;
}