import styled  from 'styled-components';

const TitleFeature = styled.h2`
    box-sizing: border-box;
    width: 100%;
    background-color: var(--color-title-background);
    font: var(--font-little-text-regular);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin: 0;

    @media screen and (min-width: 459.8px) {
        font: var(--font-title4);
        justify-content: flex-start;
        padding: 10px 0 10px 40px;
`;

export {TitleFeature};