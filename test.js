var rsDate = require("./index");

console.log(rsDate.twoDigits(5)); // 05

console.log(rsDate.toMysqlFormat(new Date("21 May 1970 10:12")));

console.log(rsDate.toUnixTimestamp(new Date("21 May 1970 10:12")));