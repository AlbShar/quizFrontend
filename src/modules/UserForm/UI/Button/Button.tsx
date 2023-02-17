import {FC} from 'react';
import LinkBtn from '../../../../UI/LinkBtn/LinkBtn';
import { checkIsUserData } from '../../helpers/checkIsUserData';
import { getIdUser } from '../../../../helpers/getIdUser';
import { sendUserInfoDB } from '../../api/sendUserInfoDb';
import { MouseEvent } from "react";



const Button: FC = () => {

    return (
        <LinkBtn text="Получить_результат" pageTo="/results" onClick={(e: MouseEvent) => {
            if (checkIsUserData()) {
                sendUserInfoDB(getIdUser("idUser"));
              } else {
                e.preventDefault();
              }
        }} />
    );
};

export default Button;