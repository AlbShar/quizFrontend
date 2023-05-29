import {FC} from "react";
import { MouseEvent } from "react";

import LinkBtn from "../../../../UI/LinkBtn/LinkBtn";
import { checkIsUserData } from "../../helpers/checkIsUserData";
import { getIdUser } from "../../../../helpers/getIdUser";
import { sendUserInfoDB } from "../../api/sendUserInfoDb";

type ButtonProps = {
  userName: string,
  userEmail: string,
  isDisabledBtn: boolean
};

const Button: FC<ButtonProps> = ({userName, userEmail, isDisabledBtn}) => {

  const onClickLinkBtn = (e: MouseEvent) => {
    if (checkIsUserData(userName, userEmail)) {
        sendUserInfoDB(getIdUser("idUser"), userName, userEmail);
      } else {
        e.preventDefault();
      }
};

    return (
        <LinkBtn isDisabledBtn={isDisabledBtn} text="Получить_результат" pageTo="/results" onClick={onClickLinkBtn} />
    );
};

export default Button;