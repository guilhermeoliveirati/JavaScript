var agora = new Date() // Date precisar ser maiusculo
var diaSem = agora.getDay()
var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()

switch(diaSem) {
    case 0:
        console.log(`Hoje é dia ${dia} do ${mes} de ano ${ano}`)
        console.log('Domingo')
        break
    case 1:
        console.log(`Hoje é dia ${dia} do ${mes} de ano ${ano}`)
        console.log('Segunda Feira')
        break
    case 2:
        console.log(`Hoje é dia ${dia} do ${mes} de ano ${ano}`)
        console.log('Terça Feira')
        break
    case 3:
        console.log(`Hoje é dia ${dia} do ${mes} de ano ${ano}`)
        console.log('Quarta Feira')
        break
    case 4:
        console.log(`Hoje é dia ${dia} do ${mes} de ano ${ano}`)
        console.log('Quinta Feira')
        break
    case 5:
        console.log(`Hoje é dia ${dia} do ${mes} de ano ${ano}`)
        console.log('Sexta Feira')
        break
    case 6:
        console.log(`Hoje é dia ${dia}`)
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia invalido!')
}