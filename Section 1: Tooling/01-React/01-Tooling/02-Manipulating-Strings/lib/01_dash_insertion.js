function isConsonant(chr) {
  const re = /[aeiouy ]/i;
  return !chr.match(re);
}

function insertDash(word) {
  // TODO: implement the method and return word with dashes
  if (word.length === 0) {
    return '';
  }
  return word
    .split('')
    .map((chr, index, chrs) => {
      // console.log(`${chr} at ${index}`);
      if (index > 0 && isConsonant(chr) && isConsonant(chrs[index - 1])) {
        return `-${chr}`;
      }
      return `${chr}`;
    })
    .join('');
}

module.exports = insertDash;
