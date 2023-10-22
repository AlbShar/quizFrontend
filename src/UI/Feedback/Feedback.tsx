import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './link.css';

type FeedbackProps = {
  onClickCloseBtn?: () => void;
  style?: CSSProperties;
};

export const Feedback = ({ onClickCloseBtn, style }: FeedbackProps) => {
  const { t } = useTranslation('', {
    keyPrefix: "UI.feedback"
  });

  return (
    <Link to='/feedback' className='link' onClick={onClickCloseBtn} style={style}>
      {t('text')}
    </Link>
  );
};

