import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import InfoBlock from '../InfoBlock/InfoBlock';
import { convertJSONToText } from '../../helpers/convertJSONToText';
import { InfoBlocks, JSONText } from '../../types/types';

const GeneralInfoTest = () => {
  const { t } = useTranslation();
  const dataReportBug: InfoBlocks[] = [
    {
      title: t('Сообщить'),
      id: 'reportBugText',
      text: t('Если_вы_нашли_ошибку'),
    },
  ];
  const blockReportBug = dataReportBug.map((block, index) => (
    <InfoBlock
      key={index + 1}
      title={block.title}
      text={block.text}
      idForText={block.id}
    />
  ));

  const JSONText: JSONText[] = [
    { selector: '#reportBugText', json: t('Если_вы_нашли_ошибку') },
  ];

  useEffect(() => {
    convertJSONToText(JSONText);
  });

  return <section>{blockReportBug}</section>;
};

export default GeneralInfoTest;
