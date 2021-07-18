const REG_EMAIL = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9]+)\.[a-zA-Z0-9]{2,8}$/;
const REG_PASSWORD = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
const REG_PHONE_NUMBER = /^\d{3}-\d{3,4}-\d{4}$/;

export function checkEmail(email: string) {
  return REG_EMAIL.test(email);
}

export function checkPassword(passowrd: string) {
  return REG_PASSWORD.test(passowrd);
}

export function checkPhoneNumber(phoneNumber: string) {
  return REG_PHONE_NUMBER.test(phoneNumber);
}
