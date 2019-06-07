// Ini belajar class
// class Members {
//     // constructor(name){
//     //     this.name = name
//     // }
//     getMember(name) {
//         return 'Namaku ' + name
//     }
// }

// let member = new Members()

// console.log(member.getMember('Paijo'))

// Ini belajar function

// VAR (function scope)
// function looping() {

//     for (var i = 0; i < 5; i++) {
//         console.log(i)
//     }
//     function inlooping() {
//         console.log(i);
//     }
//     inlooping();
// }
// looping();

// LET (block scope)
// for (let i = 0; i < 5; i++) {
//     console.log(i);

// }
// if (true) {
//     let i = "100";
//     console.log("i = ",i);
// }
//contoh 1
const func1 = function(a, b) {
    return a + b;
  };
  console.log(func1(3, 3)); //6
  
  //contoh 2
  const func2 = (a, b) => {
    return a + b;
  };
  console.log(func2(3, 3)); //6
  
  //contoh 3
  const func3 = (a, b) => a + b;
  console.log(func3(3, 3)); //6

  //contoh 4
const func4 = (dobel) => dobel + dobel;
console.log(func4(5)); //10

//contoh 5
const func5 = dobel => dobel + dobel;
console.log(func5(5)); //10

//contoh 6
const numbers = [1, 2, 3, 4, 5];
const kalidua1 = numbers.map(function(number) {
  return 2 * number;
});
console.log(kalidua1); //[ 2, 4, 6, 8, 10 ]

//contoh 7
const kalidua2 = numbers.map(number => 2 * number);
console.log(kalidua2); //[ 2, 4, 6, 8, 10 ]