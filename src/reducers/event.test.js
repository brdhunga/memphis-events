import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import expect from 'expect';


import activeCategoryReducer from './activeCategoryReducer'
import { filterEventsById, eventReducer } from './eventReducer'


function name(name_){
    return name_ + name_
}

const events = [
    {name: "event 1", id: "event1", reminderAdded:false },
    {name: "another event", id:"event2", reminderAdded:false}
]

// check for event 1
const event1 = events[0]
const id1 = "event1"
const id2 = "event2"
const nonExistId = "event3"

//
it ("event filterer returns unique event", () => {
    expect(filterEventsById(events, id1)).toEqual(event1)
})

//
it ("event filterer does not return different event", () => {
    expect(filterEventsById(events, id2)).toNotEqual(event1)
})

//
it ("event filterer returns null for  non existant event", () => {
    expect(filterEventsById(events, nonExistId)).toEqual(null)
})


const action_ = {type: 'REMINDER_ADDED', id: id1}

it ("event reducer works on the right reducer", () => {
    const chosenEvent = filterEventsById(events, id1)
    const i = events.indexOf(chosenEvent)
    const reducedEvents = eventReducer(events, action_)
    expect(reducedEvents[i]["reminderAdded"]).toEqual(true)
})


it ("event reducer does not affect other reducers", () => {
    const chosenEvent = filterEventsById(events, id1)
    const i = 1
    const reducedEvents = eventReducer(events, action_)
    expect(reducedEvents[i]["reminderAdded"]).toEqual(false)
})

it ("active category reducer works", () => {
    const action_ = {type:'CHANGE_ACTIVE_CATEGORY', category:"python"}
    expect(activeCategoryReducer("all", action_)).toEqual("python")
})

