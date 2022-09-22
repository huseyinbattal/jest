const { fetchData } = require("./asyncFunc");

test("Async Test", () => {
  return fetchData().then((data) => {
    expect(data).toBe("Merhaba");
  });
});
