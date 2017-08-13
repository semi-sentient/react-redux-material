import React from 'react';
import {
  Card,
  CardHeader,
  CardText
} from 'material-ui/Card';

/* istanbul ignore next */
const DevStack = () => (
    <Card>
        <CardHeader
            actAsExpander
            showExpandableButton
            title="Dev Stack"
            subtitle="Libraries used in this project for building UI components"
        />
        <CardText expandable>
            <ol>
                <li>
                    JavaScript
                    <ul>
                        <li>
                            <a href="https://facebook.github.io/react/" target="_blank">React</a>
                        </li>
                        <li>
                            <a href="https://github.com/reacttraining/react-router" target="_blank">React Router</a>{' '}
                            <em>(for handling UI routing in SPA)</em>
                        </li>
                        <li>
                            <a href="http://redux.js.org/" target="_blank">Redux</a>{' '}
                            <em>
                                (+middleware{' '}
                                <a href="https://github.com/reactjs/react-redux" target="_blank">react-redux</a>,{' '}
                                <a href="https://github.com/reactjs/react-router-redux" target="_blank">react-router-redux</a>,{' '}
                                <a href="https://github.com/gaearon/redux-thunk" target="_blank">redux-thunk</a>)
                            </em>
                        </li>
                        <li>
                            <a href="http://www.material-ui.com/#/" target="_blank">Material-UI</a>{' '}
                            <em>(UI component library)</em>
                        </li>
                        <li>
                          <a href="http://api.highcharts.com/highcharts" target="_blank">Highcharts</a>{' '}
                          <em>(via <a href="https://github.com/kirjs/react-highcharts" target="_blank">react-highcharts</a>)</em>
                        </li>
                        <li>
                          <a href="https://facebook.github.io/immutable-js/" target="_blank">Immutable</a>{' '}
                          <em>(implements persistent data structures)</em>
                        </li>
                        <li>
                            <a href="https://github.com/mzabriskie/axios" target="_blank">Axios</a>{' '}
                            <em>(Promise based HTTP client for the browser)</em>
                        </li>
                        <li>
                            <a href="https://momentjs.com/" target="_blank">Moment</a>{' '}
                            <em>(lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates)</em>
                        </li>
                    </ul>
                </li>

                <li>
                    Styling <em>(CSS, Color Palette, Typography)</em>

                    <ul>
                        <li>
                            <a href="https://necolas.github.io/normalize.css/" target="_blank">normalize.css</a>
                        </li>
                        <li>
                            <a href="http://sass-lang.com/guide" target="_blank">SASS</a> <em>(CSS preprocessor)</em>
                        </li>
                        <li>
                            Material Design
                            <ul>
                                <li>
                                    <a href="https://material.io/guidelines/style/color.html" target="_blank">Color Palette</a>
                                </li>
                                <li>
                                    <a href="https://material.io/guidelines/style/typography.html" target="_blank">Typography</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ol>
        </CardText>
    </Card>
);

export default DevStack;