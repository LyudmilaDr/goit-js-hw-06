
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log(" всі поля повинні бути заповнені!");
  }

  console.log(`Email: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}