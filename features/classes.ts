class Vehicle {
  drive(): void {
    console.log('Chugga chuuggga');
  }

  honk(): void {
    console.log('Hunk');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
