// DÚ č. 1 Parsování data

let parseDate = (date) => {
    date = prompt("zadejte datum ve formátu DD.MM.YYYY")
    let day = Number(date.slice(0,2))

    let month = Number(date.slice(3,5))
    let year = date.slice(6,10)

    console.log("Day: " + day + ", " + "month: " + month + ", " + "year: " + year)
}

parseDate()

/*

DÚ č. 2 Formátování data

let date = {
    day: Number(prompt("Zadejte den ve formátu D:")),
    month: Number(prompt("Zadejte měsíc ve formátu M")),
    year: prompt("Zadejte rok:"),
}

let{day, month, year} = date

function newDateFormat () {
    let dayNewFormat
    let monthNewFormat

    if (day < 10){
        let dayString = day.toString()
        dayNewFormat = dayString.padStart(2, "0")
    } else {
        dayNewFormat = day
        day = day.toString()
    }

    if (month < 10){
        let monthString = month.toString()
        monthNewFormat = monthString.padStart(2, "0")
    } else {
            monthNewFormat = month
            month = month.toString()
    }
    console.log(dayNewFormat + "." + monthNewFormat + "." + year)
}

newDateFormat()

*/

