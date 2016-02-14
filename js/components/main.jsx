import React from 'react';
import TodoList from './todoList';

export default function Main() {
    // This section should be hidden by default and shown when there are todos
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <TodoList/>
        </section>
    );
}
