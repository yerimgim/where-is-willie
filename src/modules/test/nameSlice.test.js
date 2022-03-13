import reducer, { getUserName } from "../nameSlice";

describe("nameSlice test", () => {
  test("nameSlice test - initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: true,
      name: null,
    });
  });

  test("nameSlice - existing name", () => {
    const previousState = {
      isLoading: true,
      name: null,
    };

    expect(reducer(previousState, getUserName("이름"))).toEqual({
      isLoading: false,
      name: "이름",
    });
  });
});
