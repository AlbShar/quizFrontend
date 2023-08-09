// import {
//   useState,
//   ChangeEvent,
//   useEffect,
//   FocusEvent,
//   KeyboardEvent,
// } from 'react';
// import { useTranslation } from 'react-i18next';

// import InputField from '../UI/InputField/InputField';
// import Button from '../UI/Button/Button';
// import useValidateName from '../hooks/useValidateName';
// import useValidateEmail from '../hooks/useValidateEmail';

// import {
//   StyledSpan,
//   StyledPForm,
//   StyledFieldset,
//   StyledSpanWarning,
// } from './UserForm.Styled';

// type TDataInputs = {
//   htmlFor: 'username' | 'email';
//   placeholder: 'Ваше_имя' | 'E-mail';
//   type: 'text' | 'email';
//   id: 'username' | 'email';
//   name: 'userName' | 'userEmail';
//   nameField: string;
//   value: string;
//   isValidation: boolean;
//   isFirstRender: boolean;
//   onError: (
//     e: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
//   ) => void;
//   onValidateInput: (
//     e: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
//   ) => void;
//   warningMessage: string;
//   isValueValidate: boolean;
//   keyHint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
// };

// const UserForm = () => {
//   const { t } = useTranslation();

//   const {
//     valueUserName,
//     isFirstRenderName,
//     isNameValidation,
//     setValueUserName,
//     hideErrorInputName,
//     onValidateInputName,
//     warningMessageName,
//   } = useValidateName();
//   const {
//     valueEmail,
//     isFirstRenderEmail,
//     isEmailValidation,
//     setValueEmail,
//     hideErrorInputEmail,
//     onValidateInputEmail,
//     warningMessageEmail,
//   } = useValidateEmail();

//   const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true);

//   const refsInputs: HTMLInputElement[] = [];
//   const dataInputs: TDataInputs[] = [
//     {
//       htmlFor: 'username',
//       placeholder: 'Ваше_имя',
//       type: 'text',
//       id: 'username',
//       name: 'userName',
//       nameField: t('Ваше_имя'),
//       value: valueUserName,
//       isValidation: isNameValidation,
//       isFirstRender: isFirstRenderName,
//       onError: hideErrorInputName,
//       onValidateInput: onValidateInputName,
//       warningMessage: warningMessageName,
//       isValueValidate: isNameValidation,
//       keyHint: 'next',
//     },
//     {
//       htmlFor: 'email',
//       placeholder: 'E-mail',
//       type: 'email',
//       id: 'email',
//       name: 'userEmail',
//       nameField: 'Email',
//       value: valueEmail,
//       isValidation: isEmailValidation,
//       isFirstRender: isFirstRenderEmail,
//       onError: hideErrorInputEmail,
//       onValidateInput: onValidateInputEmail,
//       warningMessage: warningMessageEmail,
//       isValueValidate: isEmailValidation,
//       keyHint: 'send',
//     },
//   ];

//   const onValueInput = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//   ) => {
//     const target = e.target;
//     const newValue = target.value;
//     const type = target.type;
//     type === 'text'
//       ? setValueUserName((_) => newValue)
//       : setValueEmail((_) => newValue);
//   };

//   useEffect(() => {
//     const onFocusNameField = () => {
//       refsInputs[0]?.focus();
//     };
//     onFocusNameField();
//   }, []);

//   useEffect(() => {
//     setIsDisabledBtn(!(isEmailValidation && isNameValidation));
//   }, [isEmailValidation, isNameValidation]);

//   const setRefs = (elem: HTMLInputElement) => {
//     refsInputs.push(elem);
//   };

//   const inputsCallback = (dataInput: TDataInputs, index: number) => {
//     const {
//       htmlFor,
//       placeholder,
//       nameField,
//       type,
//       id,
//       name,
//       isValidation,
//       value,
//       isFirstRender,
//       onError,
//       onValidateInput,
//       warningMessage,
//       isValueValidate,
//       keyHint,
//     } = dataInput;

//     return (
//       <StyledPForm key={index + 1}>
//         <label htmlFor={htmlFor}>
//           <StyledSpan>{nameField}</StyledSpan>
//           <InputField
//             setRefs={setRefs}
//             placeholder={placeholder}
//             type={type}
//             id={id}
//             name={name}
//             value={value}
//             onChange={onValueInput}
//             onError={onError}
//             onValidateInput={onValidateInput}
//             isValueValidate={isValueValidate}
//             isFirstRender={isFirstRender}
//             keyHint={keyHint}
//           />
//           {isFirstRender ? null : isValidation ? null : (
//             <StyledSpanWarning>{warningMessage}</StyledSpanWarning>
//           )}
//         </label>
//       </StyledPForm>
//     );
//   };

//   return (
//     <form>
//       <StyledFieldset>{dataInputs.map(inputsCallback)}</StyledFieldset>
//       <Button
//         userName={valueUserName}
//         userEmail={valueEmail}
//         isDisabledBtn={isDisabledBtn}
//       />
//     </form>
//   );
// };

// export default UserForm;

import Button from '../../../UI/Button/Button';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './userForm.styles.css';

const UserForm = () => {
  const { t } = useTranslation();
  type TErrors = {
    [key in string]: string;
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', text: '' }}
      validate={({ name, email, text }) => {
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
      }}
      onSubmit={({ name, email, text }) => {
        console.log(name, email, text);
      }}
    >
      {({ isSubmitting }) => (
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
            />
            <ErrorMessage className='error' name='email' component='div' />
          </article>
          <article className='article'>
            <label htmlFor='text' className='label'>
              Сообщение
            </label>
            <Field type='textarea' name='text' className='input' as='textarea' />
            <ErrorMessage className='error' name='text' component='div' />
          </article>
          <Button text='Отправить' disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
