function generatePassword(length) {

    const uppercase =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const lowercase =
    "abcdefghijklmnopqrstuvwxyz";

    const numbers =
    "0123456789";

    const symbols =
    "!@#$%^&*";

    const all =
    uppercase +
    lowercase +
    numbers +
    symbols;

    let password = "";

    for (let i = 0; i < length; i++) {
        const random =
        Math.floor(Math.random() * all.length);

        password += all[random];
    }

    return password;
}

console.log(generatePassword(12));