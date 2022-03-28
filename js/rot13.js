const _COUPLES = [
  ["a", "n"],
  ["b", "o"],
  ["c", "p"],
  ["d", "q"],
  ["e", "r"],
  ["f", "s"],
  ["g", "t"],
  ["h", "u"],
  ["i", "v"],
  ["j", "w"],
  ["k", "x"],
  ["l", "y"],
  ["m", "z"],
  ["A", "N"],
  ["B", "O"],
  ["C", "P"],
  ["D", "Q"],
  ["E", "R"],
  ["F", "S"],
  ["G", "T"],
  ["H", "U"],
  ["I", "V"],
  ["J", "W"],
  ["K", "X"],
  ["L", "Y"],
  ["M", "Z"],
];

function parseRot13(text) {
  let parsedText = "";
  for (let letter of text) {
    parsedText += parseLetter(letter);
  }
  return parsedText;
}

function parseLetter(letter) {
  let parsedLetter = letter;

  const coupleIndex = _COUPLES.findIndex((couple) =>
    couple.some((c) => c === letter)
  );

  if (coupleIndex !== -1) {
    const couple = _COUPLES[coupleIndex];
    parsedLetter = couple.find((c, i) => couple[(i + 1) % 2] === letter);
  }

  return parsedLetter || letter;
}
