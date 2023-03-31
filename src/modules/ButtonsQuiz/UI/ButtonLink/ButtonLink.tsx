import { FC } from "react";
import LinkBtn from "../../../../UI/LinkBtn/LinkBtn";


type TButtonsLink = {
  onClickButtonHandler: () => void
};

const ButtonLink: FC<TButtonsLink> = ({onClickButtonHandler}) => {

  return (
    <LinkBtn
          text="Закончить тест"
          pageTo="/contact"
          onClick={onClickButtonHandler}
        />
  );
};

export default ButtonLink;
