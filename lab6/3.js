let n = prompt('введите n',);

function zadanie(n){    
let arr =new Array(n);

for (let i = 0; i < n; i++) {
    arr.push(i);
}

arr.forEach(function(person, index){
    setTimeout(function(){
        console.log(person);
    }, 3000 * (index + 1));   
})
}
zadanie(n);