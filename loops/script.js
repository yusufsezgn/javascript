// If else

let firstname, surname;

firstname = "Yusuf";
surname = "Sezgin";

if (firstname === "Yusuf" && surname === "Sezgin") {
  alert(true);
} else {
  alert(false);
}

// Switch Case

let day = "Thursday";

switch (day) {
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
  case "Wednesday":
    console.log("Wednesday");
    break;
  case "Thursday":
    console.log("Thursday");
    break;
  case "Friday":
    console.log("Friday");
    break;

  default:
    console.log("Weekday");
    break;
}

// For

for(let i = 0; i <= 100; i++) {
    console.log(i);
}

// While

let i = 0;

while(i < 10) {
    i++;
    console.log(i);
}