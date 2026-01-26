//TODO: Join, Split, ForEach
// Task 1
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

function fn1() {
  const arr1_res = () => {
    const result = [];
    arr1.forEach(n => result.push(n * 2));
    return result;
  };
  document.querySelector(".out-1").textContent = arr1_res();
}
document.querySelector(".b-1").onclick = fn1;

// Task 2
const arr2 = [2, 3, 4, 5, 10, 11, 12];
function fn2() {
  const arr2_res = () => {
    const result = [];
    arr2.forEach(n => result.push(n / 2));
    return result;
  };
  document.querySelector(".out-2").textContent = arr2_res();
}
document.querySelector(".b-2").onclick = fn2;

// Task 3
const arr3 = [2, "hello", 3, "hi", 4, "Mazai"];

function fn3() {
  const result = [];

  const arr3_res = () => {
    arr3.forEach(n => {
      if (typeof n === "number") {
        result.push(n);
      }
    });
    return result;
  };
  document.querySelector(".out-3").textContent = arr3_res();
}
document.querySelector(".b-3").onclick = fn3;

// Task 4
function fn4() {
  const arr4_res = [];
  const spans = document.querySelectorAll(".task-4");
  spans.forEach(span => {
    arr4_res.push(span.getAttribute("data"));
  });
  document.querySelector(".out-4").textContent = arr4_res;
}
fn4();

// Task 5
function fn5() {
  const arr5_res = [];
  const spans = document.querySelectorAll(".task-5");
  spans.forEach(p => {
    p.onclick = fn5_1;
  });
  function fn5_1(event) {
    const p = event.target;
    arr5_res.push(p.getAttribute("data"));
    document.querySelector(".out-5").textContent = arr5_res.join(", ");
  }
}
fn5();

// Task 6
const str6 = "helloworld";
function fn6() {
  const arr6_res = str6.split("");
  document.querySelector(".out-6").textContent = arr6_res.join("_");
}
document.querySelector(".b-6").onclick = fn6;

// Task 7
const str7 = "hello world hi mazai";
function fn7() {
  const arr7_res = str7.split(" ");
  document.querySelector(".out-7").textContent = arr7_res;
}
document.querySelector(".b-7").onclick = fn7;

// Task 8
const arr8 = [1, 2, 66, 77, 15];
function fn8() {
  const arr8_res = arr8.join("_");
  document.querySelector(".out-8").textContent = arr8_res;
}
document.querySelector(".b-8").onclick = fn8;
// Task 9
const arr9 = [
  ["hi", "mahai"],
  ["test", "best"],
];
function fn9() {
  const arr9_res = [].concat(...arr9);
  document.querySelector(".out-9").textContent = arr9_res.join("_");
}
document.querySelector(".b-9").onclick = fn9;
// Task 10
const arr10 = { name: "ivan", age: 15, sex: 1, id: 45 };
function fn10() {
  let arr10_res = "";
  for (const key in arr10) {
    arr10_res += `${key}:${arr10[key]}&`;
  }
  document.querySelector(".out-10").textContent = arr10_res;
}
document.querySelector(".b-10").onclick = fn10;
//TODO: MAP FILTER
// Task 11
const arr11 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
function fn11() {
  const arr11_res = () => arr11.map(a => a * 2);
  document.querySelector(".out-11").textContent = arr11_res();
}
document.querySelector(".b-11").onclick = fn11;
// Task 12
const arr12 = [2, 3, 4, 5, 10, 11, 12];
function fn12() {
  const arr12_res = () => arr12.map(a => a ** 2);
  document.querySelector(".out-12").textContent = arr12_res();
}
document.querySelector(".b-12").onclick = fn12;
// Task 13
const arr13 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
function fn13() {
  const arr13_res = () => arr13.map(a => +a);
  document.querySelector(".out-13").textContent = arr13_res();
}
document.querySelector(".b-13").onclick = fn13;
// Task 14
const arr14 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
function fn14() {
  const arr14_res = arr14.filter(a => typeof a === "number");
  document.querySelector(".out-14").textContent = arr14_res;
}
document.querySelector(".b-14").onclick = fn14;
// Task 15
const arr15 = [3, 14, 15, 92, "6"];
function fn15() {
  const arr15_res = arr15.filter(a => typeof a === "number" && a % 2 === 0);
  document.querySelector(".out-15").textContent = arr15_res;
}
document.querySelector(".b-15").onclick = fn15;

