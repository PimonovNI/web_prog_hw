function readDiscount() {
    let discount = prompt("Enter discount in percents, please:");
    return parseInt(discount);
}

let currentPrice = 12.5;
const discount = readDiscount()

if (isNaN(discount)) {
    console.log("Пожалуйста - введите скидку в числовом формате");
} else {
    currentPrice -= currentPrice * discount / 100;
    const output = `Яблоки украинские.
цена: ${Math.round(currentPrice * 100) / 100}грн.`

    console.log(output)
}
