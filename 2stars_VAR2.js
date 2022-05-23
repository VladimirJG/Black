const fs = require('fs')
const users = JSON.parse(fs.readFileSync("./json_for_2stars.json"))


let chekid = Array.from(new Set(users.map(item => JSON.stringify(item)))).map(item => JSON.parse(item))
console.log(chekid)