const fs = require('fs')
const users = JSON.parse(fs.readFileSync("./json_for_2stars.json"))

let uniquePerson = []
users.forEach((el) => {
    if (uniquePerson.indexOf(JSON.stringify(el)) === -1) {
        uniquePerson.push(JSON.stringify(el));
    }
})

console.log(uniquePerson)