import React from 'react';

function TodoItem({item}) {
    // List items should get the class `editing` when editing and `completed` when marked as completed.
	const className = item.completed ? 'completed' : '';
    return (
        <li className={className}>
            <div className="view">
                <input className="toggle" type="checkbox" checked/>
                <label>{item.text}</label>
                <button className="destroy"/>
            </div>
            <input className="edit" value="Create a TodoMVC template"/>
        </li>
    );
}

TodoItem.propTypes = {
	item: React.PropTypes.shape({
		completed: React.PropTypes.bool.isRequired,
		text: React.PropTypes.string.isRequired
	}).isRequired
};

export default TodoItem;
