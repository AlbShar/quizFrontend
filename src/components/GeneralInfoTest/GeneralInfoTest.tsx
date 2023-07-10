import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import InfoBlock from '../InfoBlock/InfoBlock';
import { convertJSONToText } from '../../helpers/convertJSONToText';

import type { InfoBlocks, JSONText } from '../../types/types';

const GeneralInfoTest = () => {
  const { t } = useTranslation();
  const generalInfo: InfoBlocks[] = [
    {
      title: t('Особенности_теста'),
      img: require('./images/variants.png'),
      id: 'generalInfoTestText',
      alt: 'Парень ищет верный ответ',
      text: t('Данный_тест'),
    },
    {
      title: t('Как_проходить'),
      text: t('Пройти_тест'),
    },
    {
      title: t('Результаты_теста'),
      img: require('./images/chooseVariant.png'),
      alt: 'Тест с выбранными вариантами ответа',
      text: t('После_прохождения'),
    },
  ];
  const blocksHomepage = generalInfo.map((block, index) => (
    <InfoBlock
      key={index + 1}
      title={block.title}
      text={block.text}
      imgSrc={block.img || ''}
      imgAlt={block.alt || 'Картинка'}
      idForText={block.id}
    />
  ));

  const JSONText: [JSONText] = [
    { selector: '#generalInfoTestText', json: t('Данный_тест') },
  ];

  useEffect(() => {
    convertJSONToText(JSONText);
  });

  return <section>{blocksHomepage}</section>;
};

export default GeneralInfoTest;
