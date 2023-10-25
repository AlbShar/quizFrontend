import { useTranslation } from 'react-i18next';
import {FeedbackLink} from 'UI/feedbackLink';

import { StyledLi, StyledUl, StyledLink } from './List.Styled';

type ListProps = {
  onClickCloseBtn?: () => void;
};

export const List = ({ onClickCloseBtn }: ListProps) => {

  const { t } = useTranslation('', {
    keyPrefix: 'UI.list',
  });
  
  return (
    <StyledUl>
      <StyledLi>
        <FeedbackLink onClickCloseBtn={onClickCloseBtn} />
      </StyledLi>
      <StyledLi>
        <StyledLink href='#team'> {t('team')}</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink href='#rules'>{t('rules')}</StyledLink>
      </StyledLi>
    </StyledUl>
  );
};

