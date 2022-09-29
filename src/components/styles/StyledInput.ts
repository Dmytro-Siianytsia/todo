import styled from "styled-components";

interface IStyledInput {
    borderWidth?: string
}

export const StyledInput = styled.input<IStyledInput>`
    padding: .25em;
    margin-right: 1.5em;
    border-color: ${({theme}) => theme.borderColor};
    border-style: solid;
    flex-grow: 1;
    border-width: ${props => props.borderWidth || '1px'}
`