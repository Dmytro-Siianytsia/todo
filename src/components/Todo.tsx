import React, { useState, useRef, useEffect } from "react"
import { ITodo } from "../stores/Todos"
import Todos from "../stores/Todos"
import { StyledTodo } from "./styles/StyledTodo"
import { StyledButton } from "./styles/StyledButton"
import { Wrapper } from "./styles/Wrapper"
import { StyledInput } from "./styles/StyledInput"
import { Flex } from "./styles/Flex"

const Todo: React.FC<ITodo> = ({text, isCompleted, id}) => {
    const [isEditTodo, setIsEditTodo] = useState(false)
    const inputEdit = useRef<HTMLInputElement>(null)

    const inputEditOnBlurHandler = () => {
        setIsEditTodo(false)
    }

    const keyPressHandler = (key: string) => {
        if (key === 'Enter') {
            setIsEditTodo(false)
        }
    }

    const editButtonHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsEditTodo(true)        
    }

    useEffect(() => {
        if ( inputEdit.current) {
            inputEdit.current.focus()
        }
    }, [isEditTodo])

    return(
        <StyledTodo>          
            <Wrapper mr="0.8em">
                <input id={String(id)} type="checkbox" checked={isCompleted} onChange={() => Todos.toggleTodo(id)}/>
            </Wrapper>
            { isEditTodo 
                ? 
                <StyledInput 
                    ref={inputEdit}
                    type='text' 
                    value={text} 
                    onChange={(e) => Todos.editTodo(id, e.target.value)} 
                    onBlur={inputEditOnBlurHandler}
                    onKeyDown={(e) => keyPressHandler(e.code)}                    
                />                
                : 
                <label htmlFor={String(id)}>
                    {text}
                </label>
            }            
            <div>                
                <StyledButton padding="0.2em 0.5em" onClick={(e) => editButtonHandler(e)}>Edit</StyledButton>                
                <StyledButton padding="0.2em 0.5em" onClick={() => Todos.removeTodo(id)}>X</StyledButton>
            </div>
        </StyledTodo>
    )
}

export default Todo
