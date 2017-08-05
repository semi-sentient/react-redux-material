import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import Message from 'app/components/message/Message';

const Welcome = () => (
  <div>
    <LinearProgress mode="indeterminate" />
    
    <div className="content" id="welcome">
      <main>
        <h3>Welcome</h3>

        <Message
          isControl
          type="warning"
        >
          <strong>Wait!</strong> You are about to do something you shouldn't...
        </Message>

        <Message
          isControl
          type="error"
        >
          <strong>Oops!</strong> Our software is broken because we didn't write good unit tests.
        </Message>

        <Message
          isControl
          title="Default"
        >
          This is the default; nothing to see here.
        </Message>

        <Message
          isControl
          type="success"
        >
          <strong>Success!</strong> Our software did what it was supposed to do.
        </Message>
      </main>

      <aside>
        aside
      </aside>
    </div>
  </div>
);

export default Welcome;
