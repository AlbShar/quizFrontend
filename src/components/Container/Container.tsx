import React, {FC} from "react";
import { ContainerStyled } from "./Container.styled";
import Dropdown from "../../UI/Dropdown/Dropdown";


interface IContainer {
    children: React.ReactNode,
}

const Container: FC<IContainer> = ({children}) => {
    return (
        <ContainerStyled >
            {children}
        </ContainerStyled>
    );
};

export default Container;