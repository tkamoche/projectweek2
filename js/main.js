const day_Of_The_Week = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];

const male_Names = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

const female_Names = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

var day

var CC

var YY

var MM

var DD

var gender

//get user imput

//get user's birthday

//get user's gender



//calculate day of birth



function getGender () {

    gender = document.querySelector("#gender").value;

    console.log(gender);
}



var date

function getSelectedDate () {

    date = document.getElementById ("date").value;

    console.log(date);

CC = date.slice(0, 2);

CC = parseInt(CC);

YY = date.slice (2, 4);

YY = parseInt(YY);

MM = date.slice(5, 7);

MM = parseInt(MM);

DD = date.slice(8, 10);

DD= parseInt(DD);

// console.log(CC);

// console.log(YY);

// console.log(MM);

// console.log(DD);

// console.log(day)

}


function getAkanName(){

    getSelectedDate ();

console.log(CC);

console.log(YY);

console.log(MM);

console.log(DD);

console.log(day)

    // if (!date){alert("Please pick your birthday");



    // return false;



    
day = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + (DD - 0.5)) % 7;

day = Math.floor(day);

console.log(day);

if (gender === "Male"){
akanName = male_Names[day];

document.getElementById("AkanButton").innerHTML = "You were born on a " + day_Of_The_Week[day] + ". Your Akan name is " + akanName + ".";
 }

else if (gender === "Female"){
akanName = female_Names[day];
document.getElementById("AkanButton").innerHTML = "You were born on a " + day_Of_The_Week[day] + ". Your Akan name is " + akanName + ".";}

else{alert("Please Pick Your Gender!");
}}




// var CC = year.slice(0,2);

// CC=parseInt(CC)

// console.log(CC);



// var day_of_the_week =(century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) %7
