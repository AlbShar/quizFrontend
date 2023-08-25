import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './link.css';

type FeedbackProps = {
  onClickCloseBtn?: () => void;
  style?: CSSProperties;
};

const Feedback = ({ onClickCloseBtn, style }: FeedbackProps) => {
  const { t } = useTranslation();

  return (
    <Link to='/feedback' className='link' onClick={onClickCloseBtn} style={style}>
      {t('Обратная_связь')}
    </Link>
  );
};

export default Feedback;
