import {FC} from "react";
import { MouseEvent } from "react";

import LinkBtn from "../../../../UI/LinkBtn/LinkBtn";
import { checkIsUserData } from "../../helpers/checkIsUserData";
import { getIdUser } from "../../../../helpers/getIdUser";
import { sendUserInfoDB } from "../../api/sendUserInfoDb";



const Button: FC = () => {

  const onClickLinkBtn = (e: MouseEvent) => {
    if (checkIsUserData()) {
        sendUserInfoDB(getIdUser("idUser"));
      } else {
        e.preventDefault();
      }
};

    return (
        <LinkBtn text="Получить_результат" pageTo="/results" onClick={onClickLinkBtn} />
    );
};

export default Button;