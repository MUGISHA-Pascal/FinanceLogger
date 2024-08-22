const form = document.querySelector("form");
const type = document.querySelector("#type");
const person = document.querySelector("#person");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(type.value, person.value, details.value, amount.valueAsNumber);
});
export {};
