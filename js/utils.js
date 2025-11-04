export const getDominoes = (leftNumber = 0, rightNumber = 0, pieces = []) => {
  if (leftNumber > 6) return pieces;
  if (rightNumber > 6)
    return getDominoes(leftNumber + 1, leftNumber + 1, pieces);
  pieces.push({ cara1: leftNumber, cara2: rightNumber });
  return getDominoes(leftNumber, rightNumber + 1, pieces);
};

export const getShuffle = (array, leftNumber = array.length - 1) => {
  if (leftNumber <= 0) return array;
  const rightNumber = Math.floor(Math.random() * (leftNumber + 1));
  [array[leftNumber], array[rightNumber]] = [
    array[rightNumber],
    array[leftNumber],
  ];
  return getShuffle(array, leftNumber - 1);
};

export const getHighestDouble = (hand) => {
  const doubles = hand
    .map((dominoe, index) => ({ dominoe, index: index + 1 }))
    .filter(({ dominoe }) => dominoe.cara1 === dominoe.cara2);
  return doubles.reduce((max, domino) =>
    domino.dominoe.cara1 > max.dominoe.cara1 ? domino : max
  );
};
