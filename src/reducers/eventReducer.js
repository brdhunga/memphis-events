export function filterEventsById(events_, id_){
    /*
     filters events to get particular event by id
     */
    for (var index in events_){
        if (events_[index].id === id_){
            return events_[index]
        }
    }
    return null;
}


export function eventReducer(state = [], action) {
    /* the input is list of events */
    switch(action.type) {
        case 'REMINDER_ADDED':
            const chosenEvent = filterEventsById(state, action.id)
            const newEvent = {...chosenEvent, reminderAdded: true}
            const index = state.indexOf(chosenEvent)
            return [...state.slice(0, index), newEvent ,...state.slice(index+1)]
    }

    return state;
}


