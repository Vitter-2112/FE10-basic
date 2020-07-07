const URL = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = 'bed156d40174100c73406417523ddaf1';

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const country = event.target['country'].value;
    const city = event.target['city'].value;
  
    fetch(`${URL}?country=${country}&q=${city}&APPID=${APPID}`)
        .then(response => response.text())
        .then(text => event.target.nextElementSibling.innerHTML = `<div>${text}</div>`)
})