//1.Треугольник в цикле (ПРИНЯТА)
let a = '';

for (let i=0; i<=6; i++) {
  a += '#';
  console.log(a)
}

//2. FizzBuzz (ИСПРАВЛЕНА)
for (let i=1; i<=100; i++) {
  if (i%3===0) {
    if (i%5===0) {
    console.log('FizzBuzz')
    }
    console.log('Fizz')
  }
  else if (i%5===0) {
    console.log('Buzz')
  }
  else {
    console.log(i)
  }
}

//3. Шахматная доска (ИСПРАВЛЕНА)

for (let i = 0; i<8; i++) {
    let a = [];
  for (let j = 0; j<8; j++) {
    if (i%2!==0) {
      if (j%2!==0) {
      a.push('#')
      }
      else {
        a.push(' ')
      }
    }
    else {
      if (j%2!==0) {
      a.push(' ')
      }
      else {
        a.push('#')
      }
    }
  }
  console.log(a)
}

//4. Рекурсия (ИСПРАВЛЕНА)

function isEven(n) {
  n = Math.abs(n);
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


//5. Сумма диапазона (ИСПРАВЛЕНА)

function range(start,end) {
  if (start > end) {
    let tmp = start;
    start = end;
    end = tmp;
  }
  let arr = [];
  if (start === end) {
    arr = [start]
  }
  else {
    for (let i = start; i <= end; i++) {
      arr.push(i)
    }
  }
  return arr
}

function sum(arr) {
  return arr.reduce(function(sum, current) {
    return sum + current;
  })
}


//6. Обращаем вспять массив (ИСПРАВЛЕНА)

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
  while (first !== last) {
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    first++;
    last--;
    
  }
  return arr
}
 

//7. Список

function arrayToList(arr) {
  let list = {value: null, next: null};
  
    if (arr.length === 1) {
      list.value = arr[0];
      list.next = null
      
    }
    else {
      list.value = arr.shift();
      list.next = arrayToList(arr)
    }
  
  return list;
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

function prepend(elem, list) {
  return {value: elem, next: list}
  
}

function nth(list, num) {
  if (num === 1) {
    return list.value
  }
  else {
    num -= 1;
    list = list.next;
    return nth(list,num)
  }
}

//нерекурсивный вариант
// function nth(list, num) {
//   let tmp = list;
//   let i = 1;
//   while (num!==i) {
//     if (tmp && tmp!==null) {
//       tmp = tmp.next;
//       i++;
//     }
//     else {
//       return undefined;
//     }
//   }
//   return tmp.value
// } 

//8. deepEqual

function deepEqual(a,b) {
  if (typeof a != 'object' && typeof b != 'object') {
    if (a === b) {
      return true
    }
    return false
  }
  
  if (typeof a == 'object' && typeof b == 'object') {
    if (a === null || b === null) {
      if (a === b) {
        return true
      }
      else {
        return false
      }
    }
  
    for (var key in a) {
      if (!deepEqual(a[key], b[key])) {
          return false       
      }
    }        
    return true
      }
     
}
