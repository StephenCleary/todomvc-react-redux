import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';
import DevTools from './devTools';
import Header from './components/header';
import Todos from './components/todos';
import Footer from './components/footer';

function MainImpl({dispatch}) {
    return (
        <section className="todoapp">
			<Header dispatch={dispatch}/>
			<Todos/>
			<Footer/>
        </section>
    );
}
const Main = connect()(MainImpl);

// Once the DOM has loaded, render our app.
// NOTE FOR PRODUCTION: DevTools should not be used in production apps!
window.onload = () => {
    const root = (
        <Provider store={store}>
            <div>
                <Main/>
                <DevTools/>
            </div>
        </Provider>
    );
    render(root, document.getElementById('app'));
}
