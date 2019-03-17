// var a = function(name, age) {
//   this.name = name;
//   this.age = age;
// };
// var b = new a("hammad", 20);
// console.log(b);

// var c = new Promise((a, b) => {
//   setTimeout(() => {
//     b(console.log(a));
//   });
// });
// c.then(func=>{
//     console.log("applying")
// }).catch(again_fuck=>{
//     console.log("rejected")
// })

function grades(current_num, total_num) {
  let mypercentage = (current_num / total_num) * 100;
  let mygrade = "";
  if (mypercentage >= 80) {
    mygrade = "A+";
  } else if (mypercentage >= 70) {
    mygrade = "A";
  } else if (mypercentage >= 60) {
    mygrade = "B";
  } else if (mypercentage >= 50) {
    mygrade = "c";
  } else if (mypercentage >= 40) {
    mygrade = "D";
  } else if (mypercentage >= 30) {
    mygrade = "F";
  }
  return "my grade is",mygrade
  
}
let myresult = grades(90, 100);
console.log(myresult);
