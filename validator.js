function validatePassword(password) {

    if (password.length <= 6 || password.length >= 20) {
        return "INVALID";
    }

    let containLetter = false;
    let containDigit = false;

    let patter = function (code) {
        if (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) {
            containDigit = true;
            return true;
        }

        if (code >= 'A'.charCodeAt(0)
            && code <= 'Z'.charCodeAt(0)
            || code >= 'a'.charCodeAt(0)
            && code <= 'z'.charCodeAt(0)) {
            containLetter = true;
            return true;
        }

        return false;
    }

    password.split('').forEach(letter => {
        if (!patter(letter.charCodeAt(0))) {
            return "INVALID";
        }
    });

    return containLetter && containDigit
        ? "VALID"
        : "INVALID";
}

console.log(validatePassword("pass"));
console.log(validatePassword("TcSf12y"));