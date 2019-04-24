//1.Треугольник в цикле
let a = '';

for (let i=0; i<=6; i++) {
  a += '#';
  console.log(a)
}

//2. FizzBuzz
for (let i=1; i<=100; i++) {
  if (i%3===0 && i%5!==0) {
    console.log('Fizz')
  }
  else if (i%5===0 && i%3!==0) {
    console.log('Buzz')
  }
  else if (i%5===0 && i%3===0) {
    console.log('FizzBuzz')
  }
  else {
    console.log(i)
  }
}

//3. Шахматная доска

for (let i=1; i<=8; i++) {
  if (i%2!==0) {
    let a = [];
    for (let j=1; j<=8; j++) {
      if (j%2===0) {
        a.push(' ');
      }
      else if (j%2!==0){
        a.push('#')
      }
  }
    console.log(a)}
  if (i%2===0) { 
    let a = [];
    for (let j=1; j<=8; j++) {
      if (j%2===0) {
        a.push('#');
      }
      else if (j%2!==0){
        a.push(' ')
      }
    }
    console.log(a)
    }
}

//4. Рекурсия

function isEven(n) {
  let result;
  if (n===0) {
    return true;
  }
  else if (n===1) {
    return false;
  }
  else {
   return isEven(n-2);
  }
  
}

console.log(isEven(-1)) //Не выведет ничего, вероятно, из-за возникновения бесконечной рекурсии, потому что n надо бы брать по модулю, чтобы получить конечный результат

//5. Сумма диапазона

function range(start,end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

function sum(arr) {
  let s = 0;
  for (let i=0; i < arr.length; i++) {
    s += arr[i]
  }
  return s;
}


//6. Обращаем вспять массив

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length-1; i>=0; i--) {
    newArr.push(arr[i])
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  let first = 0;
  let last = arr.length - 1;
  while (first < last) {
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    first++;
    last--;
    
  }
  return arr
}
 //И полезным, и эффективным кажется второй вариант, потому что не занимает дополнительную память созданием нового массива, а так в зависимости от задачи, конечно

//7. Список

function arrayToList(arr) {
  let list = {};
  
    for (let i=0; i<arr.length; i++) {
      if (i!==arr.length - 1 ) {
        list = {value: arr.shift(), next: arrayToList(arr) }}
      else {
        list = {value: arr.shift(), next: null }
   }
  }

  return list
}

function listToArray(list) {
  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next
  }
  return arr
}
