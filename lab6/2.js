function zadanie(){
    while(true){
        let str = prompt('Введите строку или Дата',)
        if(str=='Дата'){
            let now = new Date();
            alert( now );
            return false;
        }
        else{
            alert(str);
        }
    }
}
zadanie();