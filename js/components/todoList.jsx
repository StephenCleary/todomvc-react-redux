import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem';

function TodoList({todos}) {
    return (
        <ul className="todo-list">
			{todos.map((item, index) => <TodoItem key={index} item={item}/>)}
        </ul>
    );
}

TodoList.propTypes = {
	todos: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			completed: React.PropTypes.bool.isRequired,
			text: React.PropTypes.string.isRequired
		})
	).isRequired
};

export default connect(x => ({ todos: x }))(TodoList);
