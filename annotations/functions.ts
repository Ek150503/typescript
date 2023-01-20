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

const logger = (message: string): void => {
  console.log(message);
};

const throwError3 = (message: string): never => {
  throw new Error(message);
};

const throwError = (message: string): void => {
  if (!message) throw new Error(message);
};

const throwError1 = (message: string): string => {
  if (!message) throw new Error(message);

  return message;
};

const todayWeather = {
  date: new Date(),
  wheater: 'sunny',
};

const logWeather = (forcast: { date: Date; wheater: string }): void => {
  console.log(forcast.date);
  console.log(forcast.wheater);
};

const logWeather1 = ({
  date,
  wheater,
}: {
  date: Date;
  wheater: string;
}): void => {
  console.log(date);
  console.log(wheater);
};

logWeather(todayWeather);
