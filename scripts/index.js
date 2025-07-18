const searchButton = document.querySelector('.search-button');
let cityInput;

searchButton.addEventListener('click',()=>{
  
  cityInput = document.querySelector('.city-input').value;
  localStorage.setItem('cityInput',cityInput);
  switchToWeather();
});

function switchToWeather() {
  window.location.href = 'weather.html';

}
