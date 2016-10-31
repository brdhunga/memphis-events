import React from 'react';
import render from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Event from "../../src/components/event";


describe('[Event Component]', function () {

    let result;

    // create props 
    const props = {
        title: "Title for a event 1",
        content: "Content for event 1",
        poster : "brdhunga@gmail.com",
        date: "05/04/1988",
        from: "5 PM",
        to: "6 PM" ,
        id: "ID0663" ,
        category: "all"
    }
    
    // setup
    const event = TestUtils.renderIntoDocument(
        <Event {...props} />
    );
    const eventHtml = ReactDOM.findDOMNode(event).outerHTML;

    // run tests
    it('should render event detail', ()=>{
        expect(eventHtml).toInclude("Title for a event 1");
        expect(eventHtml).toInclude("brdhunga@gmail.com");
     });

})

