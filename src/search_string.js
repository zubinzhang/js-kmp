// Create by Zubin on 2018-08-11 09:50:18

/**
 * 朴素字符串匹配算法
 * @param {String} searchString 待匹配的字符串
 * @param {String} word 关键字
 */
export default function indexOf(searchString, word) {
  let strIndex = 0;
  let wordIndex = 0;

  while (strIndex < searchString.length && wordIndex < word.length) {
    if (searchString[strIndex] === word[wordIndex]) {
      strIndex++;
      wordIndex++;
    } else {
      strIndex = strIndex - wordIndex + 1;
      wordIndex = 0;
    }
  }

  return wordIndex === word.length ? strIndex - wordIndex : -1;
}
