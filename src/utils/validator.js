const regEmail =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

const validateEmail = email => {
  return regEmail.test(email);
};

const hasLength = (value, min) => {
  return value.length >= min;
};

export const validatePassword = (password, confirmPassword) => {
  return password === confirmPassword ? true : false;
};

export const loginValidator = ({ email, password }) => {
  return {
    isValidEmail: validateEmail(email),
    isValidPassword: hasLength(password, 8),
  };
};

export const signupValidator = ({ email, password, confirmPassword }) => {
  return {
    isValidEmail: email.length === 0 || validateEmail(email),
    isValidPassword: password.length === 0 || hasLength(password, 8),
    isValidConfirmPassword: hasLength(confirmPassword, 8),
    isSamePassword: validatePassword(password, confirmPassword),
  };
};
