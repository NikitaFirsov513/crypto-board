export const LOAD_TEST = "LOAD_TEST";

export interface ILoadTest {
  type: typeof LOAD_TEST;
  payload: {
    data: string;
  };
}

export const LOAD_TEST_SUCCESS = "LOAD_TEST_SUCCESS";

export interface ILoadTestSucsess {
  type: typeof LOAD_TEST_SUCCESS;
  payload: {
    data: string;
  };
}

export type TTestActions = ILoadTest | ILoadTestSucsess;
