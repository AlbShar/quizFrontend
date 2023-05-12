import {FC, useState, useEffect} from "react";

import { StyledArticle, StyledP, StyledImg } from "./Graphic";
import { getTotalQuestionsNumb } from "../../api/getTotalQuestionsNumb";
import Piechart from "../../UI/Doughnut/Doughnut";
import Spinner from "../../UI/Spinner/Spinner";

type GraphicType = {
    rightAnswers: number
};

const Grpahic: FC<GraphicType> = ({rightAnswers}) => {

    const [totalQuestionNumbers, setTotalQuestionNumbers] = useState<number>(0);
    const wrongQuestions = totalQuestionNumbers - rightAnswers;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const view = () => {
        return (
            <StyledArticle>
            <Piechart dataPieChart={[rightAnswers, wrongQuestions]}/>
            <StyledP>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id temporibus 
                deleniti maiores fuga dolore, ut sequi ducimus earum consequuntur ab, est enim? 
                Cumque odit repudiandae omnis laudantium nam quae commodi.
            </StyledP>
        </StyledArticle>
        )
    };
    const spinner = isLoading ? <Spinner width={50} height={50} color={"#1f2ce0"} margin="0 auto"/> : null;
    const content = !isLoading ? view() : null;
    
    useEffect(() => {
        getTotalQuestionsNumb().then(res => {
            if (res) {
                setTotalQuestionNumbers(res);
                setIsLoading(false)
            }
        });
    }, []);

    return (
        <>
        {spinner} {content}
        </>
    );
};

export default Grpahic;