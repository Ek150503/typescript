class Vehicle {
  // public drive(): void {
  //   console.log('Chugga chuuggga');
  // }

  protected honk(): void {
    console.log('Hunk');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('Vlommmm!');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
car.startDrivingProcess();
