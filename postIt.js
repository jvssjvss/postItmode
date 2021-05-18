
window.click=0;
function postItColor(){
    const colorPost= ['lightgreen', 'pink', 'lightblue', 'lightyellow'];
    let colorIndex = Math.floor(Math.random()*colorPost.length);
    let actualColor = colorPost[colorIndex];
    return (note.style.backgroundColor = actualColor);

}

function postIt(){
    window.note=document.getElementById("postar");
    note.style.display="block";

}

function erasePost(){
    note.style.display="none"}

function postContent(content){
    note.innerText = content;
}

function dinamicPost(secuencia){
    let postItems=["0", "joao", "2", "3"];
    return postItems[secuencia];
    
}

function onPost(){
    for (i=0; i<4; i++){
    setTimeout(()=> postContent(dinamicPost(click)), i*1000);}}
    

function clickPost(){
   
    click=click+1;
    postItColor();

    switch(click){
        case 4:
            click=0;
            postContent(dinamicPost(click));
            break;
        default:
            postContent(dinamicPost(click));
            break;

    }
   
}