import styled from "styled-components";

interface IFlex {
    direction?: string,
    content?: string,
    alignItems?: string
}

export const Flex = styled.div<IFlex>`
    display: flex;
    flex-direction: ${({direction}) => direction || 'row'};
    justify-content: ${({content}) => content || 'space-between'};
    align-items: ${({alignItems}) => alignItems || 'inherit'};
`