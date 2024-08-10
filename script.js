function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    
    if(weight > 0 && height > 0){
        var bmi = weight / (height * height);
        document.getElementById('result').innerHTML = "Your BMI is " + bmi.toFixed(2);
    } else {
        document.getElementById('result').innerHTML = "Please enter valid values.";
    }
}