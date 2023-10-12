import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';


import Button from '../../../UI/Button/Button';
import sendEmailApi from '../api/sendEmail';
import './userForm.styles.css';

const UserForm = () => {
  const refsInputs: HTMLInputElement[] = [];
  const setRef = (elem: HTMLInputElement) => {
    refsInputs.push(elem as HTMLInputElement);
  };
  const [isSuccessSendingEmail, setSuccessSendingEmail] = useState<
    boolean | null
  >(null);

  type TErrors = {
    [key in string]: string;
  };

  const validate = ({ name, email, text }) => {
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

  const onFocusFirstInput = () => {
    refsInputs[0].focus();
  };

  useEffect(() => {
    onFocusFirstInput();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => setSuccessSendingEmail(null), 7000);

    return () => {
      clearTimeout(timerId);
    };
  }, [isSuccessSendingEmail]);

  return (
    <Formik
      initialValues={{ name: '', email: '', text: '' }}
      validate={validate}
      onSubmit={async (values , { resetForm, setSubmitting }) => {
        const isDataSent: boolean = await sendEmailApi(values);

        if (isDataSent) {
          resetForm();
          setSubmitting(false);
          setSuccessSendingEmail(true);
        } else {
          setSuccessSendingEmail(false);
        }

      }}
    >
      {({ isSubmitting }) => (
        <View
          setRef={setRef}
          isSuccessSendingEmail={isSuccessSendingEmail}
          isSubmitting={isSubmitting}
        />
      )}
    </Formik>
  );
};

type TView = {
  setRef: (elem: HTMLInputElement) => void;
  isSubmitting: boolean;
  isSuccessSendingEmail: boolean | null;
};

const View = ({ setRef, isSuccessSendingEmail, isSubmitting }: TView) => {
  const { t } = useTranslation();

  return (
    <Form>
      <article className='article'>
        <label htmlFor='name' className='label'>
          {t('Ваше_имя')}
        </label>
        <Field
          type='name'
          name='name'
          className='input'
          placeholder='Имя и фамилия'
          innerRef={setRef}
        />
        <ErrorMessage className='error' name='name' component='div' />
      </article>
      <article className='article'>
        <label htmlFor='email' className='label'>
          Email
        </label>
        <Field
          type='email'
          name='email'
          className='input'
          placeholder='Почта'
          innerRef={setRef}
        />
        <ErrorMessage className='error' name='email' component='div' />
      </article>
      <article className='article'>
        <label htmlFor='text' className='label'>
          Сообщение
        </label>
        <Field
          type='textarea'
          name='text'
          className='input'
          as='textarea'
          innerRef={setRef}
        />
        <ErrorMessage className='error' name='text' component='div' />
      </article>
      <article className='article'>
        {isSuccessSendingEmail === true ? (
          <div className='success'>Поздравляю, письмо отправлено!</div>
        ) : isSuccessSendingEmail === false ? (
          <div className='error'>
            Письмо не удалось отправить! Повторите попытку чуть позже
          </div>
        ) : null}
      </article>
      <Button text='Отправить' disabled={isSubmitting} />
    </Form>
  );
};

export default UserForm;
