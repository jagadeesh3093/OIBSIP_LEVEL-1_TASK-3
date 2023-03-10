function convertTemperature() {
    var degreeInput = document.getElementById("degree-input");
    var out=document.getElementById("output");
    var conversionType = document.getElementById("conversion-type").value;
    var resultBox = document.getElementById("result-box");
    var celsius = parseFloat(degreeInput.value);
    var op = parseFloat(out.value);
    if (isNaN(celsius)) {
        resultBox.innerHTML = "Please enter valid numbers.";
        return;
      }
    if (conversionType === "celsius-to-fahrenheit") {
        op= (celsius * 9/5) + 32;
        out.value = op.toFixed(4)+ "\u00B0"+"F";
        resultBox.innerHTML = celsius.toFixed(2) + " degrees Celsius is equal to " + op.toFixed(2) + " degrees Fahrenheit.";
    } 
    else if (conversionType === "kelvin-to-fahrenheit"){
        op=(celsius - 273.15) * 9/5 + 32;
        out.value = op.toFixed(4)+ "\u00B0"+"F";
        resultBox.innerHTML = celsius.toFixed(2) + " degrees Kelvin is equal to " + op.toFixed(2) + " degrees Fahrenheit.";
    }
    else if (conversionType === "fahrenheit-to-celsius") {
        op = (celsius - 32) * 5/9;
        out.value = op.toFixed(4)+ "\u00B0"+"C";
        resultBox.innerHTML = celsius.toFixed(2) + " degrees Fahrenheit is equal to " + op.toFixed(2) + " degrees Celsius.";
    }
    else if (conversionType === "kelvin-to-celsius"){
        op= celsius-273.15;
        out.value =op.toFixed(4)+"\u00B0"+"C";
        resultBox.innerHTML = celsius.toFixed(2) + " degrees Kelvin is equal to " + op.toFixed(2) + " degrees Celsius.";
    }
    else if (conversionType === "fahrenheit-to-kelvin"){
        op=(celsius - 32) * 5/9 + 273.15;
        out.value = op.toFixed(4) +"\u00B0"+"K"
        resultBox.innerHTML = celsius.toFixed(2) + " degrees Fahrenheit is equal to " + op.toFixed(2) + " degrees kelvin.";
    }
    else if (conversionType === "celsius-to-kelvin"){
        op= celsius+273.15;
        out.value = op.toFixed(4)+ "\u00B0"+"K";
        resultBox.innerHTML = celsius.toFixed(2) + " degrees Celsius is equal to " + op.toFixed(2) + " degrees kelvin.";
    }
    else {
        resultBox.innerHTML = "Please select a conversion type.";
      }
}