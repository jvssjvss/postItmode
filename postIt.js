
window.click=0;

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
    

    
}
function onPost(){
    for(i=0; i<3; i++){
    setTimeout(()=> postContent(dinamicPost(i)), 3000);}}
    

function clickPost(){
   
    click=click+1;

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