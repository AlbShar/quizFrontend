import { useState } from "react";
import Container from "../../../components/Container/Container";

const UserAnswers = () => {
  interface IUserAnswers {
    point: number;
    userAnswer: string;
  }

  const [userAnswers, setUserAnswers] = useState<IUserAnswers[]>([
    {
      point: 0,
      userAnswer: "E. Все вышеперечисленное",
    },
    {
        point: 1,
        userAnswer: "E. Все вышеперечисленное",
      },
  ]);

  return (
    <Container>
      <details open>
        <summary>Ответы</summary>
        <ul>
        {userAnswers.map(userAnswer => {
            const isRight = userAnswer.point ? true : false;
            let color = isRight ? 'green' : 'red';
            const className = {border: `1px solid ${color}`};
            return (
                <li style={className}>
                    <div>{`Ваш ответ: ${userAnswer.userAnswer}`}</div>
                </li>
            )
        })}
        </ul>
      </details>
    </Container>
  );
};

export default UserAnswers;
