import {activeCategoryChangeTo} from './actionCreators'


it ("Action--active category change--returns right object", () => {
    var expectedAction = {type: "CHANGE_ACTIVE_CATEGORY", category: "fiction"}
    expect(activeCategoryChange("fiction")).toEqual(expectedAction)
})

