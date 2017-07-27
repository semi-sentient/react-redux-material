import React from 'react';

import Banner from 'app/components/banner/Banner';

const Home = () => (
  <div id="home">
    <Banner
      isLoading
      title="Home"
    />

    <div className="container">
      <h3>
        Hello World!
      </h3>
    </div>
  </div>
);

export default Home;
