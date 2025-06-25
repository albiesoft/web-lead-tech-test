import CryptoJS from "crypto-js";

export const encodeMsg = (message: any) =>
  CryptoJS.AES.encrypt(
    JSON.stringify(message),
    process.env.SECRET || ""
  ).toString();

export const decodeMsg = (ciphertext: string) => {
  var bytes = CryptoJS.AES.decrypt(ciphertext, process.env.SECRET || "");
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
