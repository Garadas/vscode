let numbers = [];
    while (true) {
      let value = prompt("Введите число", "stop");
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
    function zadanie(numbers){
        for (let number of numbers) {
            if(number==10){
                console.error('Элемент '+number);
            }
            else{
                console.log('Элемент '+number);
            }
          }
    }
    zadanie(numbers);