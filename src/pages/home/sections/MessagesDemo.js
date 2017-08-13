import React from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';

import Message from 'app/components/message/Message';

/* istanbul ignore next */
const MessagesDemo = () => (
    <Card>
        <CardHeader
            actAsExpander
            showExpandableButton
            title="Messages"
            subtitle="Demonstration of a homegrown Message component"
        />
        <CardText expandable>
            <p>
                A message component is provided to give the user feedback when certain actions occur, or if you just want to{' '}
                provide some guidance. In the examples below, the first two messages (warning and error) are closable, whereas{' '}
                the last two (info and success) are not. Refer to <strong>src/app/components/message/Message.js</strong> for usage.
            </p>

            <Message type="warning" isControl>
                <strong>Warning!</strong> You are about to do something you shouldn't...
            </Message>

            <Message type="error" isControl>
                <strong>Error!</strong> Our software is broken because we didn't write good unit tests.
            </Message>

            <Message>
                <strong>Info!</strong> This is the default "info" message; nothing to see here.
            </Message>

            <Message type="success">
                <strong>Success!</strong> Our software did what it was supposed to do.
            </Message>
        </CardText>
    </Card>
);

export default MessagesDemo;