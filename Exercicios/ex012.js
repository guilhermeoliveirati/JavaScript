var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()
console.log(`Agora são exatamente ${hora} horas`)
if ((hora >= 0) && (hora <=5)) {
    console.log(`Boa Madrugada`)
} else if ((hora => 6) && (hora <=12)) {
    console.log(`Bom dia`)
} else if (( hora >=13) && (hora <= 18)) {
    console.log(`Boa tarde`)
} else {
    console.log(`Boa noite`)
}