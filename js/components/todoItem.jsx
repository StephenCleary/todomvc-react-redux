import React from 'react';

export default function TodoItem() {
    // List items should get the class `editing` when editing and `completed` when marked as completed.
    return (
        <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox" checked/>
                <label>Taste JavaScript</label>
                <button className="destroy"/>
            </div>
            <input className="edit" value="Create a TodoMVC template"/>
        </li>
    );
}
