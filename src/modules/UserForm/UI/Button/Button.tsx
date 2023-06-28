import LinkBtn from '../../../../UI/LinkBtn/LinkBtn';
import { getIdUser } from '../../../../helpers/getIdUser';
import { sendUserInfoDB } from '../../api/sendUserInfoDb';

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
  const onClickLinkBtn = () => {
    sendUserInfoDB(getIdUser('idUser'), userName, userEmail);
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
