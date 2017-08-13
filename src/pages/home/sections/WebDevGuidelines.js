import React from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';

/* istanbul ignore next */
const WebDevGuidelines = () => (
    <Card>
        <CardHeader
            actAsExpander
            showExpandableButton
            title="Web Development Guidelines"
            subtitle="General best practices and guidelines for web development"
        />
        <CardText expandable>
            <p>
                If you would like an exhaustive list of guidelines, then I highly recommend familiarizing yourself with the{' '}
                <a href="https://github.com/airbnb/javascript" target="_blank">Airbnb JavaScript Style Guide</a>{' '}
                which includes some recommendations that are React specific.
            </p>

            <p>
                If you are going to be building complex forms then I'd encourage you to read{' '}
                <a href="https://www.smashingmagazine.com/2017/06/designing-efficient-web-forms" target="_blank">Designing Efficient Web Forms</a>{' '}
                as it provides some very useful tips that will help you build a more intuitive UI.
            </p>

            <p>
                Here are a few additional guidelines that are good to follow:
            </p>

            <ul>
                <li>
                    Components that are meant to be shared across the application should reside in src/app/components.
                </li>
                <li>
                    React components should always be PascalCase <em>(i.e. UpperCamelCase)</em>, as should the file name that they are defined in.
                    For example, the <strong>HelloWorld</strong> component should be defined in a file named <strong>HelloWorld.js</strong>.
                </li>
                <li>
                    SASS files or other non-React component files should be camelCase, e.g. <strong>helloWorld.less</strong>, <strong>helloWorldHelpers.js</strong>, etc.
                </li>
            </ul>
        </CardText>
    </Card>
);

export default WebDevGuidelines;