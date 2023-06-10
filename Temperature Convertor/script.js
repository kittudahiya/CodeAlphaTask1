function convertTemperature() {
    var celsiusInput = document.getElementById('celsius');
    var resultElement = document.getElementById('result');
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
  
    resultElement.textContent = fahrenheit.toFixed(2) + '°F';
  }
  