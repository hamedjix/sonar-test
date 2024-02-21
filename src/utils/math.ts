export const sum = (a: number, b: number) => {
  return a + b;
};

export const max = (a: number, b: number) => {
  return a > b ? a : b;
};

export const square = (num: number) => {
  return num * num;
};

export const factorial = (num: number) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

export const isPrime = (num: number) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
