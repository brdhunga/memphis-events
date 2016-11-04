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

    const event1 = {
        title: "Title for a event 1",
        content: "Content for event 1",
        poster : "brdhunga@gmail.com",
        date: "05/04/1988",
        from: "5 PM",
        to: "6 PM" ,
        id: "ID0663" ,
        category: "all"
    }

    const event2 = {
        title: "Title for a event 2",
        content: "Content for event 2",
        poster : "brdhunga@gmail.com",
        date: "05/04/1998",
        from: "5 PM",
        to: "6 PM" ,
        id: "ID0664" ,
        category: "sports"
    }

    const events = [event1, event2]


    // create props 
    const props = {
        tags: ["tag1", "tag2", "tag3"],
        headerTitle: "Events in Memphis",
        events
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
        expect(appHtml).toInclude("Title for a event 1");
     });

})

