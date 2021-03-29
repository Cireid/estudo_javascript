let bg = document.getElementById('bg')
let verde = document.getElementById('verde')
let vermelho = document.getElementById('vermelho')


verde.addEventListener('click', () => changeColor('green'))

vermelho.addEventListener('click', () => changeColor('red'))

function changeColor(color){
    if(bg.classList.contains(color)){
        bg.classList.remove(color);
        return;
    }

    bg.classList.add(color);
}
