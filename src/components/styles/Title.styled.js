import styled  from 'styled-components';


const Title = styled.h1`
    font: var(--font-title4);
    color: ${({page}) => page === 'home' ? "white" : "black"};
    padding: 0;
    margin: ${({page}) => page === 'home' ? "0" : "20px 0"};

    @media screen and (min-width: 459.8px) {
        font: ${({page}) => (page === 'home' || page === 'reportBug') ? "var(--font-title2)" : "var(--font-title4)"};
`;

export {Title};