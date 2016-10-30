export default  (state = {}, action) => {
    /* the input is list of events */
    switch(action.type) {
        case 'CHANGE_ACTIVE_CATEGORY':
            return action.category
    }
    return state;
}

