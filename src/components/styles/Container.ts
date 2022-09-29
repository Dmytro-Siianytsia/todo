import styled from "styled-components"

interface IContainer {
    bg?: string,
    minHeight?: string
}

export const Container = styled.div<IContainer>`
    width: 100%;
    max-width: 50em;
    margin: 0 auto;
    background-color: ${({bg}) => bg || '#fff'};
    min-height: ${({minHeight}) => minHeight || '100vh'};
`