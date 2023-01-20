const add = (a: number, b: number): number => {
  return a + b;
};

type func = (a: number, b: number) => number;

// const add1: (a: number, b: number) => number = (a, b) => {
//   return a + b;
// };
const add1: func = (a, b) => {
  return a + b;
};

interface Props {
  onclick: () => void;
}

const add2 = (a: number, b: number) => {
  return a + b;
};

const sub = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};
