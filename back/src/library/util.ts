import crypto from "crypto";

export const createSalt = () =>
  new Promise<string>((resolve, reject) => {
    crypto.randomBytes(64, (error, buffer) => {
      if (error) reject(error);
      resolve(buffer.toString("base64"));
    });
  });

export const createHashedPassword = (password: string, salt: string) =>
  new Promise<string>((resolve, reject) => {
    crypto.pbkdf2(password, salt, 256, 64, "sha512", (error, key) => {
      if (error) reject(error);
      resolve(key.toString("base64"));
    });
  });
