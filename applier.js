function applyAll(fun, ...args) {
    return fun.apply(this, args)
}

/**
 * Testing.
 */

let sum = function (...args) {
    let res = 0;
    args.forEach(arg => res += arg);
    return res;
}

let mul = function (...args) {
    let res = 1;
    args.forEach(arg => res *= arg);
    return res;
}

console.log(applyAll(sum, 1, 2, 3))
console.log(applyAll(mul, 1, 2, 3, 4))