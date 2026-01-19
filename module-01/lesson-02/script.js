//1

const a = 7;
const b = 9;
const result = a * b;
console.log("🚀 ~ t12 ~ result:", result);
console.log("🚀 ~ t12 ~ result:", result);
console.log("🚀 ~ result:", result);

//2
const out2 = document.querySelector(".out-2");
const c = 7;
const d = 9;
out2.textContent = c / d;
console.log("🚀 ~ out2:", out2);

//3
const e = 3;
const f = 5;
const out3 = document.querySelector(".out-3");
out3.textContent = e + f;
console.log(out3);

/*   ()
{ }
[]

zeichenb kette
string
"abc"
zeichen char
'a'

 */

//4
const e1 = "3";
const f1 = 5;
const out4 = document.querySelector(".out-4");
out4.textContent = e1 + f1;
console.log("🚀 ~ out4:", out4);

//5
const e2 = 3;
const f2 = 0;
const out5 = document.querySelector(".out-5");
console.log("🚀 ~ out5:", out5);
out5.textContent = e2 / f2;

//6
const e3 = 3;
const f3 = "Hello";
const out6 = document.querySelector(".out-6");
out6.textContent = e3 + f3;
console.log("🚀 ~ out6:", out6);

//7
const e4 = 3;
const f4 = "Hello";
const out7 = document.querySelector(".out-7");
out7.textContent = e4 * f4;
console.log("🚀 ~ out7:", out7);

//8
const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");
console.log("🚀 ~ out8:", out8);

btn8.onclick = fn8;

function fn8() {
  out8.textContent = input8.value;
  console.log("🚀 ~ fn8 ~ out8:", out8.textContent);
  input8.value = "";
}

//9

const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = fn9;

function fn9() {
  out9.textContent = input9.value;
  input9.value = "";
}

//10

const btn10 = document.querySelector(".b-10");
const input10 = document.querySelector(".i-10");
const out10 = document.querySelector(".out-10");

btn10.onclick = t10;

/* function t10() {
  out10.textContent = input10.value * 20;
  console.log("🚀 ~ t10 ~ out10:", out10);
} */

function t10() {
  let peter = input10.valueAsNumber;

  let multiplikationMit20 = peter * 20;
  out10.textContent = multiplikationMit20;
}

//11
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");
const input11 = document.querySelector(".i-11");

btn11.onclick = t11;

function t11() {
  let inputValue = input11.valueAsNumber;
  let addition = inputValue + 55;
  out11.textContent = addition;
}

//12
const btn12 = document.querySelector(".b-12");
const input121 = document.querySelector(".i-12-1");
const input122 = document.querySelector(".i-12-2");
const out12 = document.querySelector(".out-12");
btn12.onclick = t12;

function t12() {
  //  "Hello Nataliia Bulavina"
  const firstName = input121.value;
  const secondName = input122.value;

  /*   let result = "Hello " + firstName + " "+ secondName;
  out12.textContent = result;
  console.log("🚀 ~ t12 ~ out12:", out12) */

  let result = "Hello " + firstName + " " + secondName;
  out12.textContent = result;
  console.log("🚀 ~ t12 ~ out12:", out12);
}

//13
const btn13 = document.querySelector(".b-13");
const input131 = document.querySelector(".i-13-1");
const input132 = document.querySelector(".i-13-2");
const out13 = document.querySelector(".out-13");

btn13.onclick = t13;

function t13() {
  let a = parseFloat(input131.value);
  let b = parseFloat(input132.value);
  let sum = a + b;
  console.log("🚀 ~ t13 ~ sum:", sum);
  out13.textContent = sum;

  /*   out13.textContent =
    parseFloat(document.querySelector(".i-13-1").value) +
    parseFloat(document.querySelector(".i-13-2").value); */
}

//14
