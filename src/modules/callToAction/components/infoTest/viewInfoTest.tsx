import { useTranslation } from 'react-i18next';

import {
  StyledImg,
  StyledLi,
} from 'modules/callToAction/components/infoTest/infoTest.styled';
import clock from 'assets/images/modules/callToAction/clock.svg';
import barChart from 'assets/images/modules/callToAction/bar-chart.svg';
import helpCircle from 'assets/images/modules/callToAction/help-circle.svg';

type InfoTestBlock = {
  alt: string;
  text: string;
  srcIcon: string;
};

type ViewInfoTestProps = {
  isChooseProfession: boolean;
  quantityQuestions: number;
  quantityThemes: number;
};

export const ViewInfoTest = ({
  isChooseProfession,
  quantityQuestions,
  quantityThemes,
}: ViewInfoTestProps) => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.callToAction.components.infoTest',
  });

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

  return (
    <>
      {infoTestBlock.map((item, index) => {
        return (
          <StyledLi key={index + 1}>
            <StyledImg src={item.srcIcon} alt={item.alt} />
            <span style={{ color: 'var(--color-white)' }}>{item.text}</span>
          </StyledLi>
        );
      })}
    </>
  );
};
