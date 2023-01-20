const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
};

const printVihicle = (vihicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`
  the vihicle ${vihicle.name} has been released since ${vihicle.year} and now it's bloken (${vihicle.broken})
  `);
};

printVihicle(oldCivic);
