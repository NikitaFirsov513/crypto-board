import { LOAD_TEST_SUCCESS, TTestActions } from "./testActionType";

export interface ITestState {
    data: string
}

const initialState: ITestState = {
    data: ""
};
export default function testReducer(
    state: ITestState = initialState,
    action: TTestActions
) {

    switch (action.type) {

        case LOAD_TEST_SUCCESS: {
            console.log("LOAD_TEST_SUCCESS" + action.payload.data)
            return {
                ...state,
                data: action.payload.data,
            };
        }
        default:
            return state;

    }
}