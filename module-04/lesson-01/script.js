// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};

function fn1() {
  document.querySelector(".out-1").textContent = String(obj1.two);
}
document.querySelector(".b-1").onclick = fn1;

// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

function fn2() {
  for (const key in obj2) {
    if (obj2[key] === "hi") {
      document.querySelector(".out-2").textContent = String(obj2[key]);
      return;
    }
  }
}
document.querySelector(".b-2").onclick = fn2;

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

function fn3() {
  let result = "";
  for (const key in obj3) {
    if (obj3[key] === "hi") {
      result += `${String(obj3[key])} `;
    }
  }
  return (document.querySelector(".out-3").textContent = result.trim());
}
document.querySelector(".b-3").onclick = fn3;

// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

function fn4() {
  let out = "";
  for (const key in obj4) {
    out += `${key} ${obj4[key]} <br>`;
  }
  return (document.querySelector(".out-4").innerHTML = out);
}
document.querySelector(".b-4").onclick = fn4;

// Task 5
const obj5 = {
  one: 1,
  two: 2,
};

function fn5(obj) {
  let out = "";
  for (const key in obj) {
    out += `${key} ${obj[key]} <br>`;
  }
  return (document.querySelector(".out-5").innerHTML = out);
}
document.querySelector(".b-5").onclick = fn5(obj5);

// Task 6
const obj6 = {
  b: 17,
  e: 22,
};

function fn6() {
  const a = document.querySelector(".i-61").value;
  const b = document.querySelector(".i-62").value;
  if (a === "" || b === "") {
    return;
  }
  obj6[a] = b;
  return (document.querySelector(".out-6").innerHTML = fn5(obj6));
}
document.querySelector(".b-6").onclick = fn6;

// Task 7
const obj7 = {
  b: 17,
  e: 22,
};

function fn7() {
  let object = document.querySelector(".i-7").value;
  for (const key in obj7) {
    if (key === object) {
      return (document.querySelector(".out-7").textContent = 1);
    }
  }
  return (document.querySelector(".out-7").textContent = 0);
}
document.querySelector(".b-7").onclick = fn7;

// Task 8
const obj8 = {
  b: 17,
  e: 22,
};

function fn8() {
  let object = document.querySelector(".i-8").value;
  for (const key in obj7) {
    if (key === object) {
      return (document.querySelector(".out-8").textContent = obj7[key]);
    }
  }
  return (document.querySelector(".out-8").textContent = 0);
}
document.querySelector(".b-8").onclick = fn8;

// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

function fn9() {
  const input = Number(document.querySelector(".i-9").value);
  let result = "";
  for (const key in obj9) {
    if (obj9[key] === input) {
      result += `${key} `;
    }
  }
  document.querySelector(".out-9").textContent = result;
}
document.querySelector(".b-9").onclick = fn9;

// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};

function fn10(object, checkd) {
  for (const key in object) {
    if (object[key] === checkd) {
      document.querySelector(".out-10").textContent = true;
      return;
    }
  }
  document.querySelector(".out-10").textContent = false;
}

document.querySelector(".b-10").onclick = function () {
  fn10(obj10, 22);
};

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

function fn11() {
  const input = document.querySelector(".i-11").value;
  delete obj11[input];
  document.querySelector(".out-11").innerHTML = fn5(obj11);
}
document.querySelector(".b-11").onclick = fn11;

// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

function fn12() {
  const input = +document.querySelector(".i-12").value;
  for (const key in obj12) {
    if (obj12[key] === input) {
      delete obj12[key];
    }
  }
  document.querySelector(".out-12").innerHTML = fn5(obj12);
}
document.querySelector(".b-12").onclick = fn12;

// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: 6,
};

function fn13() {
  let sum = 0;
  for (const key in obj13) {
    if (typeof obj13[key] === "number") {
      sum += obj13[key];
    }
  }
  document.querySelector(".out-13").textContent = sum;
}

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

function fn14() {
  let out = "";
  for (const key in obj14) {
    out += `${obj14[key][0]} `;
  }
  document.querySelector(".out-14").textContent = out;
}
document.querySelector(".b-14").onclick = fn14;

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

function fn15() {
  let out = "";
  for (const key in obj15) {
    out += `${obj15[key]}` + " ";
  }
  document.querySelector(".out-15").textContent = out;
}
document.querySelector(".b-15").onclick = fn15;

// Task 16
const obj16 = {
  iis8sj: {
    name: "Ivan",
    age: 27,
  },
  iiss7j: {
    name: "Petr",
    age: 26,
  },
  s3s8sj: {
    name: "Serg",
    age: 47,
  },
};

function fn16() {
  let out = "";
  for (const key in obj16) {
    out += `${obj16[key].name}` + " ";
  }
  document.querySelector(".out-16").textContent = out;
}
document.querySelector(".b-16").onclick = fn16;

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

function fn17() {
  let out = "";
  for (const key in obj17) {
    if (obj17[key].age > 30) {
      out += `${obj17[key].name}` + " ";
    }
  }
  document.querySelector(".out-17").textContent = out;
}
document.querySelector(".b-17").onclick = fn17;

// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

function fn18() {
  document.querySelector(".out-18").textContent =
    obj18[document.querySelector(".i-18").value];
}
document.querySelector(".b-18").onclick = fn18;

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

function fn19() {
  if (document.querySelector(".i-19").value.toLowerCase() in obj19) {
    document.querySelector(".out-19").style.backgroundColor = document
      .querySelector(".i-19")
      .value.toLowerCase();
  }
}
document.querySelector(".b-19").onclick = fn19;

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};

function fn20() {
  let out = "";
  for (const key in obj20) {
    for (const element of obj20[key]) {
      if (element[1] === 2) {
        out += `${element[0]} `;
      }
    }
  }
  document.querySelector(".out-20").textContent = out;
}
document.querySelector(".b-20").onclick = fn20;
