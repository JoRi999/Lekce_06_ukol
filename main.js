/*

// DÚ č. 1 Parsování data

/*

let parseDate = (date) => {
    return {
        day: Number(date.slice(0,2)),

        month: Number(date.slice(3,5)),
        year: Number(date.slice(6,10)),
    }
}

parseDate("12.06.1991")
*/



//

// DÚ č. 2 Formátování data

function newDateFormat (date) {
    let dayNewFormat
    let monthNewFormat

    let  {day, month, year} = date

    if (day < 10) {
        let dayString = day.toString()
        dayNewFormat = dayString.padStart(2, "0")
    } else {
        dayNewFormat = day
        day = day.toString()
    }

    if (month < 10) {
        let monthString = month.toString()
        monthNewFormat = monthString.padStart(2, "0")
    } else {
        monthNewFormat = month
        month = month.toString()
    }
    return (dayNewFormat + "." + monthNewFormat + "." + year)
}

let date = newDateFormat({ day: 9, month: 3, year: 2015 })
console.log(date)


// DÚ č. 3 Python zaokrouhlování
/*
function round (cislo) {
    let celaCast = Math.trunc(cislo)
    let desetinnaCast = cislo - celaCast
    let vysledek = 0

    console.log(celaCast, desetinnaCast)

    if (cislo > 0) {
        if (desetinnaCast < 0.50){
            vysledek = celaCast
        } else if (desetinnaCast > 0.50) {
            vysledek = celaCast + 1
        } else {
            if (celaCast % 2 == 0) {
                vysledek = celaCast
            } else {
                vysledek = celaCast + 1
            }
        }
    } else {
        if ((-desetinnaCast) < 0.50) {
            vysledek = celaCast
        } else if ((-desetinnaCast) > 0.50) {
            vysledek = celaCast - 1
        } else {
            if (celaCast % 2 == 0) {
                vysledek = celaCast
            } else {
                vysledek = celaCast - 1
            }
        }
    }
    return vysledek   
}

let cislo = (prompt("Zadejte desetinné číslo:"))
vysledek = round(cislo)
console.log("Zaokrouhlené číslo: " + vysledek)
*/
