const rename = require("../core");
const path = require("path");
const fs = require("fs");

describe("reanme", () => {
  it("simple", () => {
    const result = [];
    const folder = "./rename";
    rename(
      p => {
        const map = {
          [folder]: ["1.js", "2.js", "a"],
          "rename/a": ["a1.js", "a2.js"]
        };
        return map[p];
      },
      (old, n) => {
        result.push(n);
      },
      folder,
      ".js",
      ".ts"
    );
    expect(result[0]).toBe("rename/1.ts");
    expect(result[1]).toBe("rename/2.ts");
    expect(result[2]).toBe("rename/a/a1.ts");
    expect(result[3]).toBe("rename/a/a2.ts");
  });
});
