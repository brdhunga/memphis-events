import React from 'react';
import render from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);


import Header from "../../src/components/header";


describe('[Header Component]', function () {

    let result;

    // create props 
    const props = {
        headerTitle: "Events in Memphis"
    }
    
    // setup
    const header = TestUtils.renderIntoDocument(
        <Header {...props} />
    );
    const headerHtml = ReactDOM.findDOMNode(header).outerHTML;

    // run tests
    it('should return page header', ()=>{
        expect(headerHtml).toInclude("hero is-medium is-primary is-bold");
     });

})

