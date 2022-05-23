const fs = require('fs')
const users = JSON.parse(fs.readFileSync("./json_for_2stars.json"))

let uniquePerson = []
users.forEach((el) => {
    if (uniquePerson.indexOf(JSON.stringify(el)) === -1) {
        uniquePerson.push(JSON.stringify(el));
    }
})

console.log(uniquePerson)

/* Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).

Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу. */