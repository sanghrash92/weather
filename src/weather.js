import view from './view.js'

const weather = (() => {

    function convertData(name, temperature, humidity) {
        return { name, temperature, humidity };
    }
    
    async function weatherData(city) {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=52d1cc138f9f45f3b48195438230908&q=${city}&aqi=no`, {mode:'cors'});
        try {
            const information = response.json();
            const data = await information;
            const dataCurrent = data.current.temp_c;
            const dataLocation = data.location.name;
            const humidity = data.current.humidity;
            const convert = convertData(dataLocation, dataCurrent, humidity);
            view.getResult(convert);
            return convert;
        } catch (error) {
            alert(error);
            return null;
        }
    };
    return { weatherData }
})();

export default weather;