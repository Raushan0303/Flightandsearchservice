const dotenv = require('dotenv');

dotenv.config();
console.log("Hello world");

module.exports={
    PORT: process.env.PORT
}