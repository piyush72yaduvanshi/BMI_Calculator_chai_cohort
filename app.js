const btn = document.getElementById('calculate');
const input_weight = document.getElementById('weight');
const input_height = document.getElementById('height');
const resultText = document.getElementById('result-text');
const result1 = document.getElementById('result');
const result2 = document.getElementById('result2');

btn.addEventListener('click', () => {
    const weight = input_weight.value;
    const height = input_height.value;
    const bmi = (weight*10000) / (height * height);
    const result = bmi.toFixed(2);
    if(result < 18.5){
        resultText.innerText = "Your BMI Result";
        result1.innerText = result;
        result2.innerText = "Underweight";
        result1.style.color = "yellow";
        result2.style.color = "yellow";
    }else if(result >= 18.5 && result < 24.9){
        resultText.innerText = "Your BMI Result";
        result1.innerText = result;
        result2.innerText = "Normal";
        result1.style.color = "green";
        result2.style.color = "green";
    }else if(result >= 24.9 && result < 29.9){
        resultText.innerText = "Your BMI Result";
        result1.innerText = result;
        result2.innerText = "Overweight";
        result1.style.color = "orange";
        result2.style.color = "orange";
    }else{
        resultText.innerText = "Your BMI Result";
        result1.innerText = result;
        result2.innerText = "Obese";
        result1.style.color = "red";
        result2.style.color = "red";
    }
});