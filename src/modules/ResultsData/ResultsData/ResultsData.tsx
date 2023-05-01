import {FC} from "react";

import Container from "../../../components/Container/Container";
import Result from "../components/Result";
import Time from "../components/Time";

import { StyledSection } from "./ResultsData.Styled";


const ResultsData: FC = () => {  
    return (
        <Container>
            <StyledSection>
                <Result/>
                <Time/>
            </StyledSection>
        </Container>
    );
};

export default ResultsData;

