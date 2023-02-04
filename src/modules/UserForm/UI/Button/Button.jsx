import React from 'react';
import LinkBtn from '../../../../UI/LinkBtn/LinkBtn';
import { useTranslation } from "react-i18next";
import { checkIsUserData } from '../../helpers/checkIsUserData';
import { getIdUser } from '../../../../helpers/getIdUser';
import { sendUserInfoDB } from '../../api/sendUserInfoDb';


const Button = () => {
    const { t } = useTranslation();

    return (
        <LinkBtn pageTo="/results" someAction={(e) => {
            if (checkIsUserData()) {
                sendUserInfoDB(getIdUser());
              } else {
                e.preventDefault();
              }
        }}>{t("Получить_результат")}</LinkBtn> 
    );
};

export default Button;