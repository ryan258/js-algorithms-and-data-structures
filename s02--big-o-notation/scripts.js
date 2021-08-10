//! //////////////////////////////////
//! Intro to Big O
//- imagine you have multiple solutions/approaches, but you want to know which is best
//- big O gives us a framework for talking about and comparing different solutions
//  - a system for classifying solutions and comparing them to one another
//!   a numeric representation of the performance of code (and it's pretty straight forward)
//    - and having a precise vocabulary for talking about how code performs is important
//? why does this matter?
//  - code challenges and interviews
//  - performance
//  - useful for discussing tradeoffs between approaches
//  - helps in identifying inefficient parts of code that are pain points in an app

console.log('beep')

//! //////////////////////////////////
//! Timing Our Code
//? Which is better?
//? What does better mean? (usually it's the first 2 at the expense of readability)
//- faster? (small num vs. large num)
//- less memory-intensive?
//- more readable?
//  TODO: Example - Suppose we want to write a fn that calcs the sum of  ll numbers from 1 up to and including some number n
//- simple solution

/*function addUpTo(n) {
  let total = 0
  for (let i = 0; i <= n; i++) {
    total += i
  }
  return total
}

console.log(addUpTo(6)) // 21

//- terse solution
function addUpTo2(n) {
  return (n * (n + 1)) / 2
}

console.log(addUpTo2(6)) // 21 <-- 6 * (6+1) / 2

//? Why not use timers? (via performance.now()s)
//- this process is not the most reliable... and it's not easy to talk about
//! The problem with time...
//- different machines will record different times, not reliable
//- same machine will record different times
//- for fast algorithms, speed measurements may not be precise enough...

let t1a = performance.now()
addUpTo(1000000000)
let t2a = performance.now()
console.log(`Time Elapsed: ${(t2a - t1a) / 1000} seconds`) // 1.24

let t1b = performance.now()
addUpTo2(1000000000)
let t2b = performance.now()
console.log(`Time Elapsed: ${(t2b - t1b) / 1000} seconds`) //! 0.00009 <-- much faster!
*/

//! //////////////////////////////////
//! Counting Operations > Comparing Time
//? If not time, then what?
//- rather than counting seconds which are so variable, we count the number of simple operations the computer has to perform, because this remains contant

/*function addUpTo2(n) {
  return (n * (n + 1)) / 2
}
*/

//! above we have
// - 1 multiplication
// - 1 addition
// - 1 division
// the 1 and 2 aren't operations
// and it doesn't really matter what n is
//! there are just 3 calculations happening regardless of the size of n

/*function addUpTo(n) {
  let total = 0 // 1 assignment
  for (let i = 0; i <= n; i++) {
    // let i single assignment ; n comparisons ; i++ is n ops & n assignments
    total += i // n ops & n assignments
  }
  return total
}
*/

//! in this other solution we have
// - ... counting is hard...
//   depending on what we count the number of ops can be as low as 2n or as high as 5n + 2
//!  but the exact number doesn't matter, the number of operations grows roughly PROPORTIONALLY w/ n

//! With Big O we're focused on the big picture

//! //////////////////////////////////
//! Visualizing Time Complexities
//- https://rithmschool.github.io/function-timer-demo/
//  - AddUpToFirst & AddUpToSecond
//  - 100000000
//- AddUpToFirst takes a lot more time, like linearly in proportion (1 to 1)

//! //////////////////////////////////
//! Official Intro to Big O
//! A way to formalize fuzzy counting - just a generalized way for talking about how efficient an algorithm is as an input "n" grows how the change is reflected in the runtime
//!   that allows us to formally talk about how the runtime of an algorithm's growth as the inputs grows
//  - that's it, it's just a way of describing the relationship between the input and the runtime of that function
//! - we don't care about the details, only the trends!

//! Big O Definition
//  We say that an algorithm is //! O(f(n))
//  if the number of simple operations the computer has to do is eventually less than a constant times //! f(n)
//     as n increases...
//- or in otherwords... f(n) 'function w/ an input of n' = output
//! - f(n) could be linear (f(n) = n) - "as n scales the runtime scales"
//! - f(n) could be quadratic (f(n) = n**2) - "as n grows the runtime squares" n * n
//! - f(n) could be constant (f(n) = 1) - "as n grows, there isn't much of an impact, the runtime is always constant"
//! - f(n) could be something entirely different!

//! WHEN WE'RE TALKING ABOUT BIG O, WE'RE TALKING ABOUT THE WORST CASE SCENARIO, the upper bound for runtime.

/*function addUpTo2(n) {
  return (n * (n + 1)) / 2
}

// ^This^ would be CONSTANT because it's just 3 operations no matter what "n" is
//  there's no change in the runtime
//! so it's O(1)

function addUpTo(n) {
  let total = 0 // 1 assignment
  for (let i = 0; i <= n; i++) {
    // let i single assignment ; n comparisons ; i++ is n ops & n assignments
    total += i // n ops & n assignments
  }
  return total
}*/

