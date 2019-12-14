/*
Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
*/ 

function fearNotLetter(str) {
    var alphabates = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var missingLetter;
  
    var startsFrom = alphabates.indexOf(str[0]);
    var strLength = startsFrom + str.length;
  
  //console.log("startsFrom", startsFrom, strLength);
  
  
    for(let i = startsFrom, j=0; i < strLength; i++){
        if(str[j] !== alphabates[i]){
            missingLetter = alphabates[i];
            console.log("missingLetter", missingLetter);
            break;
        }
        j++;
    }
  
    return missingLetter;
  }
  
  fearNotLetter("stvwx");
  