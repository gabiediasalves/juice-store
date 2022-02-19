function colocar_na_sacola(valor_sacola180, valor_sacola500, valor_sacola900) {

    //entrada das variáveis
    let volume = document.getElementsByName('volume')
    let quant = document.getElementById('quantidade')
    let quantidade = Number(quant.value)
    let 

    //calculo da sacolinha
    if (volume[0].checked) {
        valor_sacola180 =+ quantidade * 9.99
        window.alert(valor_sacola180.toFixed(2))

    } else if (volume[1].checked) {
        valor_sacola500 =+ quantidade * 7.90
        window.alert(valor_sacola500.toFixed(2))
   
    } else if (volume[2].checked) {
        valor_sacola900 =+ quantidade * 11.90
        window.alert(valor_sacola900.toFixed(2))
   
    }
 

    

}

