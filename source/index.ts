import { base32 } from "rfc4648";

export const encode = (content: string): string =>
  base32.stringify(Buffer.from(content));

export const decode = (content: string): Buffer =>
  Buffer.from(base32.parse(content));
