const URL = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = 'bed156d40174100c73406417523ddaf1';

const weatherFieldConig = [
    {name: 'Temperature', field: 'main.temp'},
    {name: 'Wind deg', field: 'wind.deg'},
    {name: 'Wind speed', field: 'wind.speed'}
];

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const country = event.target['country'].value;
    const city = event.target['city'].value;
  
    fetch(`${URL}?country=${country}&q=${city}&APPID=${APPID}`)
        .then(response => response.json())
        .then(json => showWeather(json, event.target));
})

function showWeather(json, target) {
    console.log(json);
    const titleElement$ = target.nextElementSibling.querySelector('h5.card-title');
    titleElement$.innerText = `Weather for ${json.name}`;
    
    let html = '';
    weatherFieldConig.forEach((el => {
        html += '<div class="row">';
        html += `<div class="col-6">${el.name}</div><div class="col-6">${eval('json.' + el.field)}</div>`
        html += '</div>';
    }))    

    titleElement$.nextElementSibling.innerHTML = html;
}