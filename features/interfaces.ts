interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary: () => string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVihicle = (vihicle: Vehicle): void => {
  console.log(`
  the vihicle ${vihicle.name} has been released since ${vihicle.year} and now it's bloken (${vihicle.broken})
  `);
};

printVihicle(oldCivic);
