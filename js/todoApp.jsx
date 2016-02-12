import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './devTools';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function TodoApp() {
    return (
        <section className="todoapp">
            <Header/>
            <Main/>
            <Footer/>
        </section>
    );
}

// Once the DOM has loaded, render our app.
// NOTE FOR PRODUCTION: DevTools should not be used in production apps!
window.onload = () => {
    const root = (
        <Provider store={store}>
            <div>
                <TodoApp/>
                <DevTools/>
            </div>
        </Provider>
    );
    render(root, document.getElementById('app'));
}
