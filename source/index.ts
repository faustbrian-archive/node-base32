import { encoding } from "bcrypto";

export const encode = (content: string): string =>
  encoding.base32.encode(Buffer.from(content));

export const decode = (content: string): Buffer =>
  encoding.base32.decode(content);
