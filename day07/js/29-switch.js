console.log("Hello");

const priceEl = document.querySelector("#price");
const resultEl = document.getElementById("result");

function setPrice() {
    let result = priceEl.value;
    let discount;


    switch (true) {
        case result >= 1500:
            discount = 15;
            break;
        case result >= 1000:
            discount = 13;
            break;
        case result >= 700:
            discount = 10;
            break;
        case result >= 500:
            discount = 7;
            break;
        case result >= 300:
            discount = 5;
            break;
        default:
            discount = 2;
    }

    result -= result * discount / 100;
    // result = result - result * discount / 100;

    resultEl.innerText = `SONUCT: ${result}₺`;
    // clear input
    priceEl.value = "";
}