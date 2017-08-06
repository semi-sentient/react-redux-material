# React, Redux, Material-UI Boilerplate Project

## Dev Stack

1. JavaScript
    * [React](https://facebook.github.io/react/)
    * [React Router](https://github.com/reacttraining/react-router) *(for handling UI routing in SPA)*
    * [Redux](http://redux.js.org/) *(+middleware [react-redux](https://github.com/reactjs/react-redux), [react-router-redux](https://github.com/reactjs/react-router-redux), [redux-thunk](https://github.com/gaearon/redux-thunk))*
    * [Material-UI](http://www.material-ui.com/#/)
    * [Highcharts](http://api.highcharts.com/highcharts) *(via [react-highcharts](https://github.com/kirjs/react-highcharts))*
    * [Immutable](https://facebook.github.io/immutable-js/) *(implements persistent data structures)*
    * [Axios](https://github.com/mzabriskie/axios) *(Promise based HTTP client for the browser)*
    * [Moment](https://momentjs.com/) *(lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates)*
2. Styling (CSS, Color Palette, Typography)
    * [normalize.css](https://necolas.github.io/normalize.css/)
    * [SASS](http://sass-lang.com/guide) *(CSS preprocessor)*
    * Material Design
        * [Color Palette](https://material.io/guidelines/style/color.html)
        * [Typography](https://material.io/guidelines/style/typography.html)

## Test Stack

1. [Mocha](https://mochajs.org/) *(test runner)*
2. [Chai](http://chaijs.com/) + [Chai As Promised](https://github.com/domenic/chai-as-promised) *(assertion library)*
3. [Sinon](http://sinonjs.org/) *(mock/stub library)*
4. [JSDOM](https://github.com/tmpvar/jsdom) *(JS-based headless browser)*
5. [Enzyme](https://github.com/airbnb/enzyme) *(wrapper for React testing utility)*
6. [Redux Mock Store](https://github.com/arnaudbenard/redux-mock-store) *(redux-mock-store, for testing redux async action creators and middleware)*
7. [Instanbul](https://github.com/gotwarlost/istanbul) *(nicely formatted code coverage reports)*

> **NOTE** that the **test.config.js** file contains the initialization of the headless browser (JSDOM). Additionally, there is no need to import anything into specs except for the component being tested as **test.config.js** imports all necessary dependencies *(i.e. React, chai, etc)*.

## Prerequisites

Node is required to build the project, run unit tests, etc., so ensure that you have the latest installed. This project was built with Node **v6.9.5** on Mac and tested successfully with **v4.5.0** on Windows. I make no guarantees about other environments, so shoot for having Node **4.5.0** at a minimum.

## Getting Started

> **NOTE** Visual Studio will typically restore missing npm modules automatically, so you may not need to execute the `npm install --production=false` command if this project resides in a Visual Studio project.

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
        - components/ ... (layout, header, footer, etc)
        - utilities/ ...
        - images/ ...
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
          - components/ ... (child components, presentational)
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

## TODO

1. Increase code coverage (LocalStorage, etc)
2. Build form demo + filtered table