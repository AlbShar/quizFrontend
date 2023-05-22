import { FC, useState, useEffect } from "react";

import { StyledArticle, StyledP, StyledSpan, StyledDoughuntWrapper } from "./Doughunt.Styled";

import { getTotalQuestionsNumb } from "../../api/getTotalQuestionsNumb";
import ChartDoughnut from "../../components/ChartDoughnut/ChartDoughnut";
import Spinner from "../../UI/Spinner/Spinner";

type DoughnutProps = {
  rightAnswers: number;
};

const Doughnut: FC<DoughnutProps> = ({ rightAnswers }) => {
  const [totalQuestionNumbers, setTotalQuestionNumbers] = useState<number>(0);
  const percentRightQuestions = +((100 * rightAnswers) / totalQuestionNumbers).toFixed(1);
  const percentWrongQuestions = +(100 - percentRightQuestions).toFixed(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const view = () => {
    return (
      <StyledArticle>
        <StyledDoughuntWrapper>
          <ChartDoughnut
            dataPieChart={[percentRightQuestions, percentWrongQuestions]}
          />
          <StyledSpan>{`${percentRightQuestions} %`}</StyledSpan>
        </StyledDoughuntWrapper>
        <StyledP>
          График отображает процент вопросов, на которые были даны верные и
          неверные ответы
        </StyledP>
      </StyledArticle>
    );
  };
  const spinner = isLoading ? (
    <Spinner width={50} height={50} color={"#1f2ce0"} margin="0 auto" />
  ) : null;
  const content = !isLoading ? view() : null;

  useEffect(() => {
    getTotalQuestionsNumb().then((res) => {
      if (res) {
        setTotalQuestionNumbers(res);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <>
      {spinner} {content}
    </>
  );
};

export default Doughnut;
