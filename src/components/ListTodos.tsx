import { ITodo } from '../stores/Todos'
import Todo from './Todo'
import storeTodos from '../stores/Todos'
import { observer } from 'mobx-react-lite'
import { List } from './styles/List';
import { Text } from './styles/Text';
import { Wrapper } from './styles/Wrapper';

const ListTodos: React.FC = observer(() => {
    const isTaskExist = storeTodos.searchedAndFilteredTodos.length > 0
    return(
        <>
        {isTaskExist
            ?
            <List>
                {storeTodos.searchedAndFilteredTodos.map((todo: ITodo) => <Todo {...todo} key={todo.id}/>)}
            </List>
            :
            <Wrapper mb='1em'>
                <Text>There are no tasks.</Text>
            </Wrapper>
        }
        </>
    )
});

export default ListTodos
