import styled from "styled-components";

export const List = styled.ul`
    padding: 1.5em;
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: .2em;
    max-width: 40em;
    width: 100%;
    max-height: 64vh;
    overflow-y: auto;
    margin: 1em auto;
`