function toRoman(num) {
  const romanNumerals = {
      1000: 'M' ,
       900: 'CM' ,
       500: 'D' ,
       400: 'CD' ,
       100: 'C' ,
       90: 'XC' ,
       50: 'L' ,
       40: 'XL' ,
       10: 'X' ,
       9: 'IX' ,
       5: 'V' ,
       4: 'IV' ,
       1: 'I' ,
  };

  let romanized = '';
  const numericalKeys = Object.keys(romanNumerals).sort((a,b) => b - a)


  numericalKeys.forEach(key => {
      while (+key <= num){
          romanized += romanNumerals[key];
          num -= +key;
      }
  })

  return romanized;
}

console.log(toRoman(6))
