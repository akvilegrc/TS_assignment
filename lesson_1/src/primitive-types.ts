/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable linebreak-style */
// Kuriant kintamuosius, reikia šiuos tipus priskirti kintamiesiems:
const height: number = 175.0;
const weight: number = 78.2;
const fullname: string = 'Serbentautas';
const surname: string = 'Bordiūras';
const age: number = 19;
const wife: null = null;
const innerAnimal: undefined = undefined;

console.group('1. Priskirkite kintamiesiems duomenų tipus');
{
  const title: string = 'Vermontas';
  const subTitle: string = 'Kavinė - Baras';
  const peopleCount: number = 5;
  const maxPeopleCount: number = 26;
  const isOpen: boolean = true;
  const openTime: string = '12:00';
  const closeTime: string = '02:00';
  const security: null = null;

  console.log({
    title: [title, typeof title],
    subTitle: [subTitle, typeof subTitle],
    peopleCount: [peopleCount, typeof peopleCount],
    maxPeopleCount: [maxPeopleCount, typeof maxPeopleCount],
    isOpen: [isOpen, typeof isOpen],
    openTime: [openTime, typeof openTime],
    closeTime: [closeTime, typeof closeTime],
    security: [security, typeof security],
  });
}
console.groupEnd();
