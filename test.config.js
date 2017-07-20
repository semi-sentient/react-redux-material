// create a fake DOM environment for tests
import { jsdom } from 'jsdom';

const exposedProps = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.navigator = {
  userAgent: 'node.js'
};
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProps.push(property);
    global[property] = document.defaultView[property];
  }
});

// set up globals for testing so that we don't have to import them in every spec
import React from 'react';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon, { spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';

chai.use(chaiAsPromised);
injectTapEventPlugin(); // this is required to avoid warnings when using Material UI components

global.chaiAsPromised = chaiAsPromised;
global.expect = chai.expect;
global.sinon = sinon;
global.spy = spy;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.React = React;
