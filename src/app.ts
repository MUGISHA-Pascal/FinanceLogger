const form = document.querySelector("form")!;
const type = document.querySelector("#type") as HTMLSelectElement;
const person = document.querySelector("#person") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // console.log(type.value, person.value, details.value, amount.valueAsNumber);
});
