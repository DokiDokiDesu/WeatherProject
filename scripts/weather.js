import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const apiKey = "fe9dc2b6fa41beb5046b3709a356bdc9";
const now = dayjs();

document.querySelector('.date').innerHTML = now.format('dddd, MMM D');

setInterval(()=>{
document.querySelector('.time').innerHTML = dayjs().format('HH:mm:ss');
},1000);

updateWeather();


function updateWeather() {
  const city = localStorage.getItem('cityInput');  
  if (!city) {
    alert('search box can not be empty');
    switchToIndex();
    return;
  }

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Şehir bulunamadı");
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;

      document.querySelector('.weather-celc').innerHTML = `<p><strong>${temp} °C</strong></p>`;
      document.querySelector('.weather-info').innerHTML = description;
      document.querySelector('.location').innerHTML = name;   
      document.querySelector('.weather-pic').innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`;
    })
    
    .catch(err => {
      alert('error,city cannot be found');
      switchToIndex();
    });
}

function switchToIndex() {
  window.location.href = 'index.html';
}
window.switchToIndex = switchToIndex;
