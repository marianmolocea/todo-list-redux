import React from 'react';
import TodoListItem from './TodoListItem';
import { RootState } from '../../redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from './todoSlice';
import { VisibilityFilter } from '../visibilityFilter/visibilityFilterSlice';
import { Todo } from './types';

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
    switch (filter) {
        case VisibilityFilter.ShowAll:
            return todos
        case VisibilityFilter.ShowCompleted:
            return todos.filter(t => t.completed)
        case VisibilityFilter.ShowActive:
            return todos.filter(t => !t.completed)
        default: throw new Error('Unknown filter: ' + filter)
    }
}

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(
        (state: RootState) => getVisibleTodos(state.todos, state.visibilityFilter)
    );
    return (
        <ul>
            {todos.map(todo => (
            <TodoListItem key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo))}/>
            ))}
        </ul>
    )
}

export default TodoList
