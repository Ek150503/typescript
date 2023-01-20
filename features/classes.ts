class Vehicle {
  drive(): void {
    console.log('Chugga chuuggga');
  }

  honk(): void {
    console.log('Hunk');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('Vlommmm!');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
