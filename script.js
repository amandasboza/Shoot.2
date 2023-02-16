 function check() {
    var date = new Date ()
    var ano = date.getFullYear()
    var fano = document.getElementById('textyear')
    var res = document.getElementById('res')

    /* Hipótese de não preenchimento de ano */
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Check the informations and try again')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var age = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'woman'
            if (age >= 0 && age < 10) {
                // Criança
            }
            else if (age < 21) {
                // Jovem
            }
            else if (age < 50) {
                // Adulto
            }
            else if (age => 51 && age < 110) {
                // Idoso
            }
        }
        else if (fsex[1].checked) {
            genero = 'man'
            if (age >= 0 && age < 10) {
                // Criança
            }
            else if (age < 21) {
                // Jovem
            }
            else if (age < 50) {
                // Adulto
            }
            else if (age => 51 && age < 110) {
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Your are a ${genero} and your age is ${age}`

        }
    }