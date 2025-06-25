import CryptoJS from "crypto-js";

// This for this example is ok but for a production application
// I would try hide this secret from the browser somehow

const SECRET = import.meta.env.VITE_SECRET;

const encodeMsg = (message: any) =>
  CryptoJS.AES.encrypt(JSON.stringify(message), SECRET || "").toString();

const decodeMsg = (ciphertext: string) => {
  var bytes = CryptoJS.AES.decrypt(ciphertext, SECRET || "");
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export { encodeMsg, decodeMsg };
