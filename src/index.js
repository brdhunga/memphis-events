import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Nav from './components/nav.js'


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


ReactDOM.render(
  <App {...props} />,
  document.getElementById('root')
);