// ^This^ would be LINEAR because runtime grows as "n" grows it's basically a 1 to 1 ratio
//  - The number of operations is (eventually) bounded by a multiple of "n" (say, 10n)
//    - but it doesn't really matter whether it's 5n, 10n, or 50n bc in the end we simplify it down to just "n"
//! so it's O(n) - "We're just concerned w/ the order of magnitude!"

//! //////////////////////////////////
//! Simplifying Big O Expressions
//! we're not worried about the exact count, more like THE GENERAL TREND
//- like instead of 5n + 2 we simplified it down to just n

//! Rules to simplify by
//  When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions
//  1) CONSTANTS DON'T MATTER
//     O(2n) - remove the 2, it's O(n)
//     O(500) - just call it 1, the chart is going to be flat, it's O(1)
//     O(13n**2) - O(n**2) - if we looked at the graph to infinity that 13 wouldn't mean much at all
//  2) SMALLER TERMS DON'T MATTER
//     O(n + 10) -> O(n)
//     O(1000n + 50) -> O(n) // no need for constant nor the small number at the end
//     O(n**2 + 5n + 8) -> O(n**2) // the 5n on a large scale is going to be meaningless, so remove it
//

//! Big O Shorthands
//- Analyzing complexity w/ big O can get complicated
//- there are several rules of thumb that can help
//  - they don't ALWAYS work, but are a helpful starting point
//! 1) Arithmetic operations are constant
//! 2) Variable assignment is constant
//! 3) Accessing elements in an array (by index) or object (by key) is constant
//! 4) In a loop, the complexity is the length of the loop TIMES the complexity of whatever is happening inside of the loop

// - O(1) is like, the best
// - O(n) is straight up diagonal, not bad
// - O(n**2) pretty steep... is kinda pushing it

//! //////////////////////////////////
//! Space Complexity
// - time complexity was how we can analyze the RUNTIME of an algorithm as the SIZE OF THE INPUTS INCREASES
//!- SPACE COMPLEXITY can also analyze (and use the same Big O syntax) how much ADDITIONAL MEMORY do we need to allocate in order to run the code in our algorithm
// - "auxillary space complexity" - refers to space required by the ALGORITHM ONLY, not including space taken up by the inputs
// - here we're talking about the algorithm itself, as "n" grows we're assuming the input "n" is going to grow - so we're not going to care about that space and focus on the repercussions that has inside the algorithm
//! - SO UNLESS OTHERWISE NOTED - when we talk about space complexity, we're technically talking about AUXILLARY SPACE COMPLEXITY
//    basically focusing on what's happening inside the algorithm

//! Rules of Thumb
//! 1) Most primitives (bools, nums, undefined, null) are constant space - size of the input doesn't matter, takes up same amt of space
//! 2) Strings require O(n) space - where n is the string length
//     if the string is 50 characters long, it takes up 50x the amount of space as a single character
//! 3) Same w/ Reference Types - are generally O(n), where n is the length for Arrays or the number of keys (for Objects)
//     if length of an array is 4, compared to another one that is 2, it takes up twice as much space
//!    as the size of n grows, it doesn't have an impact on the space because you just have those 2 variables!

// v example v of constant space - O(1) space!
function sum(arr) {
  let total = 0 // 1 number
  for (let i = 0; i < arr.length; i++) {
    // 1 number ; and all the rest of the stuff just takes time, not space
    total += arr[i]
  }
  return total
}

//! //////////////////////////////////
//! Logs and Section Recap
//! Logarithms are the inverse of exponentiation
//  - much like division and multiplication are a pair
//                 logarithms and exponents are a pair
//! example log2(8) = 3
// the question here is //? "2 to what power equals 8?"
//  - 2**3 = 8
//  - 2 is the base
//! the most common ones are the binary logarithm, which is log 2
//  - then there's base 10 - //? "10 to what power gives us X?"
// but mathematically you can't not have the base of a log

//! SO WE JUST CARE ABOUT THE BIG PICTURE so we're just going to say log, bc when we're comparing graphs it doesn't matter

//! RULE OF THUMB !//
//! The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to 1

// 8 -> /2
// 4 -> /2
// 2 -> /2
// 1
//! so log(8) = 3

// 25 -> /2
// 12.5 -> /2
// 6.25 -> /2
// 3.125 -> /2
// 1.5625 -> /2
// 0.78125 // finally below 1 so it's somewhere between this and the last...
//! log(25) = 4.64

//! LOGARITHM COMPLEXITY
//- Logarithmic time complexity is great!
//! If you have an algorithm w/ O(log n) time complexity, great! It's a shade above O(i)

//! WHO CARES?!
//  - certain search algorithms have logarithmic time complexity
//  - efficient sorting algorithms involve logarithms
//  - recursion sometimes involves logarithmic space complexity (NOT TIME!)

//! //////////////////////////////////
//! RECAP

//! - to analyze performance of an algorithm, we use Big O Notation
//! - Big O can give us a high level understanding of the time or space complexity of an algorithm
//! - Big O doesn't care about precision, only about general trends (like linear, quadratic, constant)
//! - Time/space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
//! - BIG O IS EVERYWHERE, SO GET LOTS OF PRACTICE!
