import styled  from 'styled-components';

const CallToActionStyled = styled.section`
    max-width: 100%;
    background-color: var(--color-call-action);
    padding: 16px;
    margin: 0 0 13px 0;


    @media screen and (min-width: 459.8px) {
        margin: 0 0 32px 0;
    }
    
    @media screen and (min-width: 767.8px) {
        padding: 16px 16px 16px 40px;
    }`;

export {CallToActionStyled};