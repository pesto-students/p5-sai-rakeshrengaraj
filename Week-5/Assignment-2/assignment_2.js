function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
  let vowelMap = new Map();
  for (const char of str){
    let lowerChar = char.toLowerCase();
    if (isVowel(lowerChar)){
      if (vowelMap.has(lowerChar)){
        vowelMap.set(lowerChar, vowelMap.get(lowerChar) +1)
      }else{
        vowelMap.set(lowerChar,1)
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount("Checking vowel counts"))
