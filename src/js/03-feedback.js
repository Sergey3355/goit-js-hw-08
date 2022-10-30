import lodash from "lodash.throttle";

const forma = document.querySelector(".feedback-form");
forma.addEventListener(
  "input",
  lodash((event) => {
    let formaEl = event.currentTarget;
    if (formaEl && formaEl.elements) {
      let elements = formaEl.elements;
      let feedbackFormState = {
        email: elements.email.value,
        message: elements.message.value,
      };
      localStorage.setItem(
        "feedback-form-state",
        JSON.stringify(feedbackFormState)
      );
    }
  }, 500)
);

let ffs = localStorage.getItem("feedback-form-state");
document.querySelector('input[name="email"]').value = JSON.parse(ffs).email;
document.querySelector('textarea[name="message"]').value =
  JSON.parse(ffs).message;

forma.addEventListener("submit", (event) => {
  event.preventDefault();
  let formaEl = event.currentTarget;
  let elements = formaEl.elements;
  console.log(elements);
  let email = elements.email;
  let password = elements.password;
  if (email.value == "" || password.value == "") {
    alert("Заполните поля");
  } else {
    let obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
    forma.reset();
  }
});
