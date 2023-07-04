import { useContext } from 'react';

import LinkBtn from '../../../../UI/LinkBtn/LinkBtn';
import { sendUserInfoDB } from '../../api/sendUserInfoDb';
import { ContextIdUser } from '../../../../components/Context';

type ButtonProps = {
  userName: string;
  userEmail: string;
  isDisabledBtn: boolean;
};

const Button = ({
  userName,
  userEmail,
  isDisabledBtn,
}: ButtonProps): JSX.Element => {
    const [idUser]: [string, (lang: string) => void] =
      useContext(ContextIdUser);

  const onClickLinkBtn = () => {
    sendUserInfoDB(idUser, userName, userEmail);
  };

  return (
    <LinkBtn
      isDisabledBtn={isDisabledBtn}
      text='Получить_результат'
      pageTo='/results'
      onClick={onClickLinkBtn}
    />
  );
};

export default Button;
