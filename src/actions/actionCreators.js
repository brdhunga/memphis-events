export function activeCategoryChangeTo(category){
    "use strict";
    return {
        type: "CHANGE_ACTIVE_CATEGORY",
        category
    }
}


//
export function  reminderAddTo(id){
    "use strict";
    return {
        type: "REMINDER_ADDED",
        id
    }
}

