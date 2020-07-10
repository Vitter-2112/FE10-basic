

fetch('/weather-fetch/config.json')
    .then(response => response.json())
    .then(config => {
        console.log(config);
        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            const country = event.target['country'].value;
            const city = event.target['city'].value;
            
            console.log(config);
            
            fetch(`${config.URL}?country=${country}&q=${city}&APPID=${config.APPID}`)
                .then(response => response.json())
                .then(json => showWeather(json, event.target, config));
        })
        
    })
    .catch(error => console.log(error));

    function showWeather(json, target, config) {
        
        console.log(json);
        console.log(config);
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