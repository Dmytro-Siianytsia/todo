import { makeAutoObservable, configure } from "mobx";

configure({enforceActions: 'observed'})

export interface ITodo {
    id: number,
    text: string,
    isCompleted: boolean
}

export type filter = 'all' | 'completed' | 'active'

class Todos {
    todos: ITodo[] = [
        {id: 1, text: 'Create app', isCompleted: false},
        {id: 2, text: 'Drink coffee', isCompleted: false},
        {id: 3, text: 'Have a rest', isCompleted: false},
    ]
    filterTodos: filter = 'all'
    searchString: string = ''
    
    constructor() {
        makeAutoObservable(this)
    }

    get filteredTodos() {
        if (this.filterTodos === 'active') {
            return this.todos.filter(todo => !todo.isCompleted)
        } else if (this.filterTodos === 'completed') {
            return this.todos.filter(todo => todo.isCompleted)
        } else {
            return this.todos
        }
    }

    get searchedAndFilteredTodos() {
        return this.filteredTodos.filter(todo => {
            return todo.text.toLowerCase().includes(this.searchString.toLowerCase())
        })
    }

    addTodo(todo: ITodo) {
        this.todos.push(todo)
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    toggleTodo(id: number) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
    }

    editTodo(id: number, text: string) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, text} : todo)
    }

    setFilterTodos(filter: filter) {
        this.filterTodos = filter
    }

    inputSearchHandler(str: string) {
        this.searchString = str
    }
}

export default new Todos()
