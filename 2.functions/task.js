function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
      }
      if (arr[i] > max) {
          max = arr[i];
      }
      sum += arr[i];
  }

  const avg = sum / arr.length;
  const roundedAvg = parseFloat(avg.toFixed(2));

  return { min, max, avg: roundedAvg };
  
}
console.log (getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }


function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61



function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  // Используем методы Math.max и Math.min для нахождения максимального и минимального значения
  let max = arr [0];
  let min = arr [0];
  for (let i = 1; i < arr.length; i ++ ) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return max - min;
}
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10


function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
      } else {
          sumOddElement += arr[i];
      }
  }

  return sumEvenElement - sumOddElement;
}
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log()
      if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
          countEvenElement++;
      }
  }

  if (countEvenElement === 0) return 0;

  return +(sumEvenElement / countEvenElement).toFixed(2);
}
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity; // Используем -Infinity как начальное значение

  for (let i = 0; i < arrOfArr.length; i++) {
      const result = func(...arrOfArr[i]); // Вызываем функцию-насадку с аргументами из текущего элемента массива

      if (result > maxWorkerResult) {
          maxWorkerResult = result;
      }
  }

  return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
