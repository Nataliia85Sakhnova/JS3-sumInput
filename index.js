sumInput = () => {
    let sum = 0;
    for(;;) {
        let value = +prompt("Введите число", '');
        if (!value) break;
        sum += value;
    }
        
        const countingSort = (arr, min, max) => {
            let i, z = 0,
               count = [];
         
            for (i = min; i <= max; i++) {
               count[i] = 0;
            }
         
            for (i = 0; i < arr.length; i++) {
               count[arr[i]]++;
            }
         
            for (i = min; i <= max; i++) {
               while (count[i]-- > 0) {
                  arr[z++] = i;
               }
            }
            return arr;
            alert(arr);
         }
    
    alert( 'Сумма: ' + sum );


// Напишите функцию `sumInput()`, которая:
//     - Просит пользователя ввести значения, используя `prompt` и сохраняет их в массив
//     - Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена»
//     - Выводит получившийся массив в отсортированном по возрастанию виде
//     - Подсчитывает и возвращает сумму элементов массива