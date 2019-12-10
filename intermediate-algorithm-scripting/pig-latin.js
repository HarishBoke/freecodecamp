function translatePigLatin(str) {
    var newStr = str.toLowerCase();
    var char;
    for(let i = 0; i < newStr.length; i++){
      char = newStr[i];
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            newStr = newStr.substring(i, newStr.length) + newStr.substring(0, i);
            break;
        } 
    }
    if(str.startsWith("a") || str.startsWith("e") || str.startsWith("i") || str.startsWith("o") || str.startsWith("u")) {
        newStr += "way"
    }else {
      newStr += "ay"
    }
    return newStr;
  }
  
  translatePigLatin("consonant");
  


  // Should try with regex 
  //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin 