import { ErrorMessages } from "../services/errorMesages";

const errorsList = ErrorMessages();

export const isEmailValid = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isLengthBetween = (value: string, min: number, max: number) =>
  value.length >= min && value.length <= max;

export const isStrongPassword = (password: string) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /\W/.test(password);
  const isLongEnough = password.length >= 12;
  const hasUniqueChars = new Set(password).size >= 3;

  return (
    hasUppercase && hasDigit && hasSpecialChar && isLongEnough && hasUniqueChars
  );
};

export const getErrorMessage = (label:string) => errorsList.filter(x=> x.label === label)[0].message
