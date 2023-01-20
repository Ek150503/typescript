const profile = {
  name: 'EK E',
  age: 18,
  coords: {
    lat: -1,
    lng: 62,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: {
  coords: {
    lat: number;
    lng: number;
  };
} = profile;
