function calArea(width, height) {
    return width * height;
}
let area = calArea(4, 8);
//console.log(area);

function checkEvenOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    else {
        return "odd";
    }
}
let check = checkEvenOdd(121);
//console.log(check);

function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    }
    else{
        return false;
    }
}
let leapYear = isLeapYear(2005);
//console.log(leapYear);

let arr = [20, 30, 40, 50, 60, 70, 80, 90];
let sum =0;
for(let i =0; i<arr.length; i++){
      sum+=arr[i];
}
//console.log(sum);

let para = document.getElementById("myParagraph");
//console.log(para);
para.textContent = "This text has been changed using JS";


//let container = document.getElementsByClassName("container")[0];
//let btn = document.createElement("button");
//btn.textContent = "click me";
//container.appendChild(btn);

let btn = document.querySelector(".buttonClick");
btn.addEventListener("click", function(){
    alert("button clicked");
});