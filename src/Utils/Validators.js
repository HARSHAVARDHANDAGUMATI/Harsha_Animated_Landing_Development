export const contactValidation = {
  name: {
    required: 'Please tell us your name.',
    minLength: {
      value: 2,
      message: 'Name should be at least 2 characters.',
    },
  },
  email: {
    required: 'We need your email to reply.',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Enter a valid email address.',
    },
  },
  company: {
    maxLength: {
      value: 50,
      message: 'Company name is a little too long.',
    },
  },
  message: {
    required: 'A short project brief helps us a lot.',
    minLength: {
      value: 24,
      message: 'Please share at least 24 characters.',
    },
  },
};
