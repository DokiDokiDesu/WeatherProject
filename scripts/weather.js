import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const now = dayjs();
document.querySelector('.date').innerHTML = now.format('dddd, MMM D');

setInterval(()=>{
document.querySelector('.time').innerHTML = dayjs().format('HH:mm:ss');
},1000);

function switchToIndex() {
  window.location.href = 'index.html';
}
window.switchToIndex = switchToIndex;
