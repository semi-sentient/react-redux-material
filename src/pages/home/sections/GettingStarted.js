import React from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';

/* istanbul ignore next */
const GettingStarted = () => (
    <Card>
        <CardHeader
            actAsExpander
            showExpandableButton
            title="Getting Started"
            subtitle="Create a new page with this quick start guide..."
        />
        <CardText expandable>
            <p>
                To create a new page, you will need to add a new page component and define routes. This example will create a new "dashboard" component,{' '}
                but feel free to name yours whatever you want.
            </p>

            <ol>
                <li>
                    Create a new directory for your component to live, e.g. <strong>src/pages/dashboard</strong>.
                </li>
                <li>
                    Add a new JSX component which will render your page contents <em>(e.g. src/pages/dashboard/Dashboard.js)</em>. For example:
                    <pre>{`import React from 'react';

const Dashboard = () => (
    <div id="dashboard">
        <main>
            <h1>Dashboard</h1>
        </main>
    </div>
);

export default Dashboard;`}</pre>
                    <strong>IMPORTANT</strong> - This project uses the "Holy Grail" Flexbox layout so how you structure your page markup is important.{' '}
                    Top-level components should always be structured as follows:
                    <pre>{`<div id="my-page">
    <aside>
        optional - left aside
    </aside>

    <main>
        main content - center
    </main>

    <aside>
        optional - right side
    </aside>
</div>`}</pre>
                </li>
                <li>
                    <strong>OPTIONAL</strong> - Add a new SASS file so that you can add page specific style rules <em>(e.g. src/pages/dashboard/dashboard.scss)</em>. For example:
                    <pre>{`#dashboard {
    h1 {
        color: pink;
    }
}`}</pre>
                    Now you will want to import this SASS file into your component so that webpack will know to include it in your final bundle,{' '}
                    so open up Dashboard.js (or whatever you named it) and add the following import statement to the top of the file:
                    <pre>{`import './dashboard.scss';`}</pre>
                </li>
                <li>
                    Finally, we'll want to enable this route so that users can navigate to it.{' '}
                    Routing has been centralized for reuse, so open up src/app/config/routes.js and add the following:
                    <pre>{`import Dashboard from 'pages/dashboard/Dashboard';

dashboard: {
    component: Dashboard,
    exact: true,
    isNavItem: true,
    path: '/dashboard',
    title: 'Dashboard'
}`}</pre>
                    This will automatically create a new Route component and add it to the Header component so that it's available in the main nav.{' '}
                    You can also reference this (via import) from other pages instead of hardcoding the path.
                </li>
                <li>
                    That's it! If you are running your webpack-dev-server, which you probably are since you are reading this,{' '}
                    then you should see a new "Dashboard" link in your main navbar. Navigate there to test out your new page.<br /><br />
                    <strong>One final note:</strong> Do remember to remove the "Welcome" page and any related routes before{' '}
                    committing any changes back to your repository.
                </li>
            </ol>
        </CardText>
    </Card>
);

export default GettingStarted;