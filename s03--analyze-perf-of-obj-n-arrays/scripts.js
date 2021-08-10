//! //////////////////////////////////
//! The Big O of Objects

// Objects are UNORDERED, key value pairs
// - there is no "where" - beginning or end
// - hash maps will explain what happens BTS w/ objects

let instructor = {
  firstName: 'Orson',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4]
}

// When to use objects:
// - when you don't need order
// - you need fast access / insertion and removal
//   - quick as in constant time O(1)

// Big O of Objects
// - Insertion - O(1)
// - Update - O(1)
// - Removal - O(1)
// - Searching - O(N) <----- not fast access - it's LINEAR TIME
//   - it's not searching for a key, that's accessing
//   - it's checking to see if a given piece of information is in a VALUE somewhere
//   - as properties grow, "n" grows
// - Access - O(1)
// When you don't need any ordering, objects are an excellent choice

// Big O of Object Methods
// - Object.keys - O(N) - as n grows we'll have to visit each item once and add it to the array
//   - Object.keys(instructor)
//   - (3) ["firstName", "isInstructor", "favoriteNumbers"]
// - Object.values - O(N) - same
// - Object.entries - O(N) - same, but a little more work, but it all simplifies to 0(N) at the end of the day
// - hasOwnProperty - O(1) - if access is constant time, we should be to see if it exists in constant time
//   - instructor.hasOwnProperty("firstName")
//   - true

//! //////////////////////////////////
//! When are Arrays Slow?
// aka. "Ordered Lists"
// - but the order can come at a cost for some operations...

let names = ['Manny', 'Orson', 'Ike']
let values = [true, {}, [], 2, 'woot!']

// When to Use Arrays
// - When you need order
// - When you need fast access (always very quick) - no matter where
//   ...but insertion and removal (sort of)...
// -

// Big O of Arrays
// - Insertion - it depends... on where...
//   - pushing on the END of an array is O(1) - SIMPLE work...
//   - pushing on the START of an array is O(n) - MORE work... as all the indices have to be reindexed
//     - O(n) - because we have to do something once for every element
// - Removal - it depends... same goes here as insertion w/ the reindexing and all
// - Searching - O(N)
// - Access - O(1) - always fast
//   i.e. names[2] -> 'Ike'

// .push() and .pop() will always be faster than .shift() and .unshift() unless it's an empty array

//! //////////////////////////////////
//! Big O of Array Methods
// - most things working w/ arrays are O(n)

// - .push() - O(1) - no reindexing involved
// - .pop() - O(1) - ^^
// - .shift() - O(N) - reindex all elements in the array
// - .unshift() - O(N) - ^^
// - .concat() - O(N) - takes multiple arrays and merges them together
// - .slice() - O(N) - copying N amount of items from an array
// - .splice() - O(N) - remove/add new elements at different spots of an array, but there's a reindex
// - .sort() - O(N * logN) - we'll get into 7 sorting algos... give it time, just know that to sort is larger than O(N), not enough to look at each element once
// - .forEach/map/filter/reduce/etc - O(N) - these all loop over each element and do something

//! //////////////////////////////////
//!

//! So objects are fast at pretty much everything, but there is no order
//! Arrays are great if you need an order
//! - and best to remove and add at the end and avoid at the beginning/middle
