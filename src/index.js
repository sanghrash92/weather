import './style.css';
import weather from './weather.js';

const form = document.getElementById('search');
const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");

form.addEventListener('submit', (e) => {
    e.preventDefault();
});


btn.addEventListener("click", async() => {
    if(input.value === "") return;
    await weather.weatherData(input.value)
})