// Put your code here
console.log("Let's roll some dice, baby!")
console.log("-----------------------------")


let roll = () => Math.floor(Math.random() * (6 - 1) + 1);


for (let i = 0; i < 10; i++) {

    let die1 = roll();
    let die2 = roll();

    let result = `${die1} + ${die2}`;

    if (die1 == die2) {
        console.log(result + " = DOUBLES!")
    } else {
        console.log(result + " = " + `${die1 + die2}`)
    }
}