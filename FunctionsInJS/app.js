function multipleGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func();
    }
}
let greet = function () {
    console.log("hello");
}
//multipleGreet(greet, 5);

const students = {
    name: "Dhami",
    age: 25,
    eng: 99,
    math: 98,
    physics: 99.9,
     getAvg(){
        console.log((this.eng+this.math+this.physics)/3);
     }
}
students.getAvg();

