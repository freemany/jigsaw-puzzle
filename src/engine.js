import { shuffle } from "./helper.js";

export const generatePuzzle = (w, h) => {
  let count = 0;
  const puzzle = [];
  const result = [];

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const jigsaw = [null, null, null, null];

      if (j === 0) {
        puzzle[i] = [];
      }

      if (i == 0) {
        jigsaw[1] = 0;
      } else if (i == h - 1) {
        jigsaw[3] = 0;
      }
      if (j == 0) {
        jigsaw[0] = 0;
      } else if (j == w - 1) {
        jigsaw[2] = 0;
      }

      if (jigsaw[1] === null) {
        // top
        jigsaw[1] =
          i - 1 >= 0 && puzzle[i - 1] && puzzle[i - 1][j]
            ? -puzzle[i - 1][j][3]
            : ++count;
      }
      if (jigsaw[0] === null) {
        // left
        jigsaw[0] =
          j - 1 >= 0 && puzzle[i] && puzzle[i][j - 1]
            ? -puzzle[i][j - 1][2]
            : ++count;
      }
      if (jigsaw[2] === null) {
        // right
        jigsaw[2] =
          j + 1 < w && puzzle[i] && puzzle[i][j + 1]
            ? -puzzle[i][j + 1][0]
            : ++count;
      }
      if (jigsaw[3] === null) {
        // bottom
        jigsaw[3] =
          i + 1 < h && puzzle[i + 1] && puzzle[i + 1][j]
            ? -puzzle[i + 1][j][1]
            : ++count;
      }

      puzzle[i][j] = jigsaw;
      result.push(jigsaw);
    }
  }

  return shuffle(result);
};

export const sortPuzzle = (pArr) => {
  const linearResult = [];
  const result = [];
  const sideIndexMap = new Map();
  let first;

  let w = 0,
    h = 0;
  pArr.forEach((p, index) => {
    if (p[1] === 0) {
      w++;
    }
    if (p[0] === 0) {
      h++;
    }
    for (let i = 0; i < 4; i++) {
      if (p[i] !== 0) {
        sideIndexMap.set(p[i], index);
      }
    }
    if (p[0] === 0 && p[1] === 0) {
      first = p;
    }
  });

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (j === 0) {
        result[i] = [];
        if (i === 0) {
          result[i][j] = first;
          linearResult.push(result[i][j]);
          continue;
        }
      }

      if (j === 0) {
        result[i][j] = pArr[sideIndexMap.get(-result[i - 1][0][3])];
        linearResult.push(result[i][j]);
        continue;
      }

      result[i][j] = pArr[sideIndexMap.get(-result[i][j - 1][2])];
      linearResult.push(result[i][j]);
    }
  }

  return { result, linearResult };
};
