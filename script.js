/*
const overeniHesla = heslo => {
    if(heslo.length > 10) {
        return true
    } else {
        return false
    }

    //Kratsi varianta
    //return heslo.length > 10 ? true : false
}

const registrace = (jmeno, heslo, overeniHesla) => {
    if(!overeniHesla(heslo)) {
        return `<p>Uzivatel ${jmeno} nebyl uspesne registrovat registrovan! Heslo je prilis kratke</p>`
    }
    
    return `<p>Uzivatel ${jmeno} s heslem: '${heslo}' je uspesne registrovan!</p>`
}

const jmeno = prompt("Zadej jmeno")
const heslo = prompt("Zadej heslo")

document.body.innerHTML = registrace(jmeno, heslo, overeniHesla)


const kalkulacka = (cislo1, cislo2, op) => {
    if(op === "+") {
        return cislo1 + cislo2
    } else if(op === "-") {
        return cislo1 - cislo2
    } else if(op === "*") {
        return cislo1 * cislo2
    } else if(op === "/") {
        if(cislo2 === 0) {
            return "ERROR: nelze delit nulou"
        } else {
            return cislo1 / cislo2
        }
    } else {
        return null
    }
}

const plus = (cislo1, cislo2) => {
    return cislo1 + cislo2
}

const minus = (cislo1, cislo2) => {
    return cislo1 - cislo2
}

const kalkulacka2 = (cislo1, op, cislo2) => {
    return op(cislo1, cislo2)
}

console.log(kalkulacka2(10, plus, 5))
console.log(kalkulacka2(10, minus, 5))
*/


//vypisování časů a textů na stránce
setTimeout(() => {
    document.body.innerHTML += '<p>Čas vypršel</p>'
}, 5000)

setInterval(() => {
    document.body.innerHTML += '<p>Interval vypršel</p>'
}, 2000)



// časovač
let s = 0
let m = 0

setInterval(() => {
    if(s === 60) {
        m++ // m = m + 1
        s = 0
    }

    document.body.innerHTML += `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`

    s++
}, 1000)



//Události(uživatelská akce = kliknutí, přejetí myší...)
const btnText = document.querySelector("#text")
const btnNeklikej = document.querySelector("#btn")

btnText.addEventListener("click", () => {
    btnText.classList.toggle("ramecek")
})

btnText.addEventListener("mouseover", () => {
    btnText.classList.toggle("pozadi")
})

btnNeklikej.addEventListener("click", () => {
    btnText.textContent = "NEMEL SI NA TO TLACITKO KLIKAT"
    btnText.classList.add("hell")
})