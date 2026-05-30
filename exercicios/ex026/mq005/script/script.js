let ativo = false;
function mostrarMenu(){
    const menu = document.getElementById('iMenu');


    if(ativo===false){
        
        menu.classList.add('show');
        ativo=true;
    }else{
        ativo =false;    
        menu.classList.remove('show');
    }
}