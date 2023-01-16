import { getHello } from "../src/greet";

test("hello hoge", () => {
  expect(getHello("hoge")).toBe("Hello, hoge!");
});
