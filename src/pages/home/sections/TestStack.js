import React from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';

/* istanbul ignore next */
const TestStack = () => (
    <Card>
        <CardHeader
            actAsExpander
            showExpandableButton
            title="Test Stack"
            subtitle="Libraries used for unit testing and code coverage reporting"
        />
        <CardText expandable>
            <ol>
                <li>
                    <a href="https://mochajs.org/" target="_blank">Mocha</a>{' '}
                    <em>(test runner)</em>
                </li>
                <li>
                    <a href="http://chaijs.com/" target="_blank">Chai</a> +{' '}
                    <a href="https://github.com/domenic/chai-as-promised" target="_blank">Chai As Promised</a>{' '}
                    <em>(assertion library)</em>
                </li>
                <li>
                    <a href="https://github.com/airbnb/enzyme" target="_blank">Enzyme</a>{' '}
                    <em>(wrapper for React testing utility)</em>
                </li>
                <li>
                    <a href="http://sinonjs.org/" target="_blank">Sinon</a>{' '}
                    <em>(mock/stub library)</em>
                </li>
                <li>
                    <a href="https://github.com/tmpvar/jsdom" target="_blank">JSDOM</a>{' '}
                    <em>(JS-based headless browser)</em>
                </li>
                <li>
                    <a href="https://github.com/arnaudbenard/redux-mock-store" target="_blank">Redux Mock Store</a>{' '}
                    <em>redux-mock-store, for testing redux async action creators and middleware</em>
                </li>
                <li>
                    <a href="https://github.com/gotwarlost/istanbul" target="_blank">Instanbul</a>{' '}
                    <em>(nicely formatted code coverage reports)</em>
                </li>
            </ol>
        </CardText>
    </Card>
);

export default TestStack;