// Task 16
const arr16 = [3, 14, 15, 92, "6", "5", "hello", 32];
function fn16() {
  const arr16_res = arr16.filter(a => typeof a === "number" && a > 14);
  document.querySelector(".out-16").textContent = arr16_res;
}
document.querySelector(".b-16").onclick = fn16;

// Task 17
const arr17 = [
  "Alto`s Adventure",
  "Angry Birds 2",
  "Anno 2205",
  "Assassin`s Creed Chronicles",
];
function fn17() {
  const arr17_res = () => arr17.map(a => a.toLowerCase());
  document.querySelector(".out-17").textContent = arr17_res();
}
document.querySelector(".b-17").onclick = fn17;
// Task 18
const arr18 = [3, 14, 15, 92, 7, 32, 59];
function fn18() {
  const arr18_res = [];
  arr18.forEach((e, i) => {
    if (e % 2 === 0) {
      arr18_res.push(i);
      console.log(arr18_res);
    }
    document.querySelector(".out-18").textContent = arr18_res;
  });
}
document.querySelector(".b-18").onclick = fn18;
// Task 19
const arr19 = [
  "Quantum Break",
  "Gears of War 4",
  "Mass Effect: Andromeda",
  "Far Cry Primal",
];
function fn19() {
  const arr19_res = [];
  arr19.forEach(a => {
    arr19_res.push(a.toLowerCase());
  });
  document.querySelector(".out-19").textContent = arr19_res;
}
document.querySelector(".b-19").onclick = fn19;
// Task 20
const arr20 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
function fn20() {
  const arr20_res = [];
  arr20.forEach(a => {
    if (a > 0) {
      arr20_res.push(a);
    } else {
      arr20_res.push(0);
    }
  });
  document.querySelector(".out-20").textContent = arr20_res;
}
document.querySelector(".b-20").onclick = fn20;
// Task 21
const arr21 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
function fn21() {
  const arr21_res = [];
  arr21.filter((_, i) => {
    if (i % 2 === 0) {
      arr21_res.push(a);
    }
  });
  document.querySelector(".out-21").textContent = arr21_res;
}
document.querySelector(".b-21").onclick = fn21;
// Task 22
const arr22 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
function fn22() {
  return (document.querySelector(".out-22").textContent = Array.isArray(arr22));
}
document.querySelector(".b-22").onclick = fn22;

// Task 23
const arr23 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const arr23_num = 9;
function fn23() {
  return (document.querySelector(".out-23").textContent =
    arr23.includes(arr23_num));
}
document.querySelector(".b-23").onclick = fn23;
// Task 24
const arr24 = ["c", "C", "d", "e", "F"];
const arr14_sum = "f";
function fn24() {
  const arr24_res = [];
  arr24.forEach(a => {
    arr24_res.push(a.toLowerCase());
  });
  return (document.querySelector(".out-24").textContent = arr24_res.includes(
    arr14_sum.toLocaleLowerCase()
  ));
}
document.querySelector(".b-24").onclick = fn24;
// Task 25
const arr25 = [
  {
    name: "Mango",
    pnum: "tr7862",
  },
  {
    name: "Poly",
    pnum: "",
  },
  {
    name: "Ajax",
    pnum: "im7961",
  },
  {
    name: "Didi",
    pnum: "tr786259",
  },
];
// arr25_res.push();
function fn25() {
  const arr25_res = [];
  const arr25_res2 = arr25.filter(a => a.pnum.trim().length === 6);
  arr25_res2.map(a => arr25_res.push(a.name));
  document.querySelector(".out-25").textContent = arr25_res;
}
document.querySelector(".b-25").onclick = fn25;
//? RESULT:
// [
//   {
//     name: "Mango",
//     pnum: "tr7862",
//   },
//   {
//     name: "Ajax",
//     pnum: "im7961",
//   },
// ];
