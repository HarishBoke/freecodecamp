/*
Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
*/ 
function convertHTML(str) {
    // &colon;&rpar;
    var newStr = str.split("");
    for(let i =0; i < newStr.length; i++){
        switch(newStr[i]){
            case "&":
              newStr[i] = "&amp;";
            break;
            case "<":
              newStr[i] = "&lt;";
            break;
            case ">":
              newStr[i] = "&gt;";
            break;
            case '"':
              newStr[i] = "&quot;";
            break;
            case "'":
              newStr[i] = "&apos;";
            break;
        }
        
    }
    newStr = newStr.join("");
    //console.log("after", str);
    return newStr;
  }
  
  convertHTML("Dolce & Gabbana");
  