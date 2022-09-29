import React from 'react';
import FilterTodos from './components/FilterTodos';
import Header from './components/Header';
import ListTodos from './components/ListTodos';
import NewTodo from './components/NewTodo';
import SearchTodo from './components/SearchTodo';
import { Container } from './components/styles/Container';
import { Flex } from './components/styles/Flex';
import Global from './components/styles/Global';
import { ThemeProvider } from 'styled-components'
import { theme } from './components/styles/theme'
import { Wrapper } from './components/styles/Wrapper';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Flex direction='column' content='center'>
                    <Global />
                    <Header />
                    <Wrapper mt='1em' mb='1em'>
                        <Flex alignItems='center'>
                            <SearchTodo />
                            <FilterTodos />
                        </Flex>
                    </Wrapper>
                    <ListTodos />
                    <NewTodo />
                </Flex>
            </Container>
        </ThemeProvider>
    );
}

export default App;
