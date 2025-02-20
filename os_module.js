const os=require('os');

console.log("Platform:",os.platform());
console.log("User:",os.userInfo());
console.log("CPU Architecture:",os.arch());
console.log("Free Memory:",os.freemem(),"bytes");
console.log("Total Memory:",os.totalmem(),"bytes");
console.log("System Uptime:",os.uptime(),"seconds");
console.log("Home Directory:",os.homedir());
console.log("Operating System:",os.type());