const { NotImplementedError } = require('../extensions/index.js');

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
function renameFiles(names) {
  const files = {}
  names.forEach(name => {
    files[name] = (files[name] || 0 ) + 1
  })
  const unique = Array.from(new Set(names))
  const uniqueRename = (file, quantity) => {
    return Array(quantity).fill('').map((el, i) => el === file ? file : `${file}(${i+1})`)
  }

  const newFiles = Array.from(Object.entries(files).map(([k, v]) => {
    return uniqueRename(k, v);
  }))
  return newFiles
}
}

module.exports = {
  renameFiles
};
