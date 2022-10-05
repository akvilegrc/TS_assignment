/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams. 
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/

// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
enum WeekDays {
  Monday = 1,
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
  Sunday, // 7
};

// Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
enum Answer {
  No, // 0
  Yes, // 1
};

// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'trečiadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'šeštadienis',
  Sunday = 'sekmadienis',
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
enum LithuanianCities {
  Vilnius = "Vilnius",
  Kaunas = "Kaunas",
  Klaipėda = "Klaipėda",
  Šiauliai = "Šiauliai",
  Panevėžys = "Panevėžys"
}

enum LargestPopulation {
  China, 
  India,
  UnitedStates,
  Indonesia,
  Pakistan
}

enum HighestGDP {
  UnitedStates = 1,
  China,
  Japan,
  Germany,
  UnitedKingdom
}
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑

  console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
  {
    const city1: LithuanianCities = LithuanianCities.Kaunas;
    const city2: LithuanianCities = LithuanianCities.Klaipėda;
    const city3: LithuanianCities = LithuanianCities.Šiauliai;

    console.log(`${city1}, ${city2}, ${city3}`)
  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    const largestPopulation: LargestPopulation[] = [LargestPopulation.China, LargestPopulation.Pakistan];

    console.log(largestPopulation);
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    const higherstGDP: HighestGDP[] = [
      HighestGDP.UnitedStates,
      HighestGDP.China,
      HighestGDP.Japan,
      HighestGDP.Germany,
      HighestGDP.UnitedKingdom
    ];

    console.log(higherstGDP);
  }
  console.groupEnd();

}
console.groupEnd();

