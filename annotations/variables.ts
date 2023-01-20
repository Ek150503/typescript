const apples: number = 5;
const speed: string = 'fast';
const hasname: boolean = false;

const nothingMuch: null = null;
const nothing: undefined = undefined;

// buitin objects
const now: Date = new Date();

//array
let colors: string[] = ['red', 'green', 'yellow'];
let myNumber: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false];

//class
class Car {}

let car: Car = new Car();

// objects literal
let point: {
  x: number;
  y: string;
} = {
  x: 10,
  y: 'name',
};

// function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when we use annotations,
// 1).Function that returns any type

const json = '{"name": "Ek", "age": 18}';

const coordinates: {
  name: string;
  age: number;
} = JSON.parse(json);

console.log(coordinates);
