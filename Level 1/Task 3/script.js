function convertTemperature() {
    // Get the input temperature and selected unit
    const temperature = parseFloat(document.getElementById("temperatureInput").value);
    const unit = document.getElementById("unitSelect").value;
    const resultDisplay = document.getElementById("resultDisplay");

    // Validate if the input is a number
    if (isNaN(temperature)) {
        resultDisplay.innerHTML = "Please enter a valid number for temperature.";
        return;
    }

    let convertedTemperature;
    let convertedUnit;

    // Conversion logic
    if (unit === "Celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
        resultDisplay.innerHTML = `${temperature}° Celsius is ${convertedTemperature.toFixed(2)}° Fahrenheit`;

        // Celsius to Kelvin
        let kelvin = temperature + 273.15;
        resultDisplay.innerHTML += `<br>${temperature}° Celsius is ${kelvin.toFixed(2)} K`;
    } 
    else if (unit === "Fahrenheit") {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = "Celsius";
        resultDisplay.innerHTML = `${temperature}° Fahrenheit is ${convertedTemperature.toFixed(2)}° Celsius`;

        // Fahrenheit to Kelvin
        let kelvin = (temperature - 32) * 5/9 + 273.15;
        resultDisplay.innerHTML += `<br>${temperature}° Fahrenheit is ${kelvin.toFixed(2)} K`;
    } 
    else if (unit === "Kelvin") {
        convertedTemperature = temperature - 273.15;
        convertedUnit = "Celsius";
        resultDisplay.innerHTML = `${temperature} K is ${convertedTemperature.toFixed(2)}° Celsius`;

        // Kelvin to Fahrenheit
        let fahrenheit = (temperature - 273.15) * 9/5 + 32;
        resultDisplay.innerHTML += `<br>${temperature} K is ${fahrenheit.toFixed(2)}° Fahrenheit`;
    }
}
