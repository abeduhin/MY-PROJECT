// const names = ['Петро', 'Валера', 'Олеся', 'Софія']

// names.push('Тамара')
// // добавляет элемент в конец

// names.unshift('Тамара')
// // добавляет элемент в начало

// const firstName = names.shift()
// удаляет первый элемент из массива и возвращает

// const firstName = names.pop()
// // удаляет последний элемент из массива и возвращает
// console.log('Names: ', names, firstName)

// names.reverse()
// // ставит элементы массива в обратном порядке - мутирует массив

// const reversed = names.toReversed()
// console.log(reversrd)
// // ставит элементы массива в обратном порядке - не мутирует массив

// console.log('Names: ',
// names.toSorted((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
// //  names.sort(function(a,b) {
// //     return a.charCodeAt(0) - b.charCodeAt(0)
// //  })
// )
// const str = ''
// console.log(str.charCodeAt(0))
// // charCodeAt - приводит к коду UTF-16
// // sort - сортирует и мутирует
// // toSorted - сортирует и не мутирует
// console.log(names.splice(2,2))
// удаляет по индексу, необязательный - количество элементов после указанного - мутирует изначальный массив
// console.log(names.toSpliced(2,2))
// удаляет по индексу, необязательный - количество элементов после указанного - не мутирует изначальный массив

// const oldMan = 'Валера'
// const index = names.indexOf(oldMan)
// // names[index] = 'Валера Старий'
// console.log(index)
// // console.log(names[index])
// // // ищет индекс по указанному параметру - если не находит возвращает (-1) - мутирует изначальный массив
// const newNames = names.with(index, 'Валера Старий')

// const capitalNames = names.map((name) =>
//     // name + ' &'
//     // name.toLocaleLowerCase()
//     name.toUpperCase()
// )
// console.log(capitalNames)
// цикл - позволяет совершать действия с каждым элементом массива
// console.log('Names: ', names)
// console.log('Names: ', newNames)

// console.log(names.includes('Олеся'))
// ищет елемент массива - булевое значение

const people = [
    {name: 'Петро', budget: 12500},
    {name: 'Валера', budget: 7500},
    {name: 'Олеся', budget: 800},
    {name: 'Софія', budget: 3400},
]
// const finded = people.find((p) => p.budget === 7500)
// метод для работы с объектами массива - функция, возвращает пару имя-ключ по заданному параметру- (find - найти).
// const finded = people.findIndex((p) => p.budget === 800)
// метод для работы с объектами массива - функция, возвращает индекс объекта по заданному параметру.
// const filtered = people.filter((p) => p.budget > 5000)
// метод для работы с объектами массива - функция, возвращает массив объектов по заданному условию.
// const byBudget = (p) => p.budget < 5000
// const pickBudget = (p) => p.budget

// const sumBudget = people
//   .filter(byBudget)
//   .map(pickBudget)
//   .reduce((acc, p) => acc + p, 0)

// const string = 'Привіт, як справи?'
// const reversed = string
// .split('')
// // метод для работы со строками - разбвает строку по символам
// .toReversed()
// // метод для работы со строками - меняет напрвление символов на обратное.
// .join('')
// // склеивает строку по символам
// console.log(reversed)