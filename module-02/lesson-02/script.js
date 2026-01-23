//  Task 1
// Кнопка .b-1 запускає функцію fn1. Функція повинна виводити в .out-1 рядок вигляду:
//     1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.

function f1() {
  let string = "";
  for (let i = 1; i <= 16; i++) {
    string += `${i}_`;
  }
  document.querySelector(".out-1").textContent = string;
}
document.querySelector(".b-1").onclick = f1;

//  Task 2
// Кнопка .b-2 запускає функцію fn2. Функція повинна виводити в .out-2 рядок вигляду:
//     12_14_16_18_20_22_24_26_28_30_32_34_36_38_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.

function f2() {
  let string = "";
  for (let i = 12; i <= 38; i += 2) {
    string += `${i}_`;
  }
  document.querySelector(".out-2").textContent = string;
}
document.querySelector(".b-2").onclick = f2;

//  Task 3
// Кнопка .b-3 запускає функцію fn3. Функція повинна виводити в .out-3 рядок вигляду:
//  25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.

function f3() {
  let string = "";
  for (let i = 25; i >= 7; i--) {
    string += `${i}_`;
  }
  document.querySelector(".out-3").textContent = string;
}
document.querySelector(".b-3").onclick = f3;

//  Task 4
// Кнопка .b-4 запускає функцію fn4. Функція повинна виводити в .out-4 рядок вигляду:
//     77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// від 77 до 35 з кроком 3. Роздільник - знак підкреслення. Завдання вирішується за допомогою циклу.

function f4() {
  let string = "";
  for (let i = 77; i >= 35; i -= 3) {
    string += `${i}_`;
  }
  document.querySelector(".out-4").textContent = string;
}
document.querySelector(".b-4").onclick = f4;

//  Task 5
// Кнопка .b-5 запускає функцію fn5. Функція повинна виводити в .out-5 рядок вигляду:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// від 1 до 17 з кроком 1. Роздільник - знак підкреслення та зірочка (якщо число непарне, і дві зірочки, якщо парне). Завдання вирішується за допомогою циклу.

function f5() {
  let string = "";
  for (let i = 1; i <= 17; i++) {
    if (i % 2 === 0) {
      string += `${i}_**`;
    } else {
      string += `${i}_*`;
    }
  }
  document.querySelector(".out-5").textContent = string;
}
document.querySelector(".b-5").onclick = f5;

//  Task 6
// Кнопка .b-6 запускає функцію fn6. Функція повинна виводити в .out-6 рядок вигляду:
//
// ******<br>
// ******<br>
// ******<br>
//
// Завдання вирішується за допомогою циклу. В кожній ітерації цикл виводить 6 зірочок. Перенесення рядка - br. Кількість рядків (ітерацій, повторень) циклу вводить користувач в i-6.
//

function f6() {
  let string = "";
  for (let i = 1; i <= Number(document.querySelector(".i-6").value); i++) {
    string += "******<br>";
  }
  document.querySelector(".out-6").innerHTML = string;
}
document.querySelector(".b-6").onclick = f6;

//  Task 7!!
// Є input .i-7, куди користувач може ввести число більше нуля (перевірок не робимо, приймаємо як факт).
// Після натискання кнопки .b-7 повинна запускатися функція fn7, яка виводить в .out-7 числа від введеного користувачем до нуля включно.
// Роздільник - знак підкреслення. Якщо користувач ввів 4 і натиснув кнопку, ми отримаємо:
// 4_3_2_1_0_
// Завдання вирішується за допомогою циклу.

function fn7() {
  const input = Number(document.querySelector(".i-7").value);
  let output = "";
  for (let i = input; i >= 0; i--) {
    output += `${i}_`;
  }
  document.querySelector(".out-7").textContent = output;
}
document.querySelector(".b-7").onclick = fn7;

//  Task 8!!
// Є input .i-81 та .i-82, куди користувач може ввести числа більше нуля (перевірок не робимо, приймаємо як факт).
// Вважаємо, що друге число завжди більше першого.
// Після натискання кнопки .b-8 повинна запускатися функція fn8, яка виводить в .out-8 числа від першого введеного до другого включно, з кроком 1.
// Роздільник - підкреслення. Якщо користувач ввів 4 і 8 і натиснув кнопку, ми отримаємо:
//  4_5_6_7_8_
// Завдання вирішується за допомогою циклу.

