// create a fake DOM environment for tests
import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

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
