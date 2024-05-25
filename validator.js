function validatePassword(password) {

    if (password.length <= 6 || password.length >= 20) {
        return "INVALID";
    }

    let containLetter = false;
    let containDigit = false;

    for (let i = 0; i < password.length; i++) {

        if (password.charCodeAt(i) >= '0'.charCodeAt(0) && password.charCodeAt(i) <= '9'.charCodeAt(0)) {
            containDigit = true;
            continue;
        }

        if (password.charCodeAt(i) >= 'A'.charCodeAt(0)
            && password.charCodeAt(i) <= 'Z'.charCodeAt(0)
            || password.charCodeAt(i) >= 'a'.charCodeAt(0)
            && password.charCodeAt(i) <= 'z'.charCodeAt(0)) {
            containLetter = true;
            continue;
        }

        return "INVALID";
    }

    return containLetter && containDigit
        ? "VALID"
        : "INVALID";
}

console.log(validatePassword("pass"));
console.log(validatePassword("TcSf12y"));