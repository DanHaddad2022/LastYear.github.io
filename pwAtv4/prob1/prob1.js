function calcula(){
    const idAtual = document.getElementById("idadeA").value;
    const idMax = document.getElementById("idadeM").value;
    const qtdLanches = document.getElementById("Lanches").value;
    let total = (idMax-idAtual)*(qtdLanches*365);
    if(idAtual > 0 && idMax > 0 && qtdLanches >= 0){
        console.log(total);
    }else{
    console.log("Digite um valor válido")
    }
}
