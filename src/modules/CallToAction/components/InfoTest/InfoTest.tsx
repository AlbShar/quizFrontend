import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { getQuantityThemes } from '../../api/getInfoQuestions';
import { getTotalQuestionsNumb } from '../../../../api/getTotalQuestionsNumb';
import Spinner from '../../../../UI/Spinner/Spinner';
import ErrorMessage from '../../../../UI/ErrorMessage/ErroMessage';
import { getValueFromLocalStorage } from '../../../../helpers/getValueFromLocalStorage';
import { StyledUl, StyledImg, StyledLi } from './InfoTest.styled';

import type { InfoTestBlock } from '../../../../types/types';
import {
  ContextLanguage,
  ContextProfession,
} from '../../../../components/Context';

type InfoTestProps = {
  isChooseProfession: boolean;
};

const InfoTest = ({ isChooseProfession }: InfoTestProps) => {
  const [profession,]: [string, (lang: string) => void] =
    useContext(ContextProfession);
  const [lang, setLang]: [string, (lang: string) => void] =
    useContext(ContextLanguage);
  const [quantityThemes, setQuantityThemes] = useState<number>(0);
  const url = `${profession}/questions`;

  const updateQuantityThemes = (quantity: number) => {
    setQuantityThemes(quantity);
  };

  useEffect(() => {
    getQuantityThemes(url, lang).then(updateQuantityThemes);
  }, [profession]);

  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quantityQuestions, setQuantityQuestions] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);

  const infoTestBlock: InfoTestBlock[] = [
    {
      text: ` ${isChooseProfession ? '~' + quantityQuestions : '_'} ${t(
        'Время',
      )}`,
      srcIcon: require('../../icons/clock.png'),
      alt: 'icon of clock',
    },
    {
      text: `${isChooseProfession ? quantityQuestions : '_'} ${t('Вопросов')}`,
      srcIcon: require('../../icons/barchart.png'),
      alt: 'icon of bar chart',
    },
    {
      text: `${isChooseProfession ? quantityThemes : '_'} ${t(
        'Блока',
      )}`,
      srcIcon: require('../../icons/helpcircle.png'),
      alt: 'icon of question in circle',
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

  // if (!isChooseProfession) {
  //   return (
  //       <SkeletonInfo />
  //   );
  // }

  return (
    <nav>
      <StyledUl>
        {content} {spinner} {error}
      </StyledUl>
    </nav>
  );
};

export default InfoTest;
