const { fetchData } = require("./asyncFunc");

beforeAll(() => {
    console.log("Before All")
})

afterAll(() => {
    console.log("After All")
})

test("Async Test", () => {
  return fetchData().then((data) => {
    expect(data).toBe("Merhaba");
  });
});
