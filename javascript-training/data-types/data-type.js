let num1=20;
let num2=100.94;

console.log(typeof num1);
console.log(typeof num2);


let firstName = "'Ms' pallavi";
let lastName = '"Mr" mahendra';

console.log(firstName+' '+lastName);






/* Non primitive data type */

let empData =
{
"empName" : "Pallavi",
"empAge" : 32,
"empId" : 13186,
"empVisaStatus" : true,
"empAddress" :
{
    "empCity" : "Bangalore",
    "empState" : "Karnataka",
    "empCountry" : "India",
}
}

console.log(empData);
console.log(empData.empName);
console.log(empData.empAddress);
console.log(empData["empId"]);

// Array 

// Before array

let veg1="carrot";
let veg2="Aloo";
let veg3="Brijal";

// After array

let fruits = ["carrot","Aloo","Brinjal"];
let price = [80,30,60];
let fruitsPrices = ["carrot",80,"Aloo",30,"Brinjal",60];

console.log(fruits);
console.log(price);
console.log(fruitsPrices);

console.log(fruits[0]);
console.log(price[2]);