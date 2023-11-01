import {
  StyledH2,
  StyledArticleQuestion,
  StyledPicture,
  StyledImg,
} from './testTask.Styled';

type ViewTestTaskProps = {
  srcImg?: string;
  questionName: string;
};

export const ViewTestTask = ({ questionName, srcImg }: ViewTestTaskProps) => {
  if (!srcImg) {
    return (
      <StyledArticleQuestion>
        <StyledH2 id='questionTitle' tabIndex={0}>
          {questionName}
        </StyledH2>
      </StyledArticleQuestion>
    );
  }
  return (
    <StyledArticleQuestion>
      <StyledH2 id='questionTitle' tabIndex={0}>
        {questionName}
      </StyledH2>
      <StyledPicture>
        <source
          type='image/png'
          media='(min-width: 320px)'
          srcSet={srcImg}
          width='120'
          height='auto'
        ></source>
        <source
          type='image/png'
          media='(min-width: 487px)'
          srcSet={srcImg}
          width='768'
          height='auto'
        ></source>
        <source
          type='image/png'
          media='(min-width: 769px)'
          srcSet={srcImg}
          width='1024'
          height='auto'
        ></source>
        <StyledImg src={srcImg} width='1024' height='auto' alt='Код на JS' />
      </StyledPicture>
    </StyledArticleQuestion>
  );
};
