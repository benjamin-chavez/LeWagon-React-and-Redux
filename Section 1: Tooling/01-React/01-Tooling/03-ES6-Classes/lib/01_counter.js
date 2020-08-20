class Counter {
  constructor(text) {
    // TODO: build an internal Map of word => occurrences.
    this.dict = {};
    if (!text || text.length === 0) {
      this.text = 0;
    } else {
      this.text = text.toLowerCase().split(' ');
      this.text.forEach((word) => {
        this.dict[word] = (this.dict[word] || 0) + 1;
      });
    }
  }

  occurrences(word) {
    // TODO: return the number of occurrences
    if (!this.text || this.text.length === 0) {
      return 0;
    }
    if (this.dict[word.toLowerCase()]) {
      return this.dict[word.toLowerCase()];
    }
    return 0;
  }
}

module.exports = Counter;

// const myCounter = new Counter('a fat cat sat on a mat and ate a fat rat');

// console.log(myCounter.occurrences('at'));
