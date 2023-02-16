array = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']

const concatenated = array.reduce((accumulator, currentValue) => {
  return accumulator +' '+ currentValue;
 
}, '');

console.log(concatenated+' are north american countries');
