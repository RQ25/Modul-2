// Celsius ke Fahrenheit, Kelvin, Reamur
function konversiCelsius(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    let reamur = celsius * 4/5;
    return { fahrenheit, kelvin, reamur };
}

// Reamur ke Celsius, Kelvin, Fahrenheit
function konversiReamur(reamur) {
    let celsius = reamur * 5/4;
    let kelvin = celsius + 273.15;
    let fahrenheit = (reamur * 9/4) + 32;
    return { celsius, kelvin, fahrenheit };
}

// Kelvin ke Celsius, Reamur, Fahrenheit
function konversiKelvin(kelvin) {
    let celsius = kelvin - 273.15;
    let reamur = (kelvin - 273.15) * 4/5;
    let fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    return { celsius, reamur, fahrenheit };
}

// Fahrenheit ke Celsius, Kelvin, Reamur
function konversiFahrenheit(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    let kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    let reamur = (fahrenheit - 32) * 4/9;
    return { celsius, kelvin, reamur };
}
