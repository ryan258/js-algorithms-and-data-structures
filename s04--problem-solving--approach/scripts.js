//! //////////////////////////////////
//! Intro to Problem Solving

//? What is an Algorithm?
//! A process or set of steps to accomplish a certain task.

//? Why do you need to know it?
//- Almost everything you do in programming involves some kind of algorithm!
//- It's the FOUNDATION for being a successful problem solver/developer.
//- FOR INTERVIEWS!

//? How to Improve?
//! 1.) DEVISE a plan for solving problems
//! 2.) MASTER common problem solving patterns

//! //////////////////////////////////
//! STEP 1: Understand the Problem
//- most people just want to get started immediately, especially programmers
//- but it's important to step back and think of the problem in front of you

//? 1.) Can you restate the problem in your own words?
//? 2.) What are the inputs that go into the problem?
//? 3.) What are the outputs that should come from the solution to the problem?
//? 4.) Can the outputs be determined from the inputs?
//  - Do I have enough information to solve the problem?
//? 5.) How should I label the important pieces of data that are part of the problem?

//! "Write a function which takes two numbers and returns their sum."

//? Can you restate the problem in your own words?
//- "Implement addition"
//? What are the inputs that go into the problem?
//- how large are the numbers?
//- floating points?
//- determine the distinctions of inputs
//? What are the outputs that should come from the solution to the problem?
//- what should it look like?
//- depends on the same issues as the previous question
//? Can the outputs be determined from the inputs?
//  - Do I have enough information to solve the problem?
//- What should happen if only 1 value is supplied?
//? How should I label the important pieces of data that are part of the problem?

//! //////////////////////////////////
//! STEP 2: Exploring Concrete Examples
//- Come up with concrete examples, it can help you understand the problem better!
//  They also provide sanity checks that your eventual solution works how it should
//- Think user stories, unit tests

//! "Write a function which takes in a string and returns counts of each character in the string"

//? 1.) Start w/ Simple Examples
//  - Write 2 or 3 simple examples w/ an input and output
//    - something worth writing down to look back at
//? 2.) Progress to more complex examples
//  - like edge cases
//? 3.) Explore examples w/ empty inputs
//  - that often gives you some insight into how the problem should work (especially in an interview setting)
//? 4.) Explore examples w/ invalid inputs
//  - more useful in the real world

//! //////////////////////////////////
//! STEP 3: Break It Down!
//- Explicitly write out the steps that you need to take.
//  - Just the basic components of the solution
//  - This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about all the details. (ie. language syntax)
//! In an interview it at least demonstrates that you've formulated an approach. Shows that we know where we're going if time is limited. Which can make the difference in demonstrating that you're competent. Usually the problems are made to be so difficult that you're not supposed to finish solving them and it's about seeing your process.

//! "Write a function which takes in a string and returns counts of each character in the string"

// type out the skeleton of the function
/*function charCount(str) {
  //do something
  //return an object w/ keys that are lowercase, alphanumeric chars in the string, values should be the counts for those chars
}
*/

// think of the broad steps
/*function charCount(str) {
  // make obj to return at end
  // loop over string
  // return obj at end
}
*/

// think of the broad steps
/*function charCount(str) {
  // make obj to return at end
  // loop over string, for each char
     // if char is a letter/number AND is a key in obj, add 1 to count
     // if char is a letter/number AND not in object create a key in obj and set its count to 1
     // if char is something else, don't do anything
  // return obj at end
}
*/

// then we can just go on to fill in the blanks

//! //////////////////////////////////
//! STEP 4: Solve or Simplify - aka WRITE WHAT YOU CAN!
//- Solve the problem, or solve a simpler problem.
//  Ignore the part that is giving you a really hard time in order to focus on everything else.
//? Why?
//  Often in an interview setting you want to have something to show for yourself.
//  - it's much better to start writing code for stuff you know how to do while keeping in mind that harder part you have to incorporate back in.
//  It's pretty common that in simplifying a problem, you'll gain insight into the actual solution, and the harder part of the problem.

//? 1.) Find the core difficulty in what you're trying to do.
//? 2.) Temporarily ignore that difficulty
//? 3.) Write a simple solution <--- at this point you usually gain insight into how all this works
//? 4.) Then incorporate that difficulty back in

//! "Write a function which takes in a string and returns counts of each character in the string"
function charCount(str) {
  // make obj to return at end
  let result = {}
  // loop over string, for each char
  for (let i = 0; i <= str.length; i++) {
    const char = str[i].toLowerCase()
    // is something alphaNumeric? // not sure, just ignore
    if (result[char] > 0) {
      // if char is a letter/number AND is a key in obj, add 1 to count
      result[char]++
    } else {
      // if char is a letter/number AND not in object create a key in obj and set its count to 1
      result[char] = 1
    }
    // if char is something else, don't do anything
  }
  // return obj at end
  return result
}

//! //////////////////////////////////
//! STEP 5: Look Back and Refactor
//- It's a missed opportunity to not look back on your code and improve it.
//- Also mind you that there's a balance between efficiency and legibility.
//! In an interview setting...
//  - take a moment to go line-by-line and think how it could be improved.
//  -
//  -

//! In an interview setting it's very important to ask these questions out loud.
//? Can you check the result?
//? Can you derive the result differently?
//- There's rarely 1 solution to a problem.
//? Can you understand it at a glance?
//- How intuitive is it? Does it make sense on a whiteboard?
//? Can you use the result or method for some other problem?
//- Solutions can give you a sense that it would work in other cases.
//? Can you improve the performance of your solution?
//- How can we improve time/space complexity, like avoiding a bunch of nested loops.
//? Can you think of other ways to refactor?
//- Does your code follow company style guidelines.
//? How have other people solved this problem?
//- Interviewers have probably asked this same question to many different candidates.

//! //////////////////////////////////
//! Recap and Interview Strategies

//! 1) Understand the problem
//! 2) Explore concrete examples
//! 3) Break it down (psuedo-code game plan)
//! 4) Solve/simplify
//! 5) Look back and refactor
