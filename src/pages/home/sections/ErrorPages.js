import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';

/* istanbul ignore next */
const ErrorPages = () => (
    <Card>
        <CardHeader
            actAsExpander
            showExpandableButton
            title="Error Pages"
            subtitle="Page components for common errors such as 401, 404, and unsupported browsers"
        />
        <CardText expandable>
            <p>
                Default error pages have been provided as a way to inform the user when something goes wrong. Click on each{' '}
                link below to view the error page, noting that you can come back by click on the "Back" button in your browser.
            </p>

            <ul>
                <li>
                    <Link to="/access-denied">401 - Access Denied</Link> <em>(src/app/pages/errors/AccessDenied.js)</em>
                </li>
                <li>
                    <Link to="/not-found">404 - Page Not Found</Link> <em>(src/app/pages/errors/PageNotFound.js)</em>
                </li>
                <li>
                    <Link to="/browser-upgrade">Unsupported Browser</Link> <em>(src/app/pages/errors/BrowserUpgrade.js)</em>
                </li>
            </ul>
        </CardText>
    </Card>
);

export default ErrorPages;