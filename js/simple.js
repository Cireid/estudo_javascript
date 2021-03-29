const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function(){
    const numerorandom = getNumeroRandom();
    console.log(numerorandom)
    document.body.style.backgroundColor = colors[numerorandom];
    color.textContent = colors[numerorandom];
})


function getNumeroRandom(){
    return Math.floor(Math.random() * colors.length);
}