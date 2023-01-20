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
