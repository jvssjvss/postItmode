//Identificar o id do post-it, clicks, etc.
function traceId(id){
    return document.getElementById(id);
}
//Converter o resultado do html do click em um número inteiro
function integerId(){
    return parseInt(traceId("click").innerText);
}

//Identificar o contador de click no html
function clicks(tyoe){
    switch(tyoe){
        //marcar o número de clicks
        case "suma":
            let f = integerId();
            f = f+1;
            traceId("click").innerText = f;
        break;
        //zerar o número de clicks
        case "zerar":
            traceId("click").innerText=0;
        break;}

    //resultado do número de clicks
    return traceId("click").innerText;
}



//Trocar as cores do post-it
function postItColor(){
    let colorPost= ['lightgreen', 'pink', 'lightblue', '#FFFF66'];
    let colorIndex = Math.floor(Math.random()*colorPost.length);
    let actualColor = colorPost[colorIndex];
    return  actualColor;
}

//Tornar visível o post-it
function postIt(status){

    switch(status){
    case true:
    traceId("postar").style.display="block";
    traceId("postar").style.backgroundColor = postItColor();
    break;
//Apagar o post-it e zerar o click
    case false:
    traceId("postar").style.display="none";
    clicks("zerar");
    break;
    }

}

//Delimitar o conteúdo do post-it
function postContent(content){
    traceId("postar").innerText = content;
    traceId("postar").style.backgroundColor = postItColor();
}
//Criar um array com o conteúdo de todos os posts
function dinamicPost(indicador, item, nomeTag){
let matrix = [];
matrix.length=indicador;
for (i=0; i<matrix.length; i++){
    matrix[i]= traceId(nomeTag+i).innerText;
    console.log(i)
   } return matrix[item];
}


//Sinalizar o último item do contador e o nome do array que será utilizado
function clickPost(itemFinal, nomeTag){
    clicks("suma");

    switch(integerId()){
        case itemFinal:
            clicks("zerar");     
            break;
    }
    postContent(dinamicPost(itemFinal, clicks("resultado"), nomeTag));
}