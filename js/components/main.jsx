import React from 'react';

export default function Main() {
    // This section should be hidden by default and shown when there are todos
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {/* These are here just to show the structure of the list items */}
                {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
                <li className="completed">
                    <div className="view">
                        <input className="toggle" type="checkbox" checked/>
                        <label>Taste JavaScript</label>
                        <button className="destroy"/>
                    </div>
                    <input className="edit" value="Create a TodoMVC template"/>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox"/>
                        <label>Buy a unicorn</label>
                        <button className="destroy"/>
                    </div>
                    <input className="edit" value="Rule the web"/>
                </li>
            </ul>
        </section>
    );
}
