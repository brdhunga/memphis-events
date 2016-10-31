import {activeCategoryChangeTo, reminderAddTo} from './actionCreators'


it ("Action--active category change--returns right object", () => {
    const expectedAction = {type: "CHANGE_ACTIVE_CATEGORY", category: "fiction"}
    expect(activeCategoryChangeTo("fiction")).toEqual(expectedAction)
})

it("Action--reminder add -- returns right action object", () => {
    "use strict";
    const expectedAction = {type: "REMINDER_ADDED", id:"X11"}
    const id = "X11"
    expect(reminderAddTo(id)).toEqual(expectedAction)
})


