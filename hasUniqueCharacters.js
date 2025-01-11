function hasUniqueCharacters(word){
  let lowerWord = word.toLowerCase();
  let cache = {};
  for(const char of lowerWord) {
    console.log({cache, char})
    if(cache[char])
      return false;
    cache[char] = 1;
  } 
  return true;
}
console.log(hasUniqueCharacters("hello")); // -> false
console.log(hasUniqueCharacters("World")); // -> true
console.log(hasUniqueCharacters("abcde")); // -> true
console.log(hasUniqueCharacters("AaBbCc")); // -> false