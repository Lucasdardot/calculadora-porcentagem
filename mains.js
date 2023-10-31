function calcular(){
    const num1 =parseInt(document.getElementById("input1").value)
    const num2 =parseInt(document.getElementById("input2").value)
    const resultado = num1 * num2/100
    document.getElementById("resultado").innerHTML = num2 + "% de " + num1 + " é igual a " + resultado 
}
