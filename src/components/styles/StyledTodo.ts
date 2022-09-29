import styled from "styled-components"

export const StyledTodo = styled.li`
    width: 100%;
    padding: 0.5em 1em;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 40em;
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: .4rem;

    &:last-child {
        margin-bottom: 0;
    }

    label {
        padding: .25em;
        margin-right: auto;
        border: 1px solid transparent;
    }
`