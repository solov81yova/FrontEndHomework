/*Страничка с формой расчета индекса массы тела человека Создать форму, у которой 2 поля, и 1 кнопка. 
Поля предусматривают ввод роста и веса человека, кнопка - отправку данных.
Также предусмотреть блок, в который будет выводиться результат расчета индекса массы тела (BMI), 
и второй блок - результат, который будет говорить о том, соответствует ли индекс массы тела норме.
*/

const nameApp = document.querySelector('.name-application');
nameApp.textContent = 'Calculation of ideal weight through body mass index (BMI)';
console.log(nameApp);

const inputElement1 = document.querySelector('#height');
const inputElement2 = document.querySelector('#weight');


const buttonElement = document.querySelector('#orange-button');
console.log(buttonElement);

const btnClickHandler = () => {
    const height = inputElement1.value;
    const weight = inputElement2.value;
    const bodyMassIndex = (weight / ((height / 100) ** 2)).toFixed(1);
    let result = ' ';
    if (bodyMassIndex < 18.5) {
        result = 'Underweight';
    } else if (bodyMassIndex >= 18.5 && bodyMassIndex < 24.9) {
        result = 'Normal weight. Our congratulations!';
    } else if (bodyMassIndex >= 25 && bodyMassIndex < 29.9) {
        result = 'Overweight';
    } else {
        result = 'Obese';
    }

    const valueBodyMassIndex = document.querySelector('.valueBMI');
    valueBodyMassIndex.textContent = 'Your BMI is: ' + bodyMassIndex;
    console.log(valueBodyMassIndex);

    const resultBodyMassIndex = document.querySelector('.resultBMI');
    resultBodyMassIndex.textContent = 'Value of the index: ' + result;

    const link = document.createElement('a');
    link.href = './index.html';
    // link.textContent = 'Link BMI index';
    // textElement.append(link);

    const img = document.createElement('img');
    img.src = './images/640px-BMI_chart.png';
    img.alt = 'bmi_image';
    img.textContent = 'Link for image';
    link.append(img);
}

buttonElement.addEventListener('click', btnClickHandler);

