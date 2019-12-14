function pairElement(str) {
    var newArr = [];
    var obj = {
      "A": ["A","T"],
      "T": ["T","A"],
      "G": ["G","C"],
      "C": ["C","G"]
    }
    for(let item of str){
      newArr.push(obj[item]);
    }
    return newArr;
  }
  
  pairElement("GCG");
  

  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/ 