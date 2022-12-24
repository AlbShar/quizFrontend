import styled  from 'styled-components';

const Title = styled.h1`
    font: var(--font-title4);
    color: ${props => props.homepage ? "white" : "black"};
    padding: 0;
    margin: ${props => props.homepage ? "0" : "20px 0"};

    @media screen and (min-width: 459.8px) {
        font: ${props => props.homepage ? "var(--font-title2)" : "var(--font-title4)"};
`;

export {Title};