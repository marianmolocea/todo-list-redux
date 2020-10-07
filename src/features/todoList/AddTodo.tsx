import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

const AddTodo = (): JSX.Element => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleChange = (e: {target: HTMLInputElement}) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(!text.trim()) return;

        dispatch(addTodo(text));
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={handleChange} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo;