import styled from "styled-components";

interface IFilterButton {
    active: boolean
}

export const FilterButton = styled.button<IFilterButton>`
    background: ${({active, theme}) => active ? theme.button.active : 'transparent'};
    padding: .3em;
    border: 1px solid ${({theme}) => theme.borderColor};
    cursor: pointer;
`