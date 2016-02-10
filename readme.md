# React/Redux • [TodoMVC](http://todomvc.com)

> React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.

> Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

## Resources

- [React Website](https://facebook.github.io/react/index.html)
- [Redux Website](http://redux.js.org/)
- [React Documentation](https://facebook.github.io/react/docs/getting-started.html)
- [React Blog](https://facebook.github.io/react/blog/)

### Support

- [StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
- [Forum](https://discuss.reactjs.org/)
- [Twitter](https://twitter.com/reactjs)

*Let us [know](https://github.com/StephenCleary/todomvc-react-redux/issues) if you discover anything worth sharing.*


## Implementation

This app is built using the set of React best practices that I have found most useful. In particular:
- Modern JavaScript (ES6, plus [object rest/spread properties](https://github.com/sebmarkbage/ecmascript-rest-spread)). I use Babel as a transpiler.
- [Flux standard actions](https://github.com/acdlite/flux-standard-action), utilizing the [redux actions library](https://github.com/acdlite/redux-actions).
- Strict adherence to immutability. I do not use an immutability library to enforce this, but I do use [a library that detects changes](https://github.com/leoasis/redux-immutable-state-invariant). Note that in a real-world app, this library would only be used during development and not in production.

## Credit

Created by [Stephen Cleary](http://stephencleary.com)
