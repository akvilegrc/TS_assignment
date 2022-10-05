/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau 
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = "Grace" as string;

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
formAddUser.onsubmit = (e) => {
  e.preventDefault();
  console.log('Ateityje pridėsiu vartotoją');
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type EventHandler = (e: MouseEvent) => void;

  const button: HTMLButtonElement = document.querySelector("#button") as HTMLButtonElement;
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    const printTextOnClick: EventHandler = () => console.log("paspausta!");

    button.addEventListener("click", printTextOnClick);
  }
  console.groupEnd();

  console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
  {
    const squareContainer: HTMLDivElement = document.querySelector("#square-container") as HTMLDivElement;

    const addSquare: EventHandler = () => {
      const square: HTMLSpanElement = document.createElement("span");
      square.className = "square";
      squareContainer.appendChild(square);
    }

    button.addEventListener("click", addSquare);
  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {
    const countContainer: HTMLParagraphElement = document.querySelector("#count-container") as HTMLParagraphElement;

    let squareCount: number = 0;

    const increaseSquareCount: EventHandler = () => {
      squareCount++;
      countContainer.innerHTML = `Square count: ${squareCount}`;
    }

    button.addEventListener("click", increaseSquareCount);
  }
  console.groupEnd();

}
console.groupEnd();