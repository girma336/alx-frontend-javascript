export default function concatArrays(array1, array2, string) {
  const array3 = Array.from(string);

  return [...array1, ...array2, ...array3];
}
