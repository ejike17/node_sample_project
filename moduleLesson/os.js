const os = require("os");

//Info about current user
const user = os.userInfo();

//Returns system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOs);
