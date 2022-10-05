/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2 = 'Estonia';

type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

const req1 = {
  url: 'https://tavo-veidas.lt',
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

const req2 = {
  url: 'https://tavo-veidas.lt/api/',
  headers: {
    'Authorization': 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
    'Content-Type': 'application/json',
  },
  body: {
    image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
  },
  method: 'POST',
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type Berlin = "Berlin";
  type Hamburg = "Hamburg";
  type Cologne = "Cologne";
  type Frankfurt = "Frankfurt";
  type Stuttgart = "Stuttgart";

  type Beagle = "beagle";
  type Poodle = "poodle";
  type Bulldog = "bulldog";
  type GoldenRetriever = "golden retriever";
  type Dachshund = "dachshund";

  type Bumper = "bumper";
  type Radiator = "radiator";
  type Dashboard = "dashboard";
  type Spoiler = "spoiler";
  type Tire = "tire";
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    type GermanCity = Berlin | Hamburg | Cologne | Frankfurt | Stuttgart;

    const city1: GermanCity = "Berlin";
    const city2: GermanCity = "Cologne";
    const city3: GermanCity = "Stuttgart";

    console.log(`${city1}, ${city2}, ${city3}`);
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    type DogBreed = Beagle | Poodle | Bulldog | GoldenRetriever | Dachshund;

    const dog1: DogBreed = "beagle";
    const dog2: DogBreed = "golden retriever";
    const dog3: DogBreed = "bulldog";

    console.log(`${dog1}, ${dog2}, ${dog3}`);
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    type CarParts = Bumper | Radiator | Dashboard | Spoiler | Tire;

    const carPart1: CarParts = "bumper";
    const carPart2: CarParts = "tire";
    const carPart3: CarParts = "radiator";

    console.log(`${carPart1}, ${carPart2}, ${carPart3}`);
  }
  console.groupEnd();

}
console.groupEnd();



