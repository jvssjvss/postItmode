
//marcar o número de clicks
window.click=0;

//Trocar as cores do post-it
function postItColor(){
    const colorPost= ['lightgreen', 'pink', 'lightblue', '#FFFF66'];
    let colorIndex = Math.floor(Math.random()*colorPost.length);
    let actualColor = colorPost[colorIndex];
    return (note.style.backgroundColor = actualColor);
}

//Tornar visível o post-it
function postIt(){
    window.note=document.getElementById("postar");
    note.style.display="block";
    postItColor();

}

//Apagar o post-it e zerar o click
function erasePost(){
    note.style.display="none";
    click=0;}

function postContent(content){
    note.innerText = content;
}
function dinamicPost(indicador, item){
let matrix = [];
matrix.length=indicador;
for (i=0; i<matrix.length; i++){
    matrix[i]= document.getElementById(nomeSpan+i).innerText;
    console.log(i)
   } return matrix[item];
}




function onPost(){
    for (i=0; i<4; i++){
    setTimeout(()=> postContent(dinamicPost(click)), i*1000);}}

function clickPost(itemFinal){
    click=click+1;
    postItColor();


    switch(click){
        case itemFinal:
            click=0;
            postContent(dinamicPost(itemFinal, click));
            break;
        default:
            postContent(dinamicPost(itemFinal, click));
            break;
    }
}