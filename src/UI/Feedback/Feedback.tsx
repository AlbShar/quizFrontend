import { Link } from "react-router-dom";
import "./link.css"

type FeedbackProps = {
  onClickCloseBtn?: () => void;
};

const Feedback = ({ onClickCloseBtn }: FeedbackProps) => {
  return (
    <Link to='/feedback' className='link' onClick={onClickCloseBtn}>
      Обратная связь
    </Link>
  );
};

export default Feedback;