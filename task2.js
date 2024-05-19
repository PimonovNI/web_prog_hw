function taskOperation() {
    return "string" + 2;
}

let nanResult1 = Number(taskOperation());
console.log(nanResult1);

let nanResult2 = parseInt(taskOperation());
console.log(nanResult2);