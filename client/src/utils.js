import * as CryptoJS from "crypto-js";

const secretKey = "6Le6ZpMlAAAAAFyL-GFTo2UZykHJ5mpbQmWgOnls"
  ? "6Le6ZpMlAAAAAFyL-GFTo2UZykHJ5mpbQmWgOnls"
  : "12345";

export const encrypt = (plainText) => {
  const cipherText = CryptoJS.AES.encrypt(plainText, secretKey).toString();
  return cipherText;
};

//export const backendApi = process.env.REACT_APP_API_URL;
