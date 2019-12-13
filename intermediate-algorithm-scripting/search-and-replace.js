function myReplace(str, before, after) {
    var newStr = "";
  
      if(checkCase(before) == "uppercase"){   
          after =  after[0].toUpperCase() + after.substr(1);
      }
      newStr = str.replace(before, after);
      return newStr;
    }
  
  function checkCase(word){
    var wordCase = "lowercase";
    if(word.charAt(0) === word.charAt(0).toUpperCase()){
        return "uppercase";
    }
    return wordCase;
  }
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  