import storeTodos from '../stores/Todos'
import { StyledInput } from './styles/StyledInput'

const SearchTodo: React.FC = () => {
    return(        
        <StyledInput
            type="text" 
            onChange={(e) => storeTodos.inputSearchHandler(e.target.value)}
            placeholder="Type to search"
        />       
    )
}

export default SearchTodo
