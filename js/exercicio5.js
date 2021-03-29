function descendingOrder(n){
    return Number(n.toString().split('').sort().reverse().join(''));
}

console.log(descendingOrder(1223456789))
