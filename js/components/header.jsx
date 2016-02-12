import React from 'react';
import TodoActions from '../actions/todoActions';

function Header({dispatch}) {
    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus onBlur={e => dispatch(TodoActions.add(e.target.value))}/>
        </header>
    );
}

Header.propTypes = {
	dispatch: React.PropTypes.func.isRequired
};

export default Header;
