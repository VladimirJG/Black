const company = [{
    id: 1,
    name: "Компания",
    parent: null,
    users_count: 10,
    children: [{
            id: 2,
            name: "Отдел тестирования",
            parent: 1,
            users_count: 7,
            children: [{
                    id: 2,
                    name: "Тестирование Web",
                    parent: 2,
                    users_count: 5,
                },
                {
                    id: 3,
                    name: "Тестирование Mobile",
                    parent: 2,
                    users_count: 0,
                },
            ]
        },
        {
            id: 4,
            name: "Отдел маркетинга",
            parent: 1,
            users_count: 30,
        },
        {
            id: 5,
            name: "Администрация",
            parent: 1,
            users_count: 25,
            children: [{
                    id: 6,
                    name: "Бухгалтерия",
                    parent: 5,
                    users_count: 10,
                },
                {
                    id: 7,
                    name: "Менеджмент",
                    parent: 5,
                    users_count: 15,
                    children: [{
                            id: 8,
                            name: "Подраздел менеджмента 1",
                            parent: 7,
                            users_count: 5,
                        },
                        {
                            id: 9,
                            name: "Подраздел менеджмента 2",
                            parent: 7,
                            users_count: 10,
                        }
                    ]
                },
                {
                    id: 10,
                    name: "HR",
                    parent: 5,
                    users_count: 1,
                }
            ]
        },
    ]
}]

/* 
Написать функцию: 
  
Функция строит древовидный список компании.
При ее вызове в консоль должен выветить список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.
  
Пример:
  
Компания (10)
-- Отдел тестирования (7)
---- Тестирование Web (5)
---- Тестирование Mobile (0)
-- Отдел маркетинга (30)
-- Администрация (25)
---- Бухгалтерия (10)
---- Менеджмент (15)
------ Подраздел менеджмента 1 (5)
------ Подраздел менеджмента 2 (10)
---- HR (1)
*/


const checkArray = function(company, counter = "") {
    company.forEach((comp) => {
        console.log(`${counter}${counter === "" ? "" : " "}${comp.name} (${comp.users_count})`);
        if (comp.children) {
            counter += "--";
            checkArray(comp.children, counter);
            counter = counter.slice(0, -2);
        }
    });
};
checkArray(company)
console.log('================================')

//решение 2

const format = (children, i = 2, pre = ' ', pre_1 = ' ') => children.map(({ name, users_count, children }) => {
            //recursive call
            if (Array.isArray(children)) return `${pre}${name}${pre_1}${users_count}\n${format(children, i, `${pre || '|'}${'-'.repeat(i)}`)}`
            return `${pre}${name}${pre_1}${users_count}`
}).join('\n')
console.log(format(company))
console.log('================================')

//решение 3
let a = ""
let res = ""
const getFun = function(tr,a)
{
    res += a + `${tr.name}(${tr.users_count})\n`;
    if(!tr.children)
    return `${tr.name}(${tr.users_count})\n`;
    for (let i=0; i < tr.children.length; i++ ) {
        getFun(tr.children[i], a +"--");
    }
    return res;
}
console.log(getFun(company[0], a))
console.log('============================')