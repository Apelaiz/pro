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

let servicePrice1 = +prompt("Сколько это будет стоить?")
console.log(servicePrice1)

let service2 = prompt ("Какой ещё сервис тебе нужен?")
console.log(service2)

let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?")
console.log(servicePrice2)

// math
let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log(fullPrice)

let serviceResault = +(fullPrice * (percentage / 100))
console.log(serviceResault, "Процент подрядчику: ")

let servicePercentPrise = fullPrice - serviceResault
console.log(Math.ceil (servicePercentPrise), "Сумма с вычетом процента")

// Discounts

if(fullPrice > 50000) {
    console.log("Скидка 10%");
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log("Сделаем скидку 5%")
} else if (fullPrice <20000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена")
} else if (fullPrice < 0) {
    console.log("Что-то пошло не так")
} else if (fullPrice === 0 | fullPrice === 20000 | fullPrice === 50000) {
    console.log("Любой текст по желанию")
}