function fn8() {
  const inputMin = Number(document.querySelector(".i-81").value);
  const inputMax = Number(document.querySelector(".i-82").value);
  let output = "";
  for (let i = inputMin; i <= inputMax; i++) {
    output += `${i}_`;
  }
  document.querySelector(".out-8").textContent = output;
}
document.querySelector(".b-8").onclick = fn8;

//  Task 9!!
// Є input .i-91 та .i-92, куди користувач може ввести числа.
// Після натискання кнопки .b-9 повинна запускатися функція fn9, яка виводить в .out-9 числа від меншого введеного до більшого включно, з кроком 1.
// Роздільник - підкреслення. Якщо користувач ввів 4 і 8 і натиснув кнопку, ми отримаємо:
// 4_5_6_7_8_
// якщо ввів 8 і 6, то отримаємо
// 6_7_8_
// Завдання вирішується за допомогою циклу. Підказка - спочатку робимо перевірку, а потім запускаємо цикл.
// цикл - один

function fn9() {
  const input1 = Number(document.querySelector(".i-91").value);
  const input2 = Number(document.querySelector(".i-92").value);
  let output = "";

  const min = input1 > input2 ? input2 : input1;
  const max = input1 > input2 ? input1 : input2;

  for (let i = min; i <= max; i++) {
    output += `${i}_`;
  }

  // if (input1 > input2) {
  //   for (let i = input2; i <= input1; i++) {
  //     output += `${i}_`;
  //   }
  // } else {
  //   for (let i = input1; i <= input2; i++) {
  //     output += `${i}_`;
  //   }
  // }
  document.querySelector(".out-9").textContent = output;
}
document.querySelector(".b-9").onclick = fn9;

//  Task 10
// Кнопка .b-10 запускає функцію fn10. Функція повинна виводити в .out-10 парні роки від 1950 до 1970 включно.
// Роздільник - знак підкреслення. Завдання вирішується через цикл, а парність - через крок (рівний 2).

function f10() {
  let string = "";
  for (let i = 1950; i <= 1970; i += 2) {
    string += `${i}_`;
  }
  document.querySelector(".out-10").textContent = string;
}
document.querySelector(".b-10").onclick = f10;

//  Task 11
// Кнопка .b-11 запускає функцію fn11. Функція повинна:
// - отримати всі div.div-11 у змінну divs11
// - перебрати їх за допомогою циклу. Звернення до div виглядає так: divs[i].innerHTML
// - вивести в .out-11 вміст кожного блоку. Роздільник - знак підкреслення.
// В результаті повинно вийти так:
//     one_3_4_two_

function f11() {
  const inputs = document.querySelectorAll("[class*='div-11']");
  let outputs = "";
  for (let i = 0; i < inputs.length; i++) {
    outputs += inputs[i].innerHTML + "_";
  }
  document.querySelector(".out-11").textContent = outputs;
}
document.querySelector(".b-11").onclick = f11;
//  Task 12
// Кнопка .b-12 запускає функцію fn12. Функція повинна:
// - отримати всі div.div-12
// - перебрати їх за допомогою циклу. Звернення до div виглядає так: elem[i]
// - застосувати до кожного elem[i].style.background = ‘orange’

function f12() {
  const inputs = document.querySelectorAll("[class*='div-12']");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.background = "orange";
  }
}
document.querySelector(".b-12").onclick = f12;

//  Task 13
// За допомогою циклу привласніть всім input .i-13 value рівне:
// - для першого  1
// - для другого  2
// - для третього 3
{
  const array = document.querySelectorAll("[class*='i-13']");
  for (let i = 0; i < array.length; i++) {
    array[i].value = i + 1;
  }
}
//  Task 14
// Кнопка .b-14 запускає функцію fn14. Функція повинна:
// - отримати всі input.i-14
// - перебрати їх за допомогою циклу. Звернення до елемента виглядає так: elem[i]
// - вивести в .out-14 value вибраного input
// Перевірити, чи вибраний елемент, можна за допомогою elem[i].checked.

function f14() {
  const elem = document.querySelectorAll("[class*='i-14']");
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].checked) {
      document.querySelector(".out-14").textContent = elem[i].value;
    }
  }
}
document.querySelector(".b-14").onclick = f14;
//  Task 15
// Кнопка .b-15 запускає функцію fn15. Функція повинна виводити наступну послідовність в .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_
// Підказка (10 - i) + '_' + i + '_'

function f15() {
  let outputs = "";
  for (let i = 0; i <= 10; i++) {
    outputs += 10 - i + "_" + i + "_";
  }
  document.querySelector(".out-15").textContent = outputs;
}
document.querySelector(".b-15").onclick = f15;
