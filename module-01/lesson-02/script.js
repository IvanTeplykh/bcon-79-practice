//1
const a = 7;
const b = 9;
console.log(a * b);
//2
const c = 7;
const d = 9;
document.querySelector(".out-2").textContent = c / d;
//3
const e = 3;
const f = 5;
document.querySelector(".out-3").textContent = e + f;
//4
const e1 = "3";
const f1 = 5;
document.querySelector(".out-4").textContent = e1 + f1;
//5
const e2 = 3;
const f2 = 0;
document.querySelector(".out-5").textContent = e2 / f2;
//6
const e3 = 3;
const f3 = "Hello";
document.querySelector(".out-6").textContent = e3 + f3;
//7
const e4 = 3;
const f4 = "Hello";
document.querySelector(".out-7").textContent = e4 * f4;
//8
function t8() {
  let content = document.querySelector(".i-8").value;
  document.querySelector(".out-8").textContent = content;
}
document.querySelector(".b-8").onclick = t8;
//9
function t9() {
  let content = document.querySelector(".i-9").value;
  document.querySelector(".out-9").textContent = content;
  document.querySelector(".i-9").value = "";
}
document.querySelector(".b-9").onclick = t9;
//10
function t10() {
  let content = document.querySelector(".i-10").value * 20;
  document.querySelector(".out-10").textContent = content;
  document.querySelector(".i-10").value = "";
}
document.querySelector(".b-10").onclick = t10;
//11
function t11() {
  let content = document.querySelector(".i-11").value + 55;
  document.querySelector(".out-11").textContent = content;
  document.querySelector(".i-11").value = "";
}
document.querySelector(".b-11").onclick = t11;
//12
function t12() {
  let content1 = document.querySelector(".i-12-1").value;
  let content2 = document.querySelector(".i-12-2").value;
  document.querySelector(
    ".out-12"
  ).textContent = `Hello ${content1} ${content2}`;
}
document.querySelector(".b-12").onclick = t12;
//13
function t13() {
  let a = Number(document.querySelector(".i-13-1").value);
  let b = Number(document.querySelector(".i-13-2").value);
  document.querySelector(".out-13").textContent = a + b;
}
document.querySelector(".b-13").onclick = t13;
//14
function t14() {
  document.querySelector(".i-14").value = "Go";
}
document.querySelector(".b-14").onclick = t14;
//15
function t15() {
  document.querySelector(".i-15").style.border = "4px solid red";
}
document.querySelector(".b-15").onclick = t15;
//16
function t16() {
  document.querySelector(".out-16").textContent =
    document.querySelector(".i-16-1").value +
    document.querySelector(".i-16-2").value;
}
document.querySelector(".b-16").onclick = t16;
//17
{
  let number = 0;
  function t17() {
    const a = document.querySelector(".out-17-1");
    const b = document.querySelector(".out-17-2");
    const c = document.querySelector(".out-17-3");
    const array = [a, b, c];

    const outputs = document.querySelectorAll("[class*='out-17-']");
    console.log(outputs);

    const content = document.querySelector(".i-17").value;
    const contentIndex = `${content}; Type Number : ${Number(
      content
    )}; parseFloat : ${parseFloat(content)} `;
    const index = number++;

    if (content !== "") {
      document.querySelector(".i-17").placeholder = "";

      if (index < array.length) {
        array[index].textContent = contentIndex;
      } else {
        alert("Заповнені всі поля!");
        document.querySelector(".i-17").placeholder = "Заповнені всі поля!";
        document.querySelector(".i-17").style.border = "1px solid red";
      }
    } else {
      document.querySelector(".i-17").placeholder = "Введіть текст";
    }
    document.querySelector(".i-17").value = "";
  }
  document.querySelector(".b-17").onclick = t17;
}

//18
function t18() {
  const a = document.querySelector(".i-18").value;
  document.querySelector(".out-18").textContent = parseFloat(a);
}
document.querySelector(".b-18").onclick = t18;
//19
function t19() {
  document.querySelector(".out-19").textContent =
    document.querySelector(".i-19-1").value +
    document.querySelector(".i-19-2").value;
}
document.querySelector(".b-19").onclick = t19;
//20
{
  let click = 0;
  function t20() {
    document.querySelector(".out-20").textContent = click;
    click++;
  }
  document.querySelector(".b-20").onclick = t20;
}
