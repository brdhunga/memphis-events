import React from 'react';
import render from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);


import App from "../../src/App";


describe('[Main App Component]', function () {

    let result;

    // create props 
    const props = {
        tags: ["tag1", "tag2", "tag3"],
        headerTitle: "Events in Memphis"
    }
    
    // setup
    const app = TestUtils.renderIntoDocument(
        <App {...props} />
    );
    const appHtml = ReactDOM.findDOMNode(app).outerHTML;

    // run tests
    it('should return tags and header title', ()=>{
        expect(appHtml).toInclude("Memphis");
        expect(appHtml).toInclude("event");
        expect(appHtml).toInclude("tag1");
        expect(appHtml).toInclude("tag2");
     });

})

