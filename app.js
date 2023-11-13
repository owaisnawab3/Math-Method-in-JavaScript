//=====================//START//=====================//
//==============//Positive-Integar//============//
document.write("<h3>Positive Integar</h3>")
console.log("Positive Integar")
let number = 3.45214
let round = Math.round(number)
let floor = Math.floor(number)
let ceil = Math.ceil(number)
document.write("number: " + number)
document.write("<br/>round off value: " + round)
document.write("<br/>floor value: " + floor)
document.write("<br/>ceil value: " + ceil)
console.log("number: " + number)
console.log("round off value: " + round)
console.log("floor value: " + floor)
console.log("ceil value: " + ceil)

//===========//Negative-Floating-Point//===========//
document.write("<h3>Negative Floating Point</h3>")
console.log("Negative Floating Point")
let number1 = -2.673
let round1 = Math.round(number1)
let floor1 = Math.floor(number1)
let ceil1 = Math.ceil(number1)
document.write("number: " + number1)
document.write("<br/>round off value: " + round1)
document.write("<br/>floor value: " + floor1)
document.write("<br/>ceil value: " + ceil1)
console.log("number: " + number1)
console.log("round off value: " + round1)
console.log("floor value: " + floor1)
console.log("ceil value: " + ceil1)

//===========//absolute-value-of-a-Number.//===========//
document.write("<h3>absolute value of a number.</h3>")
console.log("absolute value of a number.")
var vlaue = -4
var value1 = 5
var absolute = Math.abs(vlaue)
var absolute1 = Math.abs(value1)
document.write("The absolute value -4 is: " + absolute)
document.write("<br/>The absolute value 5 is: " + absolute1)
console.log("The absolute value -4 is: " + absolute)
console.log("The absolute value 5 is: " + absolute1)

//=============//Display-the-value-of-Dice//=============//
document.write("<h3>Display the value of dice:</h3>")
console.log("Display the value of dice:")
let math = Math.floor(Math.random()*6) + 1
let mathRandom = Math.floor(Math.random()*6) + 1
document.write("random dice value: "+ math)
console.log("random dice value: "+ math)
document.write("random dice value: "+ mathRandom)
console.log("random dice value: "+ mathRandom)

//==========//Display-the-value-of-coin-toss-Head/Tail//==========//
document.write("<h3>Display the value of coin toss Head/Tail:</h3>")
console.log("Display the value of coin toss Head/Tail:")
let coinToss = Math.floor(Math.random()*2) + 1
console.log(coinToss)
if(coinToss == 2 ){
    console.log("Random coin value: Heads")
}
else{
    console.log("Random coin value: Tails")
}

//===========//Random-number-between-1-and-100//============//
document.write("<h3>Random number between 1 and 100.</h3>")
console.log("Random number between 1 and 100.")
let randomNumber = Math.floor(Math.random()*100)+1
document.write("Random number between 1 and 100: "+randomNumber)
console.log("Random number between 1 and 100: "+randomNumber)

//=============//That asks the user about his weight//============//
document.write("<h3>That asks the user about his weight..</h3>")
console.log("That asks the user about his weight..")
let weight = parseInt(prompt("Enter Your weight in kilograms"))

console.log("The weight of user is: "+weight+" kilograms")

//===========//Secret-Number-User-Guess//==========//
document.write("<h3>Secret Number User Guess:</h3>")
console.log("Secret Number User Guess:")
let serectNumber = Number(prompt("Enter a number between 1 to 10."))
let congratulation = Math.floor(Math.random()*10)+1
if(serectNumber === congratulation){
alert("congratulation!\n"+"Your Number = "+serectNumber+"\nWining Number = "+congratulation)
console.log("congratulation!\n"+"Your Number = "+serectNumber+"\nWining Number = "+congratulation)
}
else{
    alert("Try Again!\n"+"Your Number "+serectNumber+"\nWining Number = "+congratulation)
    console.log("Try Again!\n"+"Your Number "+serectNumber+"\nWining Number = "+congratulation)
}

//=====================//END//=====================//