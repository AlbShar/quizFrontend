import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getTotalQuestionsNumb } from '../../../../api/getTotalQuestionsNumb';
import Spinner from '../../../../UI/Spinner/Spinner';


import { StyledUl, StyledImg, StyledLi } from './InfoTest.styled';

export interface IInfoTestBlock {
  alt: string;
  text: string;
  srcIcon: string;
}

const InfoTest: FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quantityQuestions, setQuantityQuestions] = useState<number>(0);

  const dataHasLoaded = (numbQuestions) => {
    setIsLoading(false);
    setQuantityQuestions(numbQuestions);

  };

  useEffect(() => {
    getTotalQuestionsNumb().then(dataHasLoaded);
  }, []);

  const infoTestBlock: IInfoTestBlock[] = [
    {
      text: `~ ${quantityQuestions} ${t('Время')}`,
      srcIcon: require('../../icons/clock.png'),
      alt: 'icon of clock',
    },
    {
      text: t('Возрастающая_сложность'),
      srcIcon: require('../../icons/helpcircle.png'),
      alt: 'icon of question in circle',
    },
    {
      text: `${quantityQuestions} ${t('Вопросов')}`,
      srcIcon: require('../../icons/barchart.png'),
      alt: 'icon of bar chart',
    },
  ];
  const elementsInfoTestBlock = infoTestBlock.map((item, index) => {
    return (
      <StyledLi key={index + 1}>
        <StyledImg src={item.srcIcon} alt={item.alt} />
        <span>{item.text}</span>
      </StyledLi>
    );
  });

  return (
    <nav>
      <StyledUl>
        {isLoading ? (
          <Spinner width={50} height={50} color='#fcfdff' margin='auto' />
        ) : (
          elementsInfoTestBlock
        )}
      </StyledUl>
    </nav>
  );
};

export default InfoTest;
