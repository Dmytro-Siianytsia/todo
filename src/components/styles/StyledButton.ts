import styled from "styled-components";

interface IStyledButton {
    padding?: string
}

export const StyledButton = styled.button<IStyledButton>`
    margin-left: .25em;
    padding: ${({padding}) => padding || '.5em 1.5em'};
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: .3em;
    color: ${({color}) => color || 'inheritance'};
    cursor: pointer;
`