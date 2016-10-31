import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);


import Tags from "../../src/components/tags";


describe('Tags Component', function () {

    /*
    let result;
    
    // setup
    let renderer = ReactTestUtils.createRenderer();
    const props = {
        tags : ["tag1", "tag2", "tag3"]       
    };
    renderer.render(<Tags {...props} />)
    result = renderer.getRenderOutput(); 

    // run tests
    it('should return tags', ()=>{
        expect(result).toInclude('tag1');
     });
     */

    const props = {
        tags : ["tag1", "tag2", "tag3"]       
    };

    const tags = TestUtils.renderIntoDocument(
        <Tags {...props} />
    );
    const tagsHtml = ReactDOM.findDOMNode(tags).outerHTML;

    it('should return tags', ()=>{
        expect(tagsHtml).toInclude('tag1');
        expect(tagsHtml).toInclude("tag2");
     });


})
