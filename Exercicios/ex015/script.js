function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas ${min} Minutos`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'Manha.png'
        document.body.style.background = '#89865c'
    }else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
        img.src = 'Tarde.png'
        document.body.style.background = '#f27f1f'
    }else {
        // Boa Noite
        img.src = 'Noite.png'
        document.body.style.background = '#063575'
    }
}