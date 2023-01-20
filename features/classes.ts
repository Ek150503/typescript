class Vehicle {
  // public drive(): void {
  //   console.log('Chugga chuuggga');
  // }

  constructor(public color: string) {}
  protected honk(): void {
    console.log('Hunk');
  }
}

class Car extends Vehicle {
  constructor(color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Vlommmm!');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('Black');
console.log(vehicle.color);
// vehicle.drive();
// vehicle.honk();

const car = new Car('Yellow');
car.startDrivingProcess();
