// Create by Zubin on 2018-08-11 14:50:54

export function getNext(word) {
  const next = [-1];
  let suffixIndex = -1;
  let wordIndex = 0;

  while (wordIndex < word.length) {
    if (suffixIndex === -1 || word[wordIndex] === word[suffixIndex]) {
      suffixIndex++;
      wordIndex++;

      if (word[wordIndex] === word[suffixIndex]) {
        next[wordIndex] = next[suffixIndex];
      } else {
        next[wordIndex] = suffixIndex;
      }
    } else {
      suffixIndex = next[suffixIndex];
    }
  }

  return next;
}

// console.log(getNext('a'));
// console.log(getNext('ab'));
// console.log(getNext('abc'));
// console.log(getNext('aba'));
// console.log(getNext('abcdabd'));

/**
 * KMP算法(优化)
 *
 * @export
 * @param {String} searchString
 * @param {String} word
 */
export default function knuthMorrisPratt(searchString, word) {
  let strIndex = 0;
  let wordIndex = 0;

  const next = getNext(word);

  while (strIndex < searchString.length && wordIndex < word.length) {
    if (wordIndex === -1 || searchString[strIndex] === word[wordIndex]) {
      strIndex++;
      wordIndex++;
    } else {
      wordIndex = next[wordIndex];
    }
  }

  return wordIndex === word.length ? strIndex - wordIndex : -1;
}
