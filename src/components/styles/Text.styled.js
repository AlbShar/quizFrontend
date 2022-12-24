import styled  from 'styled-components';

const Text = styled.p`
    font: var(--font-little-text-regular);
    color: white;

    @media screen and (min-width: 459.8px) {
        font: var(--font-text-regular);
}`;

export {Text};