import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import expect from 'expect';

import activeCategoryReducer from './activeCategoryReducer'


function name(name_){
    return name_ + name_
}

it('activeCategory reducer works', () => {
    const action_ = {type: 'CHANGE_ACTIVE_CATEGORY', category: "university"}
    expect(activeCategoryReducer({}, action_)).toEqual("university")
});


