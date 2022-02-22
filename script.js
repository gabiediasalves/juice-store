var valor_sacola180 = 0
var valor_sacola500 = 0
var valor_sacola900 = 0
var valor_total_sacola = 0
var saborAtual = ""
var valor_sacola_laranja = 0



function indicaSabor(sabor) {
    console.log(sabor)
    if (sabor == "laranja") {
        window.open("suco_laranja.html")
    } else if (sabor == "maca") {
        window.open("suco_laranja.html")
    } else if (sabor == "mamao") {
        window.open("suco_laranja.html")
    } else if (sabor == "limao") {
        window.open("suco_laranja.html")
    }
    saborAtual = sabor
}



function colocar_na_sacola() {
    res.innerHTML = ''
    //entrada das variáveis
    let volume = document.getElementsByName('volume')
    let quant = document.getElementById('quantidade')
    let quantidade = Number(quant.value)


    //calculo da sacolinha
    if (volume[0].checked) {
        valor_sacola180 += quantidade * 7.90
        valor_total_sacola += valor_sacola180
    } else if (volume[1].checked) {
        valor_sacola500 += quantidade * 9.90
        valor_total_sacola += valor_sacola500
    } else if (volume[2].checked) {
        valor_sacola900 += quantidade * 11.90
        valor_total_sacola += valor_sacola900
    }
    res.innerHTML += `<p>Valor total sacola 180: R$${valor_sacola180}</p>`
    res.innerHTML += `<p>Valor total sacola 500: R$${valor_sacola500}</p>`
    res.innerHTML += `<p>Valor total sacola 900: R$${valor_sacola900}</p>`
    res.innerHTML += `<p>Valor total da sacola: R$${valor_total_sacola}</p>`
}
function sacola(){
    res.innerHTML= `oi`

}