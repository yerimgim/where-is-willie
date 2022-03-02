import { customAlphabet } from "nanoid";

const makeKey = () => {
  return customAlphabet("123456789abcdef", 10);
};

export default makeKey;
