import {FC} from "react";

import Container from "../../../components/Container/Container";
import Result from "../components/Result";
import Time from "../components/Time";

import { StyledSection } from "./ResultsData.Styled";

type ResultsDataProps = {
    setRightAnswers: (points: number) => void
};
const ResultsData: FC<ResultsDataProps> = ({setRightAnswers}) => {  
    return (
        <Container>
            <StyledSection>
                <Result setRightAnswers={setRightAnswers}/>
                <Time/>
            </StyledSection>
        </Container>
    );
};

export default ResultsData;

