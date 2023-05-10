const sumEvenAfterQueries = (A, queries) => {
  let sum = 0;
  const result = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      sum += A[i];
    }
  }
  for (let i = 0; i < queries.length; i++) {
    const val = queries[i][0];
    const index = queries[i][1];
    if (A[index] % 2 === 0) {
      sum -= A[index];
    }
    A[index] += val;
    if (A[index] % 2 === 0) {
      sum += A[index];
    }
    result.push(sum);
  }
  return result;
}