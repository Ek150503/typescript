const carMaker: string[] = ['toyota', 'chevy', 'ford'];

const a: number[] = [];

const dates = [new Date(), new Date()];

const carByMake = [['f150'], ['corola'], ['chevy']];

const carByMake1: string[][] = [];

// help with eferrences with extracting values
const car1 = carMaker[0];

// if (carMaker.length > 1) {
//   const car2: string = carMaker.pop();
// }

// prevent incompatible values

carMaker.push('2435');
// carMaker.push(12);

//help with 'map'

carMaker.map((car: string): string => car.toUpperCase());

// flexible type

const importantDate: (string | Date)[] = [
  new Date(),
  '2020-12-12',
  '2012-08-02',
  new Date(),
];

importantDate.push(new Date());
importantDate.push('2022-12-12');
// importantDate.push(45551);
