import { Field, ErrorMessage } from 'formik';

import { StyledArticle, StyledLabel } from './styles/input.Styled';
import './styles/input.style.css';

import type { TDataInput } from '../types';

type TInput = TDataInput & { setRef: (elem: HTMLInputElement) => void };

const Input = ({ setRef, name, type, placeholder, text }: TInput) => {
  return (
    <StyledArticle>
      <StyledLabel htmlFor='name'>{text}</StyledLabel>
      <Field
        type={type}
        name={name}
        className='input'
        placeholder={placeholder}
        innerRef={setRef}
      />
      <ErrorMessage className='error' name={name} component='div' />
    </StyledArticle>
  );
};

export default Input;
