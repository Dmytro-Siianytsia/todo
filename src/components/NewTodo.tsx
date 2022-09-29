import { useState } from 'react'
import storeTodos, { ITodo } from '../stores/Todos'
import { Flex } from './styles/Flex'
import { StyledButton } from './styles/StyledButton'
import { StyledInput } from './styles/StyledInput'

const NewTodo: React.FC = () => {
    const [newTodoText, setNewTodoText] = useState('')

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (!newTodoText) {
            return
        }

        const todo: ITodo = {
            id: +new Date(),
            text: newTodoText,
            isCompleted: false
        }

        storeTodos.addTodo(todo)
        setNewTodoText('')
    }

    return(
        <form onSubmit={submitHandler}>
            <Flex>
                <StyledInput 
                    type="text" 
                    onChange={e => setNewTodoText(e.target.value)} 
                    value={newTodoText}
                    placeholder="Create new todo"
                />
                <StyledButton type='submit'>Add Todo</StyledButton>
            </Flex>
        </form>
    )
}

export default NewTodo
