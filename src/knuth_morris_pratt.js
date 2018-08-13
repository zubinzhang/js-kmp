export function getNext(word) {
  const next = [-1];

  let wordIndex = 0;
  let suffixIndex = -1;

  while (wordIndex < word.length) {
    if (suffixIndex === -1 || word[wordIndex] === word[suffixIndex]) {
      wordIndex++;
      suffixIndex++;

      next[wordIndex] = suffixIndex;
    } else {
      suffixIndex = next[suffixIndex];
    }
  }

  return next;
}

/**
 * KMP算法
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
