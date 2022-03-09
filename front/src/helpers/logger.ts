/* eslint-disable no-console */

const info = (message: string) => {
  console.log(`INFO | ${message}`);
};

const warn = (message: string) => {
  console.log(`WARN | ${message}`);
};

const error = (message: string) => {
  console.error(`ERROR | ${message}`);
};

export default {
  info,
  warn,
  error,
};
