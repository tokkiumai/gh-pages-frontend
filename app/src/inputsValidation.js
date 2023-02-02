export const PASSWORD_MIN_LENGTH = 8

const EmailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const LowerCaseRegExp = /[a-z]/
const UpperCaseRegExp = /[A-Z]/
const NumberRegExp = /\d/

export function validateEmail(email) {
  return EmailRegExp.test(email)
}

export function validatePassword(password) {
  const isLowerCase = LowerCaseRegExp.test(password)
  const isUpperCase = UpperCaseRegExp.test(password)
  const isNumber = NumberRegExp.test(password)
  const isMinLength = password.length >= PASSWORD_MIN_LENGTH

  return { isLowerCase, isUpperCase, isNumber, isMinLength }
}

const NormalizePasswordRegExp = /[^a-zA-Z0-9!@#$%^&*(),.?":{}|></[\]\\'~`_+;=-]+/g

export function normalizePassword(password) {
  return password.replace(NormalizePasswordRegExp, '')
}
