import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import {Button} from 'UI/Button/Button';

import sendEmailApi from '../api/sendEmail';
import Input from '../UI/input';
import useHandleInputs from '../hooks/useHandleInputs';
import { validate } from '../helpers/validate';

import {
  StyledArticle,
  StyledDivSuccess,
  StyledDivError,
} from './userForm.Styled';

import type { TDataInput } from '../types';

const UserForm = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.userForm',
  });
  const { isSuccessSendingEmail, setSuccessSendingEmail, setRef } =
    useHandleInputs();

  const dataInputs: TDataInput[] = [
    {
      text: t('name'),
      type: 'name',
      placeholder: t('placeholderName') || 'placeholder',
      name: 'name',
    },
    {
      text: 'Email',
      type: 'email',
      placeholder: t('placeholderName') || 'placeholder',
      name: 'email',
    },
    {
      text: t('message'),
      type: 'textarea',
      placeholder: t('placeholderMessage') || 'placeholder',
      name: 'text',
    },
  ];

  return (
    <Formik
      initialValues={{ name: '', email: '', text: '' }}
      validate={validate}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
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
        <Form>
          {dataInputs.map((input, index) => (
            <Input {...input} key={index} setRef={setRef} />
          ))}
          <StyledArticle>
            {isSuccessSendingEmail === true ? (
              <StyledDivSuccess>
                Поздравляю, письмо отправлено!
              </StyledDivSuccess>
            ) : isSuccessSendingEmail === false ? (
              <StyledDivError>
                Письмо не удалось отправить! Повторите попытку чуть позже
              </StyledDivError>
            ) : null}
          </StyledArticle>
          <Button text={t('btnText')} disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
