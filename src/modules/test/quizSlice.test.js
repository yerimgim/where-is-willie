import reducer, { getResult, getClue } from "../quizSlice";

describe("quizSlice test", () => {
  test("nameSlice test - initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: true,
      result: null,
      clues: [],
    });
  });

  test("quizSlice - existing result", () => {
    const previousState = {
      isLoading: true,
      result: null,
    };

    expect(reducer(previousState, getResult("결과"))).toEqual({
      isLoading: false,
      result: "결과",
    });
  });

  test("quizSlice - existing clues", () => {
    const previousState = {
      clues: [],
    };

    expect(reducer(previousState, getClue("단서1"))).toEqual({
      clues: ["단서1"],
    });
  });
});
