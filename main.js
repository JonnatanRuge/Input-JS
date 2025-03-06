// Selección de los inputs del formulario
const inputCard = document.querySelector("#inputCard");
const inputCVV = document.querySelector("#inputCVV");
const inputDate = document.querySelector("#inputDate");

// Máscaras para los formatos de la tarjeta, fecha de expiración y CVV
const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

// Variables para almacenar los valores ingresados
let current ="";
let cardNumber = [];
let cvvNumber = [];
let dateNumber = [];

// Evento para capturar la entrada en el campo de número de tarjeta
inputCard.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        return; 
    } 

    e.preventDefault(); 
    handleInput(maskNumber, e.key, cardNumber);
    inputCard.value = cardNumber.join(""); 
});

// Evento para capturar la entrada en el campo de fecha de expiración
inputDate.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        return; 
    } 

    e.preventDefault(); 
    handleInput(maskDate, e.key, dateNumber); 
    inputDate.value = dateNumber.join(""); 
});

// Evento para capturar la entrada en el campo CVV
inputCVV.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        return; 
    } 

    e.preventDefault(); 
    handleInput(maskCVV, e.key, cvvNumber); 
    inputCVV.value = cvvNumber.join(""); 
});

function handleInput(mask, key, arr) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // Si el usuario presiona "Backspace", elimina el último carácter ingresado
    if (key === "Backspace" && arr.length > 0) {
        arr.pop();
        return;
    }

    // Si la tecla presionada es un número y hay espacio en la máscara
    if (numbers.includes(key) && arr.length + 1 <= mask.length) {
        // Si la siguiente posición en la máscara es un carácter especial (- o /), agrégalo antes del número
        if (mask[arr.length] === "-" || mask[arr.length] === "/") {
            arr.push(mask[arr.length], key);
        } else {
            arr.push(key);
        }
    }
}
