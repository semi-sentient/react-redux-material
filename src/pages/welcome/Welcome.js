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
          title="Oops"
          type="warning"
        />

        <Message
          isControl
          title="Oops"
          type="error"
        />

        <Message
          isControl
          title="Default"
        />

        <Message
          isControl
          title="Success!"
          type="success"
        />
      </main>

      <aside>
        aside
      </aside>
    </div>
  </div>
);

export default Welcome;
