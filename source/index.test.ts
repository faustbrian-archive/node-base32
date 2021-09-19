import { decode, encode } from "./index";

test("#encode", () => {
  expect(encode("f")).toStrictEqual("MY======");
});

test("#decode", () => {
  expect(decode("MY======").toString("utf8")).toStrictEqual("f");
});
