export const range = (n: number) =>
  Array.apply(null, Array(n)).map((x, i) => i);

export const chunk = (arr: any[], n: number) =>
  range(Math.ceil(arr.length / n)).map((x, i) => arr.slice(i * n, i * n + n));
