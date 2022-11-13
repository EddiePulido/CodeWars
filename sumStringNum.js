var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let result = []
    
    for(let i = 0; i <= count; i++){
      result.push(i)
    }
    let sum = result.reduce((acc,c) => acc + c, 0)
    
    let end = result.join('+') + ' = ' + sum
    if(end === '0 = 0') return '0=0'
    if(end === ' = 0') return count+'<0'
    return end
  };

  return SequenceSum;  

})(); 