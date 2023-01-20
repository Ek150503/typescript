const drink = {
  color: 'Brown',
  carbonated: true,
  sugar: 40,
};

const pepi: [string, boolean, number] = ['Brown', true, 40];

type Drink = [string, boolean, number];

const coca: Drink = ['Brown', true, 100];
const sprite: Drink = ['clear', true, 70];
const tea: Drink = ['Brown', false, 100];

const carSpec: [number, number] = [400, 3354];

const carState = {
  horsePower: 400,
  weight: 3554,
};
