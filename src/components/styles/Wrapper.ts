import styled from "styled-components";

interface IWrapper {
    mt?: string,
    mb?: string,
    ml?: string,
    mr?: string,
}

export const Wrapper = styled.div<IWrapper>`
    margin-top: ${({mt}) => mt || 0};
    margin-bottom: ${({mb}) => mb || 0};
    margin-left: ${({ml}) => ml || 0};
    margin-right: ${({mr}) => mr || 0};
`