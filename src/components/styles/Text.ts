import styled from "styled-components";

interface IText {
    fontSize?: string,
    color?: string
}

export const Text = styled.p<IText>`
    font-size: ${({fontSize}) => fontSize || '18px'};
    color: ${({color, theme}) => color || theme.mainTextColor};
`