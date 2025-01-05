// api = 5d834009a3ec44b6a16150315250501

const button = document.getElementById('searchButton');
const input = document.getElementById('cityInput');

const cityName = document.getElementById('cityName');
const cityTime = document.getElementById('cityTime');
const cityTemp = document.getElementById('cityTemp');


async function getData(cityName){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=5d834009a3ec44b6a16150315250501&q=${cityName}&aqi=yes`);

    return await promise.json();
}

button.addEventListener('click',async ()=>{
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = `${result.current.temp_c} degree celsius`;
});


// api link = https://api.weatherapi.com/v1/current.json?key=5d834009a3ec44b6a16150315250501&q=chennai&aqi=yes