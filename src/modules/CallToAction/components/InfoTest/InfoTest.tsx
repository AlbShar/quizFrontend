import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { getTotalQuestionsNumb } from '../../../../api/getTotalQuestionsNumb';
import Spinner from '../../../../UI/Spinner/Spinner';
import ErrorMessage from '../../../../UI/ErrorMessage/ErroMessage';
import { ContextProfession } from '../../../../components/Context';

import { StyledUl, StyledImg, StyledLi } from './InfoTest.styled';

import type { InfoTestBlock } from '../../../../types/types';

type InfoTestProps = {
  isChooseProfession: boolean;
};

const InfoTest = ({ isChooseProfession }: InfoTestProps) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quantityQuestions, setQuantityQuestions] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [profession]: [string, (lang: string) => void] =
    useContext(ContextProfession);

  const infoTestBlock: InfoTestBlock[] = [
    {
      text: ` ${isChooseProfession ? '~' + quantityQuestions : '-'} ${t(
        'Время',
      )}`,
      srcIcon: require('../../icons/clock.png'),
      alt: 'icon of clock',
    },
    {
      text: t('Возрастающая_сложность'),
      srcIcon: require('../../icons/helpcircle.png'),
      alt: 'icon of question in circle',
    },
    {
      text: `${isChooseProfession ? quantityQuestions : '-'} ${t('Вопросов')}`,
      srcIcon: require('../../icons/barchart.png'),
      alt: 'icon of bar chart',
    },
  ];

  const view = infoTestBlock.map((item, index) => {
    return (
      <StyledLi key={index + 1}>
        <StyledImg src={item.srcIcon} alt={item.alt} />
        <span>{item.text}</span>
      </StyledLi>
    );
  });

  const content = !(isLoading || isError) ? view : null;
  const spinner = isLoading ? (
    <Spinner width={50} height={50} color='#fcfdff' margin='auto' />
  ) : null;
  const error = isError ? <ErrorMessage /> : null;

  const dataHasLoaded = (numbQuestions) => {
    setIsLoading(false);
    setQuantityQuestions(numbQuestions);
  };

  const onError = (error) => {
    setIsError(true);
    setIsLoading(false);
    console.error(error);
  };

  useEffect(() => {
    if (profession) {
      const url = `${profession}/questions`;
      getTotalQuestionsNumb(url).then(dataHasLoaded).catch(onError);
    } else {
      setIsLoading(false);
    }
  }, [profession]);

  return (
    <nav>
      <StyledUl>
        {content} {spinner} {error}
      </StyledUl>
    </nav>
  );
};

export default InfoTest;
