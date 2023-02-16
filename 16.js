function mostFrequentInitial(array) {
    const counts = {};
    
    for (let i = 0; i < array.length; i++) {
      const initial = array[i][0].toLowerCase();
      if (counts[initial]) {
        counts[initial]++;
      } else {
        counts[initial] = 1;
      }
    }
   
    let maxCount = 0;
    let maxLetter = '';
    for (const letter in counts) {
      if (counts[letter] > maxCount) {
        maxCount = counts[letter];
        maxLetter = letter;
      }
    }
    
    return maxLetter.toUpperCase();
  }
  const array= ['Estonia', 'Finland', 'Fiji', 'France', 'Norway', 'Iceland']
  const mostFrequent = mostFrequentInitial(array);
  console.log(`The most frequent initial letter is '${mostFrequent}'`);