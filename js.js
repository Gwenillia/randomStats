"use strict";

let stats = [];
let statMax = 26;

const nomStat = [
  "Diplomacie",
  "Martial",
  "Intendance",
  "Intrigue",
  "Érudition",
  "Âge",
];

while (stats.length < 5) {
  let j = Math.floor(Math.random() * (statMax - 0) + 0);
  stats.push(j);
  statMax -= j;
}
const age = stats.reduce((a, b) => a + b, 0);
stats.push(age);

for (let i = 0; i < stats.length; i++) {
  let list = document.createElement("li");
  list.className = "lol";
  list.innerHTML = `${nomStat[i]}: ${stats[i]}`;
  document.getElementById("ul").appendChild(list);
}
