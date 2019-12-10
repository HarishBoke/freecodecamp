function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
  
    var str = str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
    return str;
  }
  
  spinalCase('This Is Spinal Tap');
  