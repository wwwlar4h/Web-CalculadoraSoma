document.getElementById("calcular").addEvenListener("click", function() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if(!isNaN(numero1) && !isNaN(numero2)) {
        const soma = numero1 + numero2;
        alert("Soma = "+ soma); }
  
        else { alert("Insira números válidos.");}
});