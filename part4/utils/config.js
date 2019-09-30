let MONGO_URL = process.env.MONGO_URL;
let PORT = 3003;

if (process.env.NODE_ENV === 'test') {
  MONGO_URL = process.env.MONGO_TEST_URL;
}

module.exports = {
  MONGO_URL,
  PORT
};
