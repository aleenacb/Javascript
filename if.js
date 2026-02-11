const age = 14;
if (age >= 18) {
    console.log("Your an adult");
} else {
    console.log("You are not an adult");
}

//if..else..if
const temp = 24;
if (temp > 30) {
    console.log("It's hot");
} else if (temp >= 20) {
    console.log("It's warm");
} else {
    console.log("It's cold");
}

//Switch statement
const day = "Friday";
switch(day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("it's regular day");
}