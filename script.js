const date = document.getElementById("date")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

const today = new Date();

const weekDays = ["Пон","Втр","Срд","Чет","Пят","Суб","Вос",]

const allMonth = ["Ян","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",]

date.innerHTML = today.getDate()
day.innerHTML = weekDays[today.getDay()]
month.innerHTML = allMonth[today.getMonth()]
year.innerHTML = today.getFullYear()

