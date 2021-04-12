/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let countBef;
  let countAff;
  let temp;
  let i;
  let j;
  const namesNew = new Array(names.length);
  for (i = 0; i < names.length; i++) {
    countBef = 0;
    countAff = 0;
    for (j = 0; j < i; j++) {
      if (names[i] === names[j]) {
        countBef++;
      }
    }
    if (countBef > 0) {
      temp = `${names[i]}(${countBef})`;
    } else {
      temp = names[i];
    }
    for (j = 0; j < i; j++) {
      if (namesNew[j] === temp) {
        countAff++;
      }
    }
    if (countAff > 0) {
      namesNew[i] = `${temp}(${countAff})`;
    } else {
      namesNew[i] = temp;
    }
  }
  return namesNew;
}

module.exports = renameFiles;
