//var num1=0;
//var num2=0;
var opera;
//var resultado;


function Calcular(opera){
    var resultado = 0;
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if(opera === 'soma'){
      resultado = parseFloat(num1) + parseFloat(num2);
      document.getElementById('resultado').value = resultado;
    }

    else if(opera === 'subtracao'){
      resultado = parseFloat(num1) - parseFloat(num2);
      document.getElementById('resultado').value = resultado;
    }

    else if(opera === 'multiplicacao'){
        resultado = parseFloat(num1) * parseFloat(num2);
        document.getElementById('resultado').value = resultado;
    }
   

  else if(opera == 'divisao'){
        resultado = parseFloat(num1) / parseFloat(num2);
        document.getElementById('resultado').value = resultado;
    
        if(num2 == 0){
            document.getElementById('resultado').value = "O numero 2 não pode ser 0";
        }

    } 
      
}








/* if(opera==1){
    Soma();
} else if (opera == 2){
    Subtracao();
} else if (opera == 3){
    Multiplicacao();
} else if (opera == 4){
    Divisao();
} else{
    console.log("Operação Invalida");
} */





