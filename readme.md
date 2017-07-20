# React/Redux/Material-UI Boilerplate Project

## Dev Stack

1. JavaScript
    * React *(react, react-router)*
        * https://facebook.github.io/react/
        * https://github.com/reacttraining/react-router
    * Redux *(redux, react-redux, react-router-redux, redux-thunk)*
        * http://redux.js.org/
        * https://github.com/reactjs/react-redux
        * https://github.com/reactjs/react-router-redux
        * https://github.com/gaearon/redux-thunk
    * Immutable *(implements persistent data structures)*
        * https://facebook.github.io/immutable-js/
    * Material-UI *(UI component framework for React)*
        * http://www.material-ui.com/#/
    * Axios *(Promise based HTTP client for the browser)*
        * https://github.com/mzabriskie/axios
    * Moment *(lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates)*
        * https://momentjs.com/
2. CSS
    * SASS *(CSS preprocessor)*
        * http://sass-lang.com/guide

## Test Stack

1. Mocha *(test runner)*
    * https://mochajs.org/
2. Chai + Chai As Promised *(assertion library)*
    * http://chaijs.com/
    * https://github.com/domenic/chai-as-promised
3. Sinon *(mock/stub library)*
    * http://sinonjs.org/
4. JSDOM *(JS-based headless browser)*
    * https://github.com/tmpvar/jsdom
5. Enzyme *(wrapper for React testing utility)*
    * https://github.com/airbnb/enzyme
6. Redux Mock Store *(redux-mock-store, for testing redux async action creators and middleware)*
    * https://github.com/arnaudbenard/redux-mock-store
7. Instanbul *(nicely formatted code coverage reports)*
    * https://github.com/gotwarlost/istanbul

> **NOTE** that the root directory contains a file named test.config.js that sets up the headless browser (JSDOM) and some globals so that there is no need to import anything into specs except for the component being tested.

## Prerequisites

Node is required to build the project, run unit tests, etc., so ensure that you have the latest installed. This project was built with Node **v6.9.5** on Mac and tested successfully with **v4.5.0** on Windows. I make no guarantees about other environments, so shoot for having Node **4.5.0** at a minimum.

## Getting Started

> **NOTE** All commands below should be executed from the root of project directory *(where package.json resides)*.

1. To install the required dependencies:
    * `npm install --production=false`
2. To start the dev server with hot reloading: `npm start`
3. Launch your favorite web browser and navigate to http://localhost:8080
4. To run unit tests, open a new command prompt and execute either of the following (depending on your environment, i.e. Windows vs Linux):
    * Run tests once: `npm run test:windows` or `npm run test:linux`
    * Run tests with code coverage reports: `npm run test:windows-coverage` or `npm run test:linux-coverage`
        * After running tests with coverage you will notice a new top-level directory named **coverage** has been created. These are fancy pants code coverage reports. To view the reports, open the following file: **coverage/lcov-report/index.html**
5. While the development server is highly useful as you're doing development, you might want to quickly test how things work in a "real" environment.
    * For Windows users:
        1. Execute the following command: `npm run build`
        2. Point IIS to the **dist** directory.
        3. Open your favorite web browser and navigate to whatever virtual app you created in IIS.
    * For Mac users:
        1. Execute the following command: `npm run build`
        2. Open a command prompt and navigate to the **dist** directory. From that directory execute the following command: `python -m SimpleHTTPServer 8888`
        3. Open a web browser and navigate to http://localhost:8888
6. To persist state through localStorage, open up **src/app/Store.js** and call saveState() when subscribing to the store. There is a comment block within **src/app/Store.js** that has a couple of examples. Note that **src/app/LocalStorage.js** can be configured to name the item where state is persisted.

## Best Practices

1. Use the latest version of ECMAScript (ES). Since this project uses the **latest** preset, that means you can make use of all version <= ES2017.
2. Avoid control structures and overly indented code where possible as this introduces complexity. Instead opt for built-in Array *(forEach, map, filter, reduce, etc)* and Object *(for..in, assign, entries, keys, etc)* methods.
3. Write pure functions unless there is a specific reason not to. As a quick refresher, pure functions do not produce side effects *(manipulate parent scope or arguments passed in, async calls)* and are much easier to test in general as they are predictable. Pure functions should always return a value and never mutate the data passed in.
4. Unit tests should follow "AAA" pattern when possible. This means that setup (props, context, refs, etc.) should be set up at the top of the describe() block so that the it() blocks are kept as lightweight as possible so that they focus on assertions. More on that here: http://www.agile-code.com/blog/the-anatomy-of-a-unit-test/
    * (A)rrange all necessary preconditions and inputs.
    * (A)ct on the object or method under test.
    * (A)ssert that the expected results have occurred.
5. The feature (or Pods) pattern is used for organizing assets. Each high level feature should adhere to this directory structure, while shared components should be organized similarly under the "app" directory. Below is an example of how shared app components and a "feature" can be organized. You can read more about this strategy here: https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1#.8c9nn6b8h
    ~~~
    + src/
      - app/
        - api/ ...
        - components/ ...
        - images/ ...
        - App.js (app layout)
        - Layout.js (layout wrapper)
        - Root.js (routing, provider config)
        - Store.js (store config)
      - pages/
        - home/
          - store/
            - actions.js
            - actions.spec.js
            - reducers.js
            - reducers.spec.js
            - types.js
          - components/ ... (child components, preferably dumb)
          - home.scss
          - Home.js
          - Home.spec.js
          - HomeContainer.js (Redux connected component)
    ~~~
6. Separate components by concern (Presentational vs Container components). More on that here:
    * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.orirq2aqe
    * https://gist.github.com/chantastic/fc9e3853464dffdb1e3c
7. Ensure these rules apply to all stateful components:
    * If you don't use it in render() it shouldn't be in the state (this.state).
    * Never modify state directly (e.g. this.state.name = 'Markus'). Always use this.setState() as this will re-render the component properly.
    * Never rely on this.props or this.state properties when computing another state.
    ~~~ javascript
    // WRONG
    this.setState({
      counter: this.state.counter + this.props.increment
    });

    // CORRECT
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment
    }));
    ~~~

## Learn

Given that this project provides a full FE stack to build a large scale application, it's important that you understand each dependency. The following links should be read in order (assuming no prior experience with each technology):

1. ECMAScript 2015 (aka ES6), Webpack, Babel
    * http://ccoenraets.github.io/es6-tutorial/
    * https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/
2. React / React Router
    * https://camjackson.net/post/9-things-every-reactjs-beginner-should-know
    * https://github.com/reactjs/react-router-tutorial/tree/master/lessons
    * https://online.reacttraining.com/
    * http://blog.ricardofilipe.com/post/react-enzyme-tdd-tutorial
3. Redux
    * https://gist.github.com/MarcoWorms/30758235f05faec844b8c06ce2e5bac9
    * https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.dwj9rdxhf
    * https://www.smashingmagazine.com/2016/06/an-introduction-to-redux/
    * https://egghead.io/courses/getting-started-with-redux
    * https://egghead.io/courses/building-react-applications-with-idiomatic-redux
    * https://learnredux.com/
    * https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md