import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { getTotalQuestionsNumb } from 'api/getTotalQuestionsNumb';
import {Spinner} from 'UI/spinner';
import {ErrorMessage} from 'UI/errorMessage';
import {
  ContextLanguage,
  ContextProfession,
} from 'components/context';

import { getQuantityThemes } from '../../api/getInfoQuestions';
import clock from 'assets/images/modules/callToAction/clock.svg';
import barChart from 'assets/images/modules/callToAction/bar-chart.svg';
import helpCircle from 'assets/images/modules/callToAction/help-circle.svg';

import {
  StyledUl,
  StyledImg,
  StyledLi,
} from 'modules/callToAction/components/infoTest/infoTest.styled';

import type { InfoTestBlock } from 'types/types';

type InfoTestProps = {
  isChooseProfession: boolean;
  setChooseProfession: (item: boolean) => void;
};

const InfoTest = ({
  isChooseProfession,
  setChooseProfession,
}: InfoTestProps) => {
  const [profession]: [string, (lang: string) => void] =
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

  useEffect(() => {
    setChooseProfession(false);
  }, []);

  const { t } = useTranslation('', {
    keyPrefix: 'modules.callToAction.components.infoTest',
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quantityQuestions, setQuantityQuestions] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);

  const infoTestBlock: InfoTestBlock[] = [
    {
      text: ` ${isChooseProfession ? '~' + quantityQuestions : '0'} ${t(
        'min',
      )}`,
      srcIcon: clock,
      alt: 'icon of clock',
    },
    {
      text: `${isChooseProfession ? quantityQuestions : '0'} ${t('questions')}`,
      srcIcon: helpCircle,
      alt: 'icon of question in circle',
    },
    {
      text: `${isChooseProfession ? quantityThemes : '0'} ${t('block')}`,
      srcIcon: barChart,
      alt: ' icon of bar chart ',
    },
  ];

  const view = infoTestBlock.map((item, index) => {
    return (
      <StyledLi key={index + 1}>
        <StyledImg src={item.srcIcon} alt={item.alt} />
        <span style={{color: 'var(--color-white)'}}>{item.text}</span>
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
