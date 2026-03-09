// ----- EXO 1 -----
console.log("\nEXO 1")
for(let i=0; i < 10; i++) {
    console.log(`7*${i} = ${7 * i}`)
}

// ----- EXO 2 -----
console.log("\nEXO 2")
let note = 20

switch (note) {
    case 20 :
    case 19 :
    case 18 :
        console.log("Excellent");
        break;
    case 17 :
    case 16 :
    case 15 :
    case 14 :
        console.log("Bien");
        break;
    case 13 :
    case 12 :
    case 11 :
    case 10 :
        console.log("Passable");
        break;
    default :
        console.log("Insuffisant")
}

// ----- EXO 3 -----
console.log("\nEXO 3")
function calculerPrix(prixHT, tva) {
    return prixHT + prixHT * (tva / 100)
}
console.log(calculerPrix(10, 5))


// ----- EXO Bulletin -----
console.log("\nEXO Bulletin")
let nom = "Micheal Jackson"
let notes = [10,12,20,18,16,12,19,18]

function calculerMoyenne(notes) {
    let temp = 0

    for (let i=0; i<notes.length; i++) {
        temp += notes[i]
    }

    result = temp / notes.length

    return parseFloat(result.toFixed(1))
}

console.log("Moyenne de " + nom + " : " + calculerMoyenne(notes) + "/20")