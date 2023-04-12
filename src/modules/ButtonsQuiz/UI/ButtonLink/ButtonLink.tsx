import { FC, MouseEvent } from "react";

import LinkBtn from "../../../../UI/LinkBtn/LinkBtn";


type TButtonsLink = {
  onClickButtonHandler: (e: MouseEvent) => void
};

const ButtonLink: FC<TButtonsLink> = ({onClickButtonHandler}) => {

  return (
    <LinkBtn
          text="Закончить тест"
          pageTo="/contact"
          onClick={onClickButtonHandler}
          id="btnFinish"
        />
  );
};

export default ButtonLink;
