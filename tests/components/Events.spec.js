import React from 'react';
import render from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Events from "../../src/components/events";


describe('[Events Component]', function () {

    let result;

    // create props 
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

    const props = {
        events: events
    }
    
    // setup
    const eventsComponent = TestUtils.renderIntoDocument(
        <Events {...props} />
    );
    const eventsHtml = ReactDOM.findDOMNode(eventsComponent).outerHTML;

    // run tests
    it('should render list of events', ()=>{
        expect(eventsHtml).toInclude("Title for a event 1");
        expect(eventsHtml).toInclude("brdhunga@gmail.com");
     });

})

