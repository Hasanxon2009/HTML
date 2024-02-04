// let ism = prompt("Ismingizni kiriting !");
// let up = ism.charAt().toUpperCase();
// let lower = ism.slice(1).toLowerCase();
// let result = up + lower;
// alert(`Salom ${result}`);
// const year = +prompt("1-Son kiriting !");
// const year1 = +prompt("2-Son kiriting !");
// const year2 = +prompt("3-Son kiriting !");
// const year3 = +prompt("4-Son kiriting !");

// if ((year > year1, year2, year3)) {
//   console.log(`Shu son katta: ${year}`);
// } else if ((year1 > year, year2, year3)) {
//   console.log(`Shu son katta: ${year1}`);
// } else if ((year2 > year, year1,  year3)) {
//   console.log(`Shu son katta: ${year2}`);
// } else if ((year3 > year, year2, year1)) {
//   console.log(`Shu son katta: ${year3}`);
// } else {
//   console.log("Sonlar teng");
// }
const A = +prompt("1-Son kiriting !");
const B = +prompt("2-Son kiriting !");
const C = +prompt("2-Son kiriting !");
if (A + B > B + C) {
  console.log(A + B);
} else if (A + B < B + C) {
  console.log(B + C);
}
