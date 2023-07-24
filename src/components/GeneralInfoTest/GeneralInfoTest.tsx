import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import InfoBlock from '../InfoBlock/InfoBlock';
import { convertJSONToText } from '../../helpers/convertJSONToText';

import type { InfoBlocks, JSONText } from '../../types/types';

const GeneralInfoTest = () => {
  const { t } = useTranslation();
  const generalInfo: InfoBlocks[] = [
    {
      title: t('Что_получите'),
      id: 'generalInfoTestText',
      text: t('Благодаря_вопросам'),
    },
    {
      title: t('Как_проходить'),
      text: t('Пройти_тест'),
    },
    {
      title: t('Результаты_теста'),
      text: t('После_прохождения'),
    },
  ];
  const blocksHomepage = generalInfo.map((block, index) => (
    <InfoBlock
      key={index + 1}
      title={block.title}
      text={block.text}
      idForText={block.id}
    />
  ));

  return <section>{blocksHomepage}</section>;
};

export default GeneralInfoTest;
