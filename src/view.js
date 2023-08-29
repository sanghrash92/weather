const view = (() => {
    
    function getResult(data) {
        if(!data) return;
        const result = document.getElementById('result');
        result.classList.add('add-on');
    
        const cityName = document.getElementById('name');
        const temp = document.getElementById('temp');
        const humidity = document.getElementById('humidity')
    
        cityName.textContent = data.name;
        temp.textContent = 'Temperature : ' + data.temperature + '°C';
        humidity.textContent = 'Humidity : ' + data.humidity + '°C';
    }

    return { getResult };
})();


export default view;