// titleProject (String)
// ScreensValue (String)
// screenPrice  (Number)
// percentage   (Number)
// fullPrice    (Number)
// responsive   (Boolean)

// let titleProject = "Калькулятор"
// let ScreensValue = "Шаблоны, с уникальным дизайном, с анимациями"
// let screenPrice = 10000
// let percentage = 10
// let fullPrice = 50000
// let responsive = true

let screenPrice = 10000
let percentage = 10

let titleProject = prompt("Название проекта")
console.log(titleProject)

let ScreensValue = prompt ("шаблонные, с уникальным дизайном, с анимациями")
console.log(ScreensValue)

let responsive = prompt("Нужен ли респонсив на сайте?")
console.log(responsive)

let service1 = prompt ("Какой сервис нужен?")
console.log(service1)

let servicePrice1 = prompt("Сколько это будет стоить?")
console.log(servicePrice1)

let service2 = promt ("Какой ещё сервис тебе нужен?")
console.log(service2)

let servicePrice2 = prompt("Сколько будет стоить этот второй сервис?")
console.log(servicePrice2)

let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log(fullPrice)

