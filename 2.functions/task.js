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

function summElementsWorker(arr) {
  if (!arr.length) return 0;

  // Используем метод reduce для суммирования элементов массива
  return arr.reduce((acc, val) => acc + val, 0);
}

function differenceMaxMinWorker(arr) {
  if (!arr.length) return 0;

  // Используем методы Math.max и Math.min для нахождения максимального и минимального значения
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(arr) {
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

function averageEvenElementsWorker(arr) {
  if (!arr.length) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
          countEvenElement++;
      }
  }

  if (countEvenElement === 0) return 0;

  return sumEvenElement / countEvenElement;
}

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