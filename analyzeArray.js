const analyzeArray = (arr) => {
  const length = arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const average = arr.reduce((a, b) => a + b / length, 0);

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
};

export default analyzeArray;
