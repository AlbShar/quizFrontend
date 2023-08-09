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

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const UserForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', text: '' }}
      onSubmit={({ name, email, text }) => {
        console.log(name, email, text);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type='name' name='name' />
          <ErrorMessage name='name' component='div' />
          <Field type='email' name='email' />
          <ErrorMessage name='email' component='div' />
          <Field type='textarea' name='text' />
          <ErrorMessage name='text' component='div' />
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
