import { observer } from "mobx-react-lite"
import storeTodos from '../stores/Todos'
import { Flex } from "./styles/Flex"
import { HeaderStyled } from "./styles/HeaderStyled"
import { Text } from "./styles/Text"


const Header: React.FC = observer(() => {
    const countTodos = storeTodos.searchedAndFilteredTodos.length
    return(
        <HeaderStyled>
            <Flex alignItems="center">
                <h1>My Todo List</h1>
                <Text>
                    {storeTodos.filterTodos} {countTodos > 1 ? 'todos' : 'todo'} {countTodos}
                </Text>
            </Flex>
        </HeaderStyled>
    )
})

export default Header
