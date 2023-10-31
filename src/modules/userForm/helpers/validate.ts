import type { TErrors } from '../types';

export const validate = ({ name, email, text }) => {
  const errors: TErrors = {};
  if (!name) {
    errors.name = 'Введите имя';
  } else if (name.length < 2) {
    errors.name = 'Имя не должно содержать меньше 2-х символов';
  } else if (name.length > 30) {
    errors.name = 'Максимальная длина - 30 символов';
  }

  if (!text) {
    errors.text = 'Введите текст сообщения';
  }

  if (!email) {
    errors.email = 'Введите свою почту';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'Введите корректный E-mail';
  }
  return errors;
};
