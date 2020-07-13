const mongoose = require('mongoose');
const validatorCheck = require('validator');
const validatorMessage = require('../libs/validatormessage');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: validatorMessage.required,
    minlength: validatorMessage.minLength(2),
    maxlength: validatorMessage.maxLength(30),
  },
  about: {
    type: String,
    required: validatorMessage.required,
    minlength: validatorMessage.minLength(2),
    maxlength: validatorMessage.maxLength(30),
  },
  avatar: {
    type: String,
    required: validatorMessage.required,
    validate: {
      validator(v) {
        return validatorCheck.isURL(v);
      },
      message: (props) => `${props.value} - вместо этого должна быть ссылка на изображение!`,
    },
  },
  email: {
    type: String,
    required: validatorMessage.required,
    validate: {
      validator(v) {
        return validatorCheck.isEmail(v);
      },
      message: (props) => `${props.value} - вместо этого должен быть корректный email`,
    },
  },
  password: {
    type: String,
    required: validatorMessage.required,
    minlength: validatorMessage.minLength(8),
  },
});

module.exports = mongoose.model('user', userSchema);
