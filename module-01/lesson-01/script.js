// 1
console.log("Ivan");
//2
console.log(9);
//3
console.log("Ласкаво " + " просимо " + " на курс");
//4
//alert(2019);
//5
console.log(2019 - 200);
//6
document.getElementById("six").textContent = "Hello World";
//7
document.getElementById("seven").textContent = 12 * 12;
//8
document.querySelector("div.out-8").textContent = "task-8";
//9
document.querySelector(".out-8").textContent = "World";
//10
document.querySelector("div.out-10").innerHTML = "<h2>Hi</h2>";
//11
document.querySelector("div.out-11").innerHTML = 123;
document.querySelector("div.out-11").innerHTML += 456;
//12
let a = document.querySelector("div.out-12");
a.innerHTML = 3.1415;
//13
let out13 = document.querySelector("div.out-13");
out13.innerHTML =
  '<img src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a" alt="js" width="400" >';
//14
const z1 = 6;
const z2 = 3;
document.querySelector("div.out-14").textContent = z1 * z2;
//15
const y1 = 6;
const y2 = 3;
document.querySelector("div.out-15").textContent = y1 / y2;
//16
const x1 = "Hello";
const x2 = 5;
document.querySelector("div.out-16").textContent = x1 + x2;
//17
const out17 = document.querySelector("div.out-17");
console.log(out17);
//18
let out18 = document.querySelector("div.out-18");
console.log(out18);
out18 = 5;
console.log(out18);
//19
let out19 = document.querySelector("div.out-19");
console.log("🚀 ~ out19:", out19);
out19 = document.querySelector("out-19-test");
console.log("🚀 ~ out19:", out19);
//20
let out20 = (document.querySelector("div.out-20").textContent = "<h2>Hi</h2>");
console.log(out20);
