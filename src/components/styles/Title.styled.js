import styled  from 'styled-components';


const Title = styled.h1`
    font: var(--font-title4);
    color: ${({homepage}) => homepage ? "white" : "black"};
    padding: 0;
    margin: ${({homepage}) => homepage ? "0" : "20px 0"};

    @media screen and (min-width: 459.8px) {
        font: ${({homepage}) => homepage ? "var(--font-title2)" : "var(--font-title4)"};
`;

export {Title};