// eslint-disable-next-line no-useless-escape
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// eslint-disable-next-line no-invalid-regexp, no-useless-escape
const bdPhoneNumberRegex = /^(?:\+?88)?01\d{9}$/;
// eslint-disable-next-line no-useless-escape
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

class FormValidation {
  isEmpty(value) {
    return value?.trim().length === 0;
  }

  validateEmail(email) {
    if (email) {
      return emailRegex.test(email);
    }
    return false;
  }

  validateMobile(mobile) {
    if (mobile) {
      return bdPhoneNumberRegex.test(mobile);
    }
    return false;
  }

  validatePassword(password) {
    if (password) {
      return strongPasswordRegex.test(password);
    }
    return false;
  }
}

export const {
  isEmpty,
  validateEmail,
  validateMobile,
  validatePassword
} = new FormValidation();
