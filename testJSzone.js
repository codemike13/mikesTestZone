const motorcycles = [
  "Suzuki",
  "Honda",
  "Harley",
  "Yamaha",
  "Aprilla",
  "Triumph"
];

//Your task ...print to console.log() your motorcycles make to console.

//Task 2 using a for loop console.log() all brands to console.

//Task 3 using a for loop, loop through the motorcycles array and console.log() only your bikes make .toUpperCase().







//REMEMBER to find length apply (.length) to the object in question , be it a string , array etc. i.e motorcycles.length ==> returns "6".
//
//

// A for loop has four parts :
//
// Part 1. A counting number usually represented by a variable to start the loop at i.e :
//
//         for(let i = 0 ;..... ; .....) {
//
//          }
//         Starts the loop counting at "0"
//
// Part 2. An "expression" usually a comparison that checks if the counting number (in this case " i " ) has reached a certain value:
//
//         for(..... ; i < 10 ; ......) {
//
//          }
//         Is "i" still less than or equal to 10?
//
// Part 3. The last part involves what happens to the counting number if that comparison is still true.
//        In our case we need to "add" to the counter every time the loop runs to satisfy "i" eventually
//        becoming greater than > 10 :
//
//        for(..... ; ..... ; i++) {
//
//         }
//        Add 1 to "i" while "i" is still (less than <)  or (equal = to) 10 ( i < = 10 )
//
//        Note ==> i++ is the same a writing i = i + 1    // just as i-- is the same as i = i - 1
//             ==> i = i + 1 is saying I am adding "1" to whatever value I already hold.
//             ==> If i = 10 , under the hood  i = i + 1 looks like ( i(10) = i(10) + 1 ) resulting in i = 11 .
//
// Part 4. Now that we have satisfied the three main parts of initiating a loop we will add the guts, the guts are the things that happen every time a loop runs:
//
//        for(..... ; ..... ; .....) {
//
//            ( Do some shit , like console.log().. or add numbers together.. or go through an array and find something)
//
//         }
//
// Putting it together :
//
//  for(let i = 0 ; i <= 10 ; i++) {
//      console.log("Fuck you John " + i + " times")
//   }
//
// results in :
// Fuck you John 0 times
// Fuck you John 1 times
// Fuck you John 2 times
// Fuck you John 3 times
// Fuck you John 4 times
// Fuck you John 5 times
// Fuck you John 6 times
// Fuck you John 7 times
// Fuck you John 8 times
// Fuck you John 9 times
// Fuck you John 10 times
//
//
// Note ==> I used the counting number "i" to print out how many times the loop said Fuck John, that number also represents how many times that loop had to run
//          till the condition ( i <= 10 ) was met. Which is also the same amount of times i++ happend to increase the value held by i.
//
//  Putting it together again :
//
//  for(let i = 0 ; i <= 10 ; i++) {
//    console.log("i++ has run  " + i + " time(s)")
// }
//
//
// i++ has run  0 time(s)
// i++ has run  1 time(s)
// i++ has run  2 time(s)
// i++ has run  3 time(s)
// i++ has run  4 time(s)
// i++ has run  5 time(s)
// i++ has run  6 time(s)
// i++ has run  7 time(s)
// i++ has run  8 time(s)
// i++ has run  9 time(s)
// i++ has run  10 time(s)
//
//
// This shows how many times that hoe ran loops around the block.
// THis should help if not you's a hoe and we will try something else.
//
//
//
//  LAst put togTh3r

let fucksGvienByCasey = 5;

for (i = 1; i <= fucksGvienByCasey; i++) {
  console.log(" Fucks given by Casey : " + i);
}

//In the end she gave tooo many fucks about for loops ... savage
