import styled from "styled-components";

export const HeaderStyled = styled.header`
    padding: 0.7em 2em;
    background: ${props => props.theme.headerBg};

    h1 {
        font-size: 2.3em;
        color: ${props => props.theme.mainTextColor};
    }
`
