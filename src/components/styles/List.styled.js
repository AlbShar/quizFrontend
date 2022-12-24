import styled  from 'styled-components';


const List = styled.ul`
    box-sizing: border-box;
    list-style-type: none;
    margin: 26px 0 0 0;
    padding: 8px 12px;
    background-color: var(--color-call-action-info);

    @media screen and (min-width: 459.8px) {
        display: flex;
        align-items: center;
        max-width: 685px;
        padding: 24px;
}`;

export {List};