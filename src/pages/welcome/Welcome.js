import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import Message from 'app/components/message/Message';

const Welcome = () => (
  <div>
    <LinearProgress mode="indeterminate" />
    
    <div className="content" id="welcome">
      <aside>
        <h3>Aside</h3>


      </aside>

      <main>
        <h3>Main</h3>

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
        <h3>Aside</h3>

        <p>
          Spicy jalapeno bacon ipsum dolor amet pig meatball meatloaf shankle, ground round venison sausage 
          tri-tip shank short ribs jowl flank andouille tongue. Frankfurter kielbasa shankle, venison shoulder 
          pig jowl pork chop. Bresaola brisket cupim chicken shankle meatloaf cow sausage porchetta. Spare ribs 
          pancetta tenderloin, ribeye pork loin jerky landjaeger andouille pork chop.
        </p>

        <p>
          Strip steak pancetta flank tail boudin sausage ham hock andouille. Chuck corned beef fatback ham hock meatball. 
          Hamburger boudin fatback ham. Drumstick tail strip steak, doner venison shoulder fatback tongue short loin pig. 
          Hamburger short ribs sirloin, cupim meatball kielbasa ground round bacon fatback.
        </p>
      </aside>
    </div>
  </div>
);

export default Welcome;
