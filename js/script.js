let form = document.querySelector('#form')
let firstName = form[0]
let lastName = form[1]
let email = form[2]
let password = form[3]


function validateEmail(email) {
  let regex = /\S+@\S+\.\S+/;
  return regex.test(email.value);
 }

form.addEventListener('submit', sendForm)
let flag = false

function sendForm(e) {
  e.preventDefault()

  let firstNameImgError = firstName.nextElementSibling
  let firstNameError = firstName.nextElementSibling.nextElementSibling
  let lastNameImgError = lastName.nextElementSibling
  let lastNameError = lastName.nextElementSibling.nextElementSibling
  let emailImgError = email.nextElementSibling
  let emailError = email.nextElementSibling.nextElementSibling
  let passwordImgError = password.nextElementSibling
  let passwordError = password.nextElementSibling.nextElementSibling
  

  
  if (!firstName.value) {
    flag = true
    firstName.classList.add('inputError')
    firstNameImgError.classList.add('iconError-visible')
    firstNameError.classList.add('spanError-visible')
  } else {
    flag = false
    firstName.classList.remove('inputError')
    firstNameImgError.classList.remove('iconError-visible')
    firstNameError.classList.remove('spanError-visible')
  }
  if (!lastName.value) {
    flag = true
    lastName.classList.add('inputError')
    lastNameImgError.classList.add('iconError-visible')
    lastNameError.classList.add('spanError-visible')
  } else {
    flag = false
    lastName.classList.remove('inputError')
    lastNameImgError.classList.remove('iconError-visible')
    lastNameError.classList.remove('spanError-visible')
  }
  if (!email.value || !validateEmail(email)) {
    flag = true
    email.classList.add('inputError')
    emailImgError.classList.add('iconError-visible')
    emailError.classList.add('spanError-visible')
  } else {
    console.log(validateEmail(email))
    flag = false
    email.classList.remove('inputError')
    emailImgError.classList.remove('iconError-visible')
    emailError.classList.remove('spanError-visible')
  }
  if (!password.value) {
    flag = true
    password.classList.add('inputError')
    passwordImgError.classList.add('iconError-visible')
    passwordError.classList.add('spanError-visible')
  } else {
    flag = false
    password.classList.remove('inputError')
    passwordImgError.classList.remove('iconError-visible')
    passwordError.classList.remove('spanError-visible')
  }
}