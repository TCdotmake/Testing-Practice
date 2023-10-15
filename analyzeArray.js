export default function analyzeArray(array) {
  let result = { length: 0 };
  result.sum = array.reduce((sum, n) => {
    return (sum += n);
  }, 0);
  result.length = array.reduce((length, n) => {
    return (length += 1);
  }, result.length);
  if (array.length > 0) {
    result.average = result.sum / result.length;
    result.max = Math.max(...array);
    result.min = Math.min(...array);
  }
  return result;
}
