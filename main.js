
// Create functions to sort, reverse and search for an element in an array.
//  Register and trigger these functions using events.

const EventEmitter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Sample array
const myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Function to add an element to the array
function addElement(element) {
  myArray.push(element);
  emitter.emit('elementAdded', element);
}

// Function to sort the array
function sortArray() {
  myArray.sort((a, b) => a - b);
  emitter.emit('arraySorted', myArray);
}

// Function to reverse the array
function reverseArray() {
  myArray.reverse();
  emitter.emit('arrayReversed', myArray);
}

// Function to search for an element in the array
function searchElement(element) {
  const index = myArray.indexOf(element);
  emitter.emit('elementSearched', { element, index });
}

// Subscribe to events
emitter.on('elementAdded', (element) => {
  console.log(`Element added: ${element}`);
});

emitter.on('arraySorted', (sortedArray) => {
  console.log('Array sorted:', sortedArray);
});

emitter.on('arrayReversed', (reversedArray) => {
  console.log('Array reversed:', reversedArray);
});

emitter.on('elementSearched', ({ element, index }) => {
  if (index !== -1) {
    console.log(`Element ${element} found at index ${index}`);
  } else {
    console.log(`Element ${element} not found in the array`);
  }
});

// Add elements to the array
addElement(7);
addElement(0);

// Sort the array
sortArray();

// Reverse the array
reverseArray();

// Search for an element
searchElement(5);
searchElement(8);
