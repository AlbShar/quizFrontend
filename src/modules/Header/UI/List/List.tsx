import { useTranslation } from 'react-i18next';
import {Feedback} from 'UI/Feedback/Feedback';

import { StyledLi, StyledUl, StyledLink } from './List.Styled';

type ListProps = {
  onClickCloseBtn?: () => void;
};

const List = ({ onClickCloseBtn }: ListProps) => {

  const { t } = useTranslation('', {
    keyPrefix: 'UI.list',
  });
  
  return (
    <StyledUl>
      <StyledLi>
        <Feedback onClickCloseBtn={onClickCloseBtn} />
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

export default List;
