// DÚ č. 1 Parsování data

/*

let parseDate = (date) => {
    date = prompt("zadejte datum ve formátu DD.MM.YYYY")
    let day = Number(date.slice(0,2))

    let month = Number(date.slice(3,5))
    let year = date.slice(6,10)

    console.log("Day: " + day + ", " + "month: " + month + ", " + "year: " + year)
}

parseDate()

*/



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

/* DÚ č. 3 Python zaokrouhlování

let cislo = (prompt("Zadejte desetinné číslo:"))

function round () {
    let desetinnaCast = cislo - Math.trunc(cislo)
    
    if (cislo > 0){
        if (desetinnaCast < 0.50){
            console.log("Zaokrouhlené číslo: " + Math.trunc(cislo))

        } else if(desetinnaCast > 0.50) {
            Math.round(cislo)
            console.log("Zaokrouhlené číslo: " + Math.round(cislo))
        } else {
            if (Math.trunc(cislo)% 2 == 0){
                console.log("Zaokrouhlené číslo: " + Math.trunc(cislo))
            } else {
                console.log("Zaokrouhlené číslo: " + Math.round(cislo))
            }
        }
    } else{
        let desetinnaCastZapor = cislo + Math.trunc(cislo)
        if (desetinnaCastZapor < -0.50){
            console.log("Zaokrouhlené číslo: " + Math.trunc(cislo))

        } else if(desetinnaCastZapor > -0.50) {
            Math.round(cislo)
            console.log("Zaokrouhlené číslo: " + Math.round(cislo))
        } else {
            if (Math.trunc(cislo)% 2 == 0){
                console.log("Zaokrouhlené číslo: " + Math.trunc(cislo))
            } else {
                console.log("Zaokrouhlené číslo: " + (Math.round(cislo) + (-1)))
            }
        }
    }

}

round()

*/ 