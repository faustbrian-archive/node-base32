import { decode, encode } from "./index";

test("#encode", () => {
  expect(encode("f")).toStrictEqual("my");
});

test("#decode", () => {
  expect(decode("my").toString("utf8")).toStrictEqual("f");
});
