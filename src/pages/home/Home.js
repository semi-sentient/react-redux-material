import React from 'react';
import Paper from 'material-ui/Paper';

import GettingStarted from './sections/GettingStarted';
import WebDevGuidelines from './sections/WebDevGuidelines';
import DevStack from './sections/DevStack';
import TestStack from './sections/TestStack';
import ErrorPages from './sections/ErrorPages';
import MessagesDemo from './sections/MessagesDemo';
import FormDemo from './sections/FormDemo';

import './home.scss';

const Home = () => (
    <div id="home">
        <main>
            <h2>Welcome!</h2>

            <p>
                This project is based on the <strong>react-redux-material</strong> boilerplate project hosted on{' '}
                <a href="https://github.com/semi-sentient/react-redux-material" target="_blank">GitHub</a>.{' '}
                A few changes were made to support our typical NodeJS environment here at Amazon.{' '}
                <strong>Material-UI</strong> is the main UI component library used in this project. Refer to the{' '}
                <a href="http://www.material-ui.com/#/get-started/required-knowledge" target="_blank">Get Started</a>{' '}
                guide for an overview. A full list of components can be found <a href="http://www.material-ui.com/#/components/app-bar" target="_blank">HERE</a>.
            </p>

            <p>
                Expand the cards below to get started and learn more about what's included in this project.
            </p>

            <GettingStarted />
            <WebDevGuidelines />
            <DevStack />
            <TestStack />
            <ErrorPages />
            <FormDemo />
            <MessagesDemo />
        </main>

        <aside>
            <Paper className="paper">
                <h3 className="no-margin-top">Aside Example</h3>

                <p>
                    Spicy jalapeno bacon ipsum dolor amet pig meatball meatloaf shankle, ground round venison sausage 
                    tri-tip shank short ribs jowl flank andouille tongue. Frankfurter kielbasa shankle, venison shoulder 
                    pig jowl pork chop. Bresaola brisket cupim chicken shankle meatloaf cow sausage porchetta. Spare ribs 
                    pancetta tenderloin, ribeye pork loin jerky landjaeger andouille pork chop.
                </p>

                <p className="no-margin-bottom">
                    Strip steak pancetta flank tail boudin sausage ham hock andouille. Chuck corned beef fatback ham hock meatball. 
                    Hamburger boudin fatback ham. Drumstick tail strip steak, doner venison shoulder fatback tongue short loin pig. 
                    Hamburger short ribs sirloin, cupim meatball kielbasa ground round bacon fatback.
                </p>
            </Paper>
        </aside>
    </div>
);

export default Home